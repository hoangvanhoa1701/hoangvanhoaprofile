<template>
  <div ref="verifyPhone" id="verifyPhone" class="d-block hidden mb-3" v-cloak>
    <template v-if="Phone != null">
      <b>{{Phone}}</b>
      <span v-if="PhoneConfirmed" class="mr-2">({{L('đã xác nhận')}})</span>
      <span v-else class="mr-2">({{L('chưa xác nhận')}})</span>
      <a
        v-if="!PhoneConfirmed"
        class="btn btn-primary clWhite authorizePhone mr-2"
        @click.prevent="showModal('verify')"
      >
        <span>{{L('Xác thực SĐT')}}</span>
      </a>
    </template>
    <a class="btn btn-primary clWhite ml-0" @click.prevent="showModal('addOrEdit')">
      <template v-if="Phone !== null">
        <span>{{L('Cập nhật SĐT')}}</span>
      </template>
      <template v-else>
        <span>{{L('Thêm SĐT')}}</span>
          <!-- <b-button v-b-modal.modal1>Launch demo modal</b-button> -->
      </template>
    </a>
    <client-only>
      <b-modal
        hide-footer
        hide-header
         ref="myModalRef"
        id="modal1"
        name="addOrEditPhone"
        class="reviewHeight"
        :width="500"
        height="auto"
        :click-to-close="false"
      >
        <div class="addReview px-2">
          <div>
            <div class="d-flex justify-content-end header">
              <a @click="hideModal" class="pointer p-2 pt-3 mb-0 removePopup">
                <i class="fa fa-times" aria-hidden="true"></i>
              </a>
            </div>
            <div class="modal-body px-4 pt-0 color-black">
              <slot name="body">
                <h5 class="font-weight-bold mb-0">
                  <template v-if="ModalType == 'verify'">{{L('Xác thực số điện thoại của bạn')}}</template>
                  <template v-else-if="ModalType == 'addOrEdit'">{{L('Cập nhật số điện thoại của bạn')}}</template>
                </h5>
                <div class="text-center">
                  <div class="my-5">
                    <img src="../assets/phone.png" width="70" class="img-responsive">
                  </div>
                  <p
                    class="pleaseType"
                    v-if="!EnteringToken"
                  >{{L('Hãy nhập số điện thoại bạn đang sử dụng')}}</p>
                  <p class="fontSize80" v-else>
                    {{L('Chúng tôi mới gửi cho bạn một tin nhắn SMS với một mã xác thực. Nhập nó vào ô bên dưới để xác minh số điện thoại của bạn. Xin lưu ý rằng thời gian gửi SMS có thể mất tới một phút hoặc lâu hơn.')}}
                  </p>
                  <p>
                    <client-only>
                      <vue-tel-input
                        v-model="Phone"
                        @inputvalue="inputPhone"
                        placeholder="Nhập số điện thoại"
                        required
                        :disabled="EnteringToken"
                        :preferred-countries="['vn']"
                      ></vue-tel-input>
                    </client-only>
                  </p>
                  <p v-if="!EnteringToken">
                    <small>
                      {{L('Chúng tôi chỉ sử dụng số điện thoại của bạn cho mục đích thông báo, khi có người nào đó liên hệ, bạn sẽ nhận được một thông báo trên điện thoại của mình.')}}
                    </small>
                  </p>
                  <p v-else>
                    <input
                      class="form-control mb-2 codeVerify"
                      type="text"
                      v-model="Token"
                      placeholder="Mã xác nhận"
                    >
                  </p>
                  <p class="mt-4">
                    <button
                      v-if="!EnteringToken"
                      type="button"
                      class="btn btn-primary w-50"
                      @click="getVerifyCode"
                    >{{L('Lấy mã xác thực')}}</button>
                    <button
                      v-else
                      type="button"
                      class="btn btn-primary w-50"
                      @click="submitVerificationToken"
                    >{{L('Xác thực')}}</button>
                  </p>
                </div>
              </slot>
            </div>
          </div>
        </div>
        
      </b-modal>
    </client-only>
  </div>
</template>

<script>
import VerifyPhoneService from "@/api/verifyPhone"

export default {
  data() {
    return {
      Phone: null,
      PhoneConfirmed: false,
      ModalType: "verify",
      IsPhoneValid: false,
      EnteringToken: false,
      Token: ""
    }
  },
  created() {
    this.getPhoneStatus()
  },
  mounted() {
    this.$refs.verifyPhone.classList.remove("hidden")
  },
  methods: {
    getPhoneStatus() {
      VerifyPhoneService.getPhoneStatus(this.$axios)
        .then(response => {
          this.Phone = response.data.Data.Phone
          this.PhoneConfirmed = response.data.Data.PhoneConfirmed
        })
        .catch(e => {
          console.log(e)
        })
    },
    showModal(type) {
      this.ModalType = type
      // this.$modal.show("addOrEditPhone")
         this.$refs.myModalRef.show()
    },
    hideModal() {
      // this.$modal.hide("addOrEditPhone")
        this.$refs.myModalRef.hide()
      this.getPhoneStatus()
    },
    inputPhone({ number, isValid, country }) {
      this.IsPhoneValid = isValid
    },
    getVerifyCode() {
      VerifyPhoneService.getVerificationToken(this.$axios, this.Phone)
        .then(response => {
          if (response.data) {
            this.EnteringToken = true
          } else {
            alert(response.data.Message)
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    submitVerificationToken() {
      if (this.Token) {
        VerifyPhoneService.submitVerificationToken(this.$axios, {
          phone: this.Phone,
          token: this.Token
        })
          .then(response => {
            if (response.data) {
              this.EnteringToken = false
              this.PhoneConfirmed = true
              this.hideModal()
            } else {
              alert(response.data.Message)
            }
          })
          .catch(e => {
            console.log(e)
          })
      } else {
        alert("Vui lòng nhập mã xác nhận")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.clWhite{
  color:#fff !important;
}
.hidden {
  display: none !important;
}
.addReview {
  color: #3e3e3e;
  .codeVerify {
    border-radius: 0.25rem;
  }
  .vue-tel-input {
    input[type="tel"] {
      font-weight: 600;
    }
  }

  .pleaseType {
    font-weight: 600;
  }

  .fontSize80 {
    font-size: 80%;
  }
}

.btn {
  &.btn-main {
    color: #fff;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    &:hover {
      color: #fff !important;
    }
  }
}
</style>

