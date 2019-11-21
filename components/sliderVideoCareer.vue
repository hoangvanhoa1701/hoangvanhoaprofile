<template>
  <div>
    <div class="sliderVideoCareer">
        <div class="my-sliderVideo">
         <div>
          <iframe 
          class="fixVideoMain" src="https://www.youtube.com/embed/3n0U9GG6QJU" 
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
          </iframe>
         </div>
        </div>
    </div>
  
    <div class="smallControlSlider">
      <div class="smallSliderVideo">
        <img class="wcal" :src="item" alt v-for="(item,index) in getPictureUrls(imagesUrl,148,100) " :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tinySliderOptions: {
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayButtonOutput: false
      }
    }
  },
  mounted() {
    if(this.imagesUrl)
    {
    this.renderSlider()
    }
  },
  computed: {},
  methods: {
    renderSlider() {
      let slider = tns({
        container: ".my-sliderVideo",
        items: 1,
        controls:false,
        navContainer: ".smallSliderVideo",
        navAsThumbnails: true,
        mouseDrag: false,

      })
      let smallSlider = tns({
        loop: true,
        container: ".smallSliderVideo",
        items: 4,
        nav: false,
       
      })

      let prev = document.querySelector("[data-controls='prev']"),
        next = document.querySelector("[data-controls='next']")

      prev.addEventListener("click", () => {
        smallSlider.goTo("prev")
      })
      next.addEventListener("click", () => {
        smallSlider.goTo("next")
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>


