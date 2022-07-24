<template>
  <carousel :autoplay="4000" :nav="true" :wrap-around="true">
    <slide v-for="slider in sliders" :key="slider.id">
      <img :src="'/sub/storage/app/' + slider.simage" />
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
    this.getSlider();
  },

  methods: {
    getSlider() {
      Slider.getSlider().then((response) => {
        this.sliders = response.data;
        // console.log(this.partners);
      });
    },
  },

};
</script>

<style scoped>
.sld {
  widows: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.sd {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
img {
  height: 450px;
  width: 100%;
  opacity: 1;
  filter: brightness(90%);
}
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  color: green;
  font-weight: bold;
  font-size: 2.5rem;
  font-weight: 500;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 20px;
}

.prev {
  left: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
@media screen and (max-width: 759px) {
  .sld {
    width: 100%;
    height: 100%;
  }

  .sd {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  img {
    height: 300px;
    width: 100%;
    opacity: 1;
    filter: brightness(90%);
  }

  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 40%;
    width: auto;
    color: green;
    font-weight: bold;
    font-size: 2rem;
    font-weight: 500;
    transition: 0.7s ease;
    border-radius: 0 4px 4px 0;
    text-decoration: none;
    user-select: none;
  }
  .next {
    right: 10px;
  }
  .prev {
    left: 10px;
  }
}
</style>