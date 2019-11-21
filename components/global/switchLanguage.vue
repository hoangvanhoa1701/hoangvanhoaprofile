<template>
  <el-dropdown
    trigger="click"
    placement="top-start"
  >
    <span class="el-dropdown-link ">
      <span class="languageText">
       <span v-if="currentLocale.code=='vi'">{{L('VI')}}</span>
       <span v-else>{{L('EN')}}</span>
      </span>
      <i class="el-icon-caret-bottom languageArrow"></i>
    </span>
    <el-dropdown-menu
      slot="dropdown"
      class="lang-wrap"
    >
      <el-dropdown-item
        v-for="(locale, index) in $i18n.locales"
        :key="index"
      >
        <a
          v-if="locale.code !== currentLocale.code"
          @click="reloadLink(switchLocalePath(locale.code))"
          class="d-flex align-items-center"
        >
          <span class=" mr-2">
            <img :src="`/${locale.code}.png`">
          </span>
          <span class="languageText">{{locale.name}}</span>
        </a>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "switch-language",
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.el-dropdown-link{
  outline: none;
}
.languageText{
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  font-family: "Roboto", sans-serif;
  color: #000;
  text-decoration: none;
}
.languageArrow{
   font-size: 18px;
  font-weight: 500;
  text-align: center;
  font-family: "Roboto", sans-serif;
  color: #000;
  text-decoration: none;
}
.socialLine {
  a {
    margin-right: 25px;

    &:hover {
      opacity: 0.7;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  .socialBtn {
    color: #fff;
    font-size: 20px;
    border-radius: 50%;
    padding: 7px 0;
    width: 32px;
    height: 32px;
    text-align: center;
  }
  .facebookBtn {
    background: #3b5998;
  }
  .googleBtn {
    background: #dc4e41;
    font-size: 18px !important;
  }
  .instaBtn {
    background: #0077b5;
  }
  .twitterBtn {
    background: #55acee;
  }
}
</style>



