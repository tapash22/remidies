<template>
  <div class="gallery">
    <div class="row">
      <h3>Our Events</h3>
      <div class="box">
        <div class="col-md-4" v-for="gallery in gallerys" :key="gallery.id">
          <div class="card">
            <img :src="'../storage/app/'+gallery.gimage" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gallery from "../../apis/Gallery";

export default {
  data() {
    return {
      gallerys: [],
    };
  },

  created() {
    this.getGallery();
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    getGallery() {
      Gallery.getGallery().then((response) => {
        this.gallerys = response.data;
        console.log(this.gallerys);
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Lobster&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100&family=Ubuntu:wght@300&display=swap");

.gallery {
  width: 100%;
  height: auto;
  padding: 10px;
  margin-top: 190px;
}
.gallery .row {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: #ffd1667a;
  display: flex;
  justify-content: center;
}
.row h3 {
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  padding: auto;
  margin: auto;
  font-family: "Playfair Display", serif;
}
.row .box {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
}
.box .col-md-4 {
  width: 22%;
  height: 100%;
  padding: auto;
  margin: auto;
  display: flex;
  justify-content: center;
}
.box .col-md-4 .card {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 10px;
  border: 10px double rgb(145, 145, 35);
}

@media only screen and (max-width: 436px) {
  .gallery {
    width: 100%;
    height: auto;
    padding: 0;
    margin-top: 100px;
  }
  .gallery .row {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background: #ffd1667a;
    display: flex;
    justify-content: center;
  }
  .row h3 {
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
    padding: auto;
    margin: auto;
    font-family: "Playfair Display", serif;
  }
  .row .box {
    width: 80%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: block;
  }
  .box .col-md-4 {
    width: 100%;
    height: 100%;
    padding: auto;
    margin: auto;
    display: flex;
    justify-content: center;
  }
  .box .col-md-4 .card {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 10px;
    border: 10px double rgb(145, 145, 35);
  }
}
</style>