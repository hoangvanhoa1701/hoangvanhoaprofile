<template>
  <div class="loginForm customInput">
    <el-form
      @submit.prevent.native="login"
      :model="model"
      ref="model"
      :label-position="labelPosition"
    >
      <el-form-item
        label="Email"
        prop="userNameOrEmailAddress"
        :rules="[
          { required: true, message: 'Vui lòng nhập Email', trigger: 'blur' },
          { type: 'email', message: 'Địa chỉ Email không đúng', trigger: ['blur', 'change'] }
        ]"
      >
        <el-input v-model="model.userNameOrEmailAddress"></el-input>
      </el-form-item>

      <el-form-item
        label="Mật khẩu"
        prop="password"
        :rules="[
          { required: true, message: 'Vui lòng nhập mật khẩu', trigger: 'blur' },
        ]"
      >
        <el-input type="password" v-model="model.password"></el-input>
      </el-form-item>

      <el-form-item>
        <div class="d-flex justify-content-center">
          <el-button
            class="btnPay w-100 w-sm-100"
            type="primary"
            native-type="submit"
            :loading="isLoading"
          >{{L('Đăng nhập')}}</el-button>
        </div>
        <div class="d-flex justify-content-center">
          <el-button class="btnForgot" type="text" @click.prevent="showForgotPassword">
            {{L('Quên mật khẩu')}}
            <el-icon class="el-icon-question"></el-icon>
          </el-button>
        </div>
        <div>
          <p class="text-center lineHeight1">Hoặc</p>
          <button
            class="btnSingin btn"
            @click.prevent="loginWithSocial(item.id)"
            :class="[ item.id, index === 0 ? 'mb-3' : '']"
            v-for="(item, index) in providers"
            :key="item.id"
            type="button"
          >
            <i :class="item.icon" class="mr-2" aria-hidden="true"></i>
            Đăng nhập với {{item.name}}
          </button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { AppMutations, AppActions } from "@/store"
import AuthService, {
  ExternalProvider,
  ValidateProvider,
  ExternalProviderUserInfo,
  GetExternalToken
} from "@/api/auth"
import { cookieKey } from "@/misc/app-consts"

export default {
  name: "login-form",
  data() {
    return {
      model: {},
      loading: false,
      labelPosition: "left",
      isLoading: false
    }
  },
  computed: {
    providers() {
      return Object.values(ExternalProvider)
    },
    lastedRouteNotAuth() {
      return this.$store.$auth.$storage.getUniversal(
        AppMutations.lastedRouteNotAuth
      )
    }
  },
  mounted() {
    if (process.client) {
      if (this.$route.query && this.$route.query.providerkey) {
        // login or regiter with external provider
        this.loginOrRegisterToDb()
      }
    }
  },
  methods: {
    showForgotPassword() {
      this.$store.commit(AppMutations.updatedialogLoginVisible, false)
      this.$store.commit(AppMutations.updatedialogVisibleForgotForm, true)
    },
    redirectTo() {
      if (this.$route.query && this.$route.query.redirect) {
        this.$router.push(this.$route.query.redirect)
      } else if (this.lastedRouteNotAuth) {
        this.$router.push(this.lastedRouteNotAuth)
      } else {
        this.$router.push(this.localePath("index"))
      }
    },
    login() {
      if (this.model.userNameOrEmailAddress && this.model.password) {
        this.isLoading = true
        this.$auth
          .loginWith("local", {
            data: {
              userNameOrEmailAddress: this.model.userNameOrEmailAddress,
              password: this.model.password
            }
          })
          .then(() => {
            // Success
            this.$message({
              type: "success",
              message: this.L("Đăng nhập thành công")
            })
            this.$store.commit(AppMutations.updatedialogLoginVisible, false)
            this.redirectTo()
          })
          .catch(error => {
            if (
              error.response &&
              error.response.data &&
              error.response.data.error
            ) {
              this.$message({
                type: "error",
                message: error.response.data.error.details
              })
            }
          })
          .finally(() => {
            this.isLoading = false
          })
      } else {
        this.$message({
          type: "error",
          message: this.L("Vui lòng nhập đủ thông tin")
        })
      }
    },
    loginWithSocial(provider) {
      try {
        this.$auth.loginWith(provider)
      } catch (e) {
        console.warn(e)
      }
    },
    clearToken() {
      //clear social token
      this.$auth.setToken(this.$auth.strategy.name, "")
      this.$axios.defaults.headers.common["Authorization"] = ""
    },
    getSocialUserInfo() {
      return AuthService.getSocialUserInfo(
        this.$axios,
        this.$route.query.providerkey,
        this.$auth
      )
    },
    capitalize(s) {
      if (typeof s !== "string") return ""
      return s.charAt(0).toUpperCase() + s.slice(1)
    },
    loginOrRegisterToDb() {
      try {
        this.isLoading = true
        if (!ValidateProvider(this.$route.query.providerkey)) {
          this.$message({
            type: "error",
            message: this.L("Provider không hợp lệ")
          })
          return
        }
        this.getSocialUserInfo().then(resp => {
          this.clearToken()
          const externalUserInfo = ExternalProviderUserInfo(
            this.$auth.strategy.name,
            resp.data
          )
          delete this.$axios.defaults.headers.common["Authorization"] //not sending an authorization empty with ssl
          //call api to login or register
          AuthService.loginSocial(this.$axios, {
            AuthProvider: this.capitalize(this.$route.query.providerkey),
            ProviderKey: externalUserInfo.SocialId, //provider is social client Id, create fake providerkey to pass validate model in server
            ProviderAccessCode: GetExternalToken(
              this.$route.query.providerkey,
              this.$route
            )
          })
            .then(res => {
              if (res.data.result) {
                //change strategy to local
                this.$auth.setStrategy("local").then(() => {
                  let token = `${this.$auth.strategy.options.tokenType} ${
                    res.data.result.accessToken
                  }` //Bearer token
                  this.$auth.setToken("local", token)
                  this.$axios.defaults.headers.common["Authorization"] = token
                  //this.$auth.setUser(res.data.Data)
                  this.$auth.fetchUser().then(pp => {
                    this.$auth.$storage.setUniversal(
                      cookieKey.SocialUrl,
                      externalUserInfo.SocialPicture
                    )
                    this.$store.dispatch(AppActions.setAvatarUrl, this.$auth)
                  })
                  //redirect to lastedRouteNotAuth
                  this.redirectTo()
                })
              } else {
                this.clearToken()
                this.$auth.setStrategy("local")
                if (this.$auth.loggedIn) {
                  // logout if external provider logged in
                  this.$auth.logout()
                }
                throw "Exception"
              }
            })
            .catch(ex => {
              this.$message({
                type: "error",
                message: this.L(
                  "Có lỗi trong quá trình thực thi. Vui lòng thử lại sau."
                )
              })
            })
            .finally(ex => {
              this.isLoading = false
            })
        })
      } catch (ex) {
        this.$message({
          type: "error",
          message: this.L(
            "Có lỗi trong quá trình thực thi. Vui lòng thử lại sau."
          )
        })
        this.$auth.logout()
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.colorMain {
  color: #59c6d7;
}
.err-mes {
  color: red;
  font-size: 1rem;
}
</style>