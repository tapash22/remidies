<template>
  <div class="navigation">
    <div class="full">
      <div class="first">
        <a class="brand">
          <img src="../../assets/image/logo1.svg" />
        </a>
        <ul class="info">
          <li>
            <i class="fa fa-phone-square" aria-hidden="true"></i>+880-1712836255
          </li>
          <li>
            <i class="fa fa-envelope" aria-hidden="true"></i
            >alaksarker04@gmail.com
          </li>
        </ul>
      </div>
      <nav>
        <ul class="sticky">
          <li><router-link to="home">Home</router-link></li>
          <li><router-link to="notice">Notice Board</router-link></li>
          <li><router-link to="gallery">Gallery</router-link></li>
          <li>
            <router-link to="products">Products</router-link>
            <ul class="ul">
              <li>
                <router-link to="#">Poultry</router-link>
                <ul class="two">
                  <li>
                    <router-link to="antibiotic">Antibiotics</router-link>
                  </li>
                  <li>
                    <router-link to="nutrition">
                      Nutrition & Probiotics</router-link
                    >
                  </li>
                  <li>
                    <router-link to="essentialoil"
                      >Essential oils & Herbs</router-link
                    >
                  </li>
                </ul>
              </li>

              <li>
                <router-link to="cattle">Cattle</router-link>
              </li>
            </ul>
          </li>
          <li><router-link to="partners">Partners</router-link></li>
          <li><router-link to="contactus">Contact Us</router-link></li>
        </ul>
      </nav>
    </div>
    <!-- mobile view -->

    <div class="mini">
      <nav>
        <div class="first">
          <a class="brand">
            <img src="../../assets/image/logo1.svg" />
          </a>
          <div class="btn" @click="onClick()">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>

        <ul class="sticky">
          <transition-group name="slide-fade">
            <li v-if="!show">
              <router-link to="/home" @click="onClick()">Home</router-link>
            </li>
            <li v-if="!show">
              <router-link to="/notice" @click="onClick()">About</router-link>
            </li>
            <li v-if="!show">
              <router-link to="/gallery" @click="onClick()"
                >Gallery</router-link
              >
            </li>
            <li v-if="!show">
              <router-link to="/products">Products</router-link>
              <ul class="ul">
                <li>
                  <router-link to="#">Poultry</router-link>
                  <ul class="two">
                    <li v-if="!show">
                      <router-link to="/antibiotic" @click="onClick()">Antibiotics</router-link>
                    </li>
                    <li v-if="!show">
                      <router-link to="/nutrition" @click="onClick()"> Nutrition</router-link>
                    </li>
                    <li v-if="!show">
                      <router-link to="/essentialoil"
                        >Essential oils</router-link
                      >
                    </li>
                  </ul>
                </li>

                <li v-if="!show">
                  <router-link to="/cattle">Cattle</router-link>
                </li>
              </ul>
            </li>
            <li v-if="!show">
              <router-link to="/partners" @click="onClick()"
                >Partners</router-link
              >
            </li>
            <li v-if="!show">
              <router-link to="/contactus" @click="onClick()"
                >Contact Us</router-link
              >
            </li>
          </transition-group>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },

  created() {},

  methods: {
    onClick() {
      this.show = !this.show;
      if (this.showSidebar) {
        this.showLink = true;
        setTimeout(() => {
          this.showSidebar = false;
        }, 200);
      }
    },
  },
};
</script>

<style scoped>
.navigation {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  position: fixed;
  z-index: 999;
  background-image: url("../../assets/image/back2.jpg");
}
.navigation .full {
  width: 100%;
  height: 200px;
  padding: 0;
  margin: 0;
}
.navigation .mini {
  display: none;
}
.full .first {
  width: 100%;
  height: 120px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  /* background-image: url("../assets/image/back.png"); */
  background-position: center;
  background-size: cover;
}
.first a {
  /* width: 400px; */
  height: 100%;
  padding: 2px;
  margin: 0;
}
.first a img {
  transform: scale(1);
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.first .info {
  height: 100%;
  padding: 30px;
  margin: 0;
}
.first .info li {
  padding: 0;
  margin: 2px;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  list-style: none;
  color: #fff;
}
.first .info li i {
  font-size: 1.3rem;
  font-weight: 700;
  padding: 5px;
  margin: 0;
  color: #fff;
}
.full nav {
  width: 100%;
  height: 70px;
  padding: 5px;
  margin: 0;
  border: 1px solid #fff;
  justify-content: center;
}
nav .sticky {
  padding: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
nav .sticky li {
  list-style: none;
  padding: 5px;
  margin: 5px;
}
nav .sticky li a {
  font-size: 1.3rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  padding: 5px;
  margin: 0;
  text-decoration: none;
  color: rgb(255, 255, 255);
  border-bottom: 2px none #fff;
}
nav .sticky li a:hover,
nav .sticky li a.router-link-exact-active {
  border-bottom: 2px solid rgb(255, 255, 255);
}
.sticky li:hover .ul {
  display: block;
}
.sticky li .ul {
  width: 120px;
  height: auto;
  position: absolute;
  display: none;
  padding: 0;
  margin-top: 5px;
  margin-left: -20px;
  background: #123456;
}
.sticky li .ul li {
  display: block;
  width: 100%;
  height: 60px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.sticky li .ul li a {
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  padding: 10px;
  margin: 5px;
  border-bottom: 2px none #fff;
}
.sticky li .ul li:hover .two {
  display: block;
}
.ul li .two {
  width: 250px;
  height: auto;
  position: absolute;
  display: none;
  padding: 0;
  margin-top: 20px;
  margin-left: 370px;
  background: #123456ce !important;
}
.ul li .two li:hover {
  background: rgba(0, 0, 0, 0.445);
}

@media only screen and (max-width: 436px) {
  .navigation {
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    position: fixed;
    z-index: 999;
    background-image: url("../../assets/image/back2.jpg");
  }
  .navigation .full {
    display: none;
  }
  .navigation .mini {
    widows: 100%;
    height: 100px;
    padding: 0;
    margin: 0;
    background: #123456;
    display: block;
  }
  .navigation .mini nav {
    width: 100%;
    height: 100px;
    padding: 0;
    margin: 0;
  }
  .mini nav .first {
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: left;
  }
  .mini nav .first .brand {
    width: 60%;
    height: 100%;
    padding: 5px;
    margin: 5px;
  }
  .mini nav .first .brand img {
    width: 250px;
    height: 80px;
  }
  .mini nav .first .btn {
    width: 40%;
    height: 100%;
    padding: 15px;
    margin: 20px;
  }
  .mini nav .first .btn i {
    font-size: 1.8rem;
    font-weight: 900;
    color: #fff;
  }
  .mini nav .sticky {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
  .mini nav .sticky li {
    list-style: none;
    padding: 0;
    margin: 0;
    background: #123456;
    line-height: 50px;
  }
  .mini nav .sticky li:hover .ul,
  .mini nav .sticky li .ul li:hover .two {
    position: relative;
    display: block;
    visibility: visible;
    width: 100%;
  }
  .mini nav .sticky li .ul,
  .mini nav .sticky li .ul li .two {
    display: block;
    visibility: hidden;
    padding: 0;
    margin: 0;
    width: 100%;
  }
  .mini nav .sticky li .ul li {
    /* display: flex;
    justify-content: left; */
    list-style: none;
    padding: 0;
    margin: 0;
    background: #123456;
    line-height: 50px;
    width: 100%;
  }
  .mini nav .sticky li .ul li a {
    width: 100%;
    text-decoration: none;
    display: flex;
    justify-content: left;
  }
  /* .mini nav .sticky li .ul li:hover .two {
    position: relative;
    display: block;
    visibility: visible;
    width: 100%;
    padding: 0;
    margin: 0;
  } */
  /* .mini nav .sticky li .ul li .two {
    visibility: hidden;
    display: block;
    padding: 0;
    margin: 0;
    width: 100%;
  } */
  .mini nav .sticky li .ul li .two li {
    list-style: none;
    padding: 0;
    margin: 0;
    background: #1a5612;
    line-height: 50px;
    width: 100%;
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease-in;
  }
  .slide-fade-leave-active {
    transition: all 0.3s ease-out;
  }
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(10%);
    opacity: 0;
  }
}
</style>