<template>
    <div class="footer w-100 footerCustom">
      <div class="footerContainer mx-auto">
        <h2 title="Follow us" class="footerFollowUs row font-weight-bold m-0 p-0 pt-2 mb-2 text-black">
          {{L('Follow us')}}
        </h2>
        <div class="socialButtonGroup row m-0 p-0 pt-3">
          <a @click="goToFanpageFacebook()">
            <img class="mr-3 facebookIcon" width="46" height="46" src="@/assets/images/icon/facebook-square-brands.svg" alt="image-icon-facebook-mitsubishi-electric-vn"/>
          </a>
          <a @click="goToYoutubeChannel()">
            <img class="youtubeIcon" width="50" height="50" src="@/assets/images/icon/youtube-brands.svg" alt="image-icon-youtube-mitsubishi-electric-vn"/>
          </a>
        </div>    
        <div class="footerCopyRight row justify-content-between mx-0 p-0 align-items-end marginTop9-4rem">
          <label class="coppyRight mr-3">
            {{L('© Mitsubishi Electric Corporation')}}
          </label>
          <span class="siteMap marginBot-5rem">
            <a :href="'/'+privacyPolicy.detailUrl">{{L('Privacy Policy ')}}</a>
            <a class="mx-3">|</a>
            <a :href="'/'+termsOfUse.detailUrl">{{L('Terms of Use')}}</a>
            <a class="mx-3">|</a>
            <a href="#">{{L('Sitemap')}}</a>
          </span>
        </div>
        <div class="goTop" >
          <a href="#"></a>
        </div>
      </div>

    </div>
</template>

<script>

import TopicService from "@/api/topic"
import { EnumTopicIds,EnumSettingKey } from "@/api/enum/enums"
import SettingService from "@/api/setting"
export default {
  name: "pageFooter",
  data() {
    return {
      privacyPolicy:{} ,
      termsOfUse: {},
       youtubeUrl:"",
       facebookPageUrl:""

    }
  },
  async mounted() {
    TopicService.getTopicLinkById(this.$axios,EnumTopicIds.PrivacyPolicy)
      .then(resp =>{      
        this.privacyPolicy=resp.data.result
      })
    TopicService.getTopicLinkById(this.$axios,EnumTopicIds.TermsOfUse)
      .then(resp =>{      
        this.termsOfUse=resp.data.result
      })
       SettingService.getSettingKey(this.$axios,EnumSettingKey.youtubeUrl).then(resp =>{
        this.youtubeUrl = resp.data.result
      })
       SettingService.getSettingKey(this.$axios,EnumSettingKey.facebookPageUrl).then(resp =>{
        this.facebookPageUrl = resp.data.result
      })
  },
  methods: {
    goToYoutubeChannel()
    {
      window.open(this.youtubeUrl, '_blank');
    },
    goToFanpageFacebook()
    {
      window.open(this.facebookPageUrl, '_blank');
    },
    scrollElement(el) {
      let data = document.getElementById(el)
      if (data) {
        $([document.documentElement, document.body]).animate(
          {
            scrollTop: $("#" + el).offset().top
          },
          1500
        )
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .footer{
    background: #dcdbdb;
  }

  small{
    font-size: 14px;
  }


.goTop {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0;
  z-index: 1;
}
.goTop>a {
    position: relative;
    display: block;
    width: 48px;
    height: 48px;
    background-color: #000;
    color: #fff;
}
.goTop>a::before {
    content: "";
    position: absolute;
    top: 55%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-top: 2px solid #fff;
    border-left: 2px solid #fff;
    -webkit-transform: translate(-50%,-50%) rotate(45deg);
    transform: translate(-50%,-50%) rotate(45deg);
}
</style>


