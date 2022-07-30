<template>
  <carousel v-if="sliders.length!==0" :autoplay="4000" :nav="true" :wrap-around="true">
    <slide v-for="slider in sliders" :key="slider.id">
      <img :src="'../storage/app/'+slider.simage" />
    </slide>

    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import Slider from "../../apis/Slider";

export default {
  name: "Slider",
  data() {
    return {
      sliders: [],
    };
  },

  components: {
    Carousel,
    Slide,
    Pagination,
  },

    created() {
    Slider.getSlider().then((response)=>{
      this.sliders =response.data;
    })
  },

};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
}


@media screen and (max-width: 759px) {
  img {
      width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
    padding: 0;
    margin: 0;
  }

}
</style>