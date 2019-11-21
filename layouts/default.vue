<template>
  <div>
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  },

}
</script>

<style>
html {
  scroll-behavior: smooth;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  margin-bottom: 5px;
  cursor: pointer;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-bottom: 5px;
  cursor: pointer;
  /* margin-left: 5px; */
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.scrollTopPage {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 30;
  cursor: pointer;
}
.scrollTopPage > a {
  position: relative;
  display: block;
  width: 48px;
  height: 48px;
  background-color: cadetblue;
  color: #fff;
}
.scrollTopPage > a:before {
  content: "";
  position: absolute;
  top: 55%;
  left: 50%;
  width: 8px;
  height: 8px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  transform: translate(-50%, -50%) rotate(45deg);
}
</style>
