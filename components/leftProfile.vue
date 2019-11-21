<template>
  <div class="navProfile">
    <client-only>
      <el-menu :default-openeds="['1','2','3']" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-info"></i>
            <span class="title subTitle">{{L('Hồ sơ cá nhân')}}</span>
          </template>
          <el-menu-item index="1-1">
            <nuxt-link class="link" slot="title" :to="localePath('profile')">
              <span>{{L('Thông tin cá nhân')}}</span>
            </nuxt-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <nuxt-link class="link" slot="title" :to="localePath('changePassword')">
              <span>{{L('Thay đổi mật khẩu')}}</span>
            </nuxt-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-date"></i>
            <span class="title subTitle">{{L('Sự kiện')}}</span>
          </template>
          <el-menu-item index="2-1">
            <nuxt-link class="link" slot="title" :to="localePath('myEvent')">
              <span>{{L('Sự kiện của tôi')}}</span>
            </nuxt-link>
          </el-menu-item>
            <el-menu-item index="2-2">
            <nuxt-link class="link" slot="title" :to="localePath('profile-wishList')">
              <span>{{L('Sự kiện yêu thích')}}</span>
            </nuxt-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span class="title subTitle">{{L('Vé của tôi')}}</span>
          </template>
          <el-menu-item index="3-1">
            <nuxt-link class="link" slot="title" :to="localePath('profile-myTicket')">
              <span>{{L('Vé đã mua')}}</span>
            </nuxt-link>
          </el-menu-item>
          <el-menu-item index="3-1">
            <nuxt-link class="link" slot="title" :to="localePath('profile-paymentHistory')">
              <span>{{L('Lịch sử giao dịch')}}</span>
            </nuxt-link>
          </el-menu-item>
          <!-- <el-menu-item index="3-2">
                  <nuxt-link class="link"   slot="title" :to="localePath('index')"><span>{{L('Vé yêu thích')}}</span></nuxt-link>
          </el-menu-item>-->
        </el-submenu>
      </el-menu>
    </client-only>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen() {},
    handleClose() {}
  }
}
</script>
<style lang="scss" scoped>
.title {
  &.subTitle {
    font-size: 1rem;
    text-transform: capitalize;
  }
}
.navProfile {
  height: 100%;
}
.link {
  display: block;
}
.el-menu {
  height: 100%;
}
</style>


