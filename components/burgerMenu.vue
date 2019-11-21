<template>
  <div><!-- mp-menu -->
    <nav
      id="mp-menu"
      class="mp-menu"
    >
      <div class="mp-level">
        <div>
          <h2 class="icon icon-world"><nuxt-link class="mr-3" :to="localePath('index')">{{L('Trang chủ')}}</nuxt-link></h2>
        </div>
        <ul>
          <li class="icon icon-arrow-left">
            <a
              class="icon icon-display"
              href="#"
            >{{L('Devices')}}</a>
            <div class="mp-level">
              <h2 class="icon icon-display">{{L('Devices')}}</h2>
              <a class="mp-back" href="#">{{L('back')}}</a>
              <ul>
                <li class="icon icon-arrow-left">
                  <a
                    class="icon icon-phone"
                    href="#"
                  >{{L('Mobile Phones')}}</a>

                  <div class="mp-level">
                    <h2>{{L('Mobile Phones')}}</h2>
                    <a class="mp-back" href="#">{{L('back')}}</a>
                    <ul>
                      <li><nuxt-link :to="localePath('contact')">{{L('Liên hệ')}}</nuxt-link></li>
                      <li><nuxt-link class="mr-3" :to="localePath('faq')">{{L('Hỏi đáp')}}</nuxt-link></li>
                      <li><a href="#">{{L('Performance Crusher')}}</a></li>
                      <li><a href="#">{{L('Futuristic Experience')}}</a></li>
                    </ul>
                  </div>
                </li>
                <li class="icon icon-arrow-left">
                  <!-- ... -->
                </li>
                <li class="icon icon-arrow-left">
                  <!-- ... -->
                </li>
              </ul>
            </div>
          </li>
          <li>
            <!-- ... -->
          </li>
          <!-- ... -->
        </ul>
      </div>
    </nav>
    <!-- /mp-menu -->
  </div>

</template>

<script>

export default {
  mounted() {
    window.addEventListeneL('load', (e) => {
      this.menu = new mlPushMenu(
        document.getElementById("mp-menu"),
        document.getElementById("trigger"), {
          type : 'cover'
        }
      )
    })
  },
  watch: {
    $route: function() {
      if (this.menu && this.menu.open) {
        document.getElementById("trigger").click()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
