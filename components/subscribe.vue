<template>
  <section class="bgBanner bgSubscribeEvent mb-4">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6">
          <p class="title titleSubEvent text-left mb-0">{{L('Luôn cập nhật những sự kiên mới nhất')}}</p>
        </div>
        <div class="col-6">
          <el-input class="inputEvent" placeholder="Email của bạn" v-model="input"></el-input>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      input: ""
    }
  }
}
</script>
<style lang="scss" scoped>
.bgBanner {
  background-image: url("../assets/bannerLayout.svg");
  background-position: center;
  background-size: cover;
  position: relative;

  &.bgSubscribeEvent {
    padding: 4rem 0;
    background: #59c6d7;
    height: unset;
  }
}
</style>

