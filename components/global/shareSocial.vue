<template>
  <div class="socialLine">
    <a @click="openWindow('http://www.facebook.com/sharer.php?u=')">
      <i class="fa fa-facebook socialBtn facebookBtn"></i>
    </a>
    <a @click="openWindow('https://plus.google.com/share?url=')">
      <i class="fa fa-google-plus socialBtn googleBtn"></i>
    </a>
    <a @click="openWindow('http://www.linkedin.com/shareArticle?mini=true&amp;url=')">
      <i class="fa fa-linkedin socialBtn instaBtn"></i>
    </a>
    <a @click="openWindow('https://twitter.com/share?url=')">
      <i class="fa fa-twitter socialBtn twitterBtn"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "share-social",
  methods: {
    getRawUrl() {
      return window.location.origin + this.$route.fullPath || this.$route.path
    },
    openWindow(social) {
      window.open(
        `${social}${this.getRawUrl()}`,
        "",
        "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600"
      )
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
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



