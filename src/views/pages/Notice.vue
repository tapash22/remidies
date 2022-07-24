<template>
  <div class="about">
    <div class="row">
      <h3>Notice Board</h3>
      <div class="notice">
        <div class="box" v-for="notice in notices" :key="notice.id">
          <p>
            <span>{{notice.id}}. </span>{{notice.ntitle}}<br>{{notice.ndescription}}
          </p>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nboard from "../../apis/Nboard";

export default {
  data() {
    return {
      notices: [],
    };
  },

  created() {
    this.getNotices();
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    getNotices() {
      Nboard.getNotice().then((response) => {
        this.notices = response.data;
        // console.log(this.partners);
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&family=League+Gothic&family=Monoton&family=Oswald:wght@400;600&family=Playfair+Display:ital,wght@1,600&family=Roboto+Slab:wght@300&display=swap");

.about {
  width: 100%;
  height: auto;
  padding: 10px;
  margin-top: 190px;
}
.about .row {
  padding: 10px;
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: #ffd1667a;
}
.row h3 {
  font-size: 72px;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  padding: auto;
  margin: auto;
  font-family: "Monoton", cursive;
}
.row .notice {
  width: 80%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: block;
}
.row .notice .box {
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 0;
  border: 1px solid grey;
  display: block;
  background-image: url(../../assets/image/notice.svg);
  background-size: cover;
}
.row .notice .box p {
  font-size: 1.3rem;
  font-weight: 600;
}
.row .notice .box span {
  font-size: 2rem;
  font-weight: 700;
}

@media only screen and (max-width: 436px) {
  .about {
    width: 100%;
    height: auto;
    padding: 0;
    margin-top: 100px;
  }
  .about .row {
    widows: 100%;
    height: 100%;
    padding: 10px;
    margin: auto;
    display: flex;
    justify-content: center;
    background: #ffd1667a;
  }
  .row h3 {
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
    padding: 10px;
    margin: auto;
    font-family: "Monoton", cursive;
  }
  .row .notice {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    display: block;
  }
  .row .notice .box {
    width: 100%;
    height: 100%;
    padding: 20px;
    margin: 0;
    border: 1px solid grey;
    display: block;
    background-image: url(../../assets/image/notice.svg);
    background-size: cover;
    background-position: center;
  }
  .row .notice .box p {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: justify;
    width: 100%;
    height: 100%;
  }
  .row .notice .box span {
    font-size: 2rem;
    font-weight: 700;
    padding: 5px;
    margin: 0;
  }
}
</style>