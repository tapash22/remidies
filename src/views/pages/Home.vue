<template>
  <div class="home">
    <div class="row">
      <div class="sliders">
        <Slider />
      </div>
      <div class="col-md-6">
        <div class="works my-3">
          <h4>We Believe in</h4>
          <p>“A Complete Solutions for Livestock & Poultry.”</p>
        </div>
      </div>
      <h3>Our Profile</h3>
      <div class="col-md-12">
        <div class="info">
          <div class="image">
            <img src="../../assets/image/img.jpg" />
          </div>
          <div class="info1">
            <p class="wrap">
              Remedies & Care Agro is a singularly unique organization that
              imports and markets products for the poultry and livestock
              industries throughout Bangladesh. Remedies & Care Agro shared a
              belief that strong locally run organizations were best suited to
              serve feed mills, livestock and poultry products and Veterinarians
              that are the backbone of our agriculture. This belief was born
              out, as the group prospered and developed into a privately held
              animal health product distribution group serving throughout all
              regions in Bangladesh. Our feed additives range includes a range
              of eco-sustainable and customer oriented solutions unique to us
              that helps improve profitability of our customer. The main
              principles of the organization are to fulfill customer i.e.
              poultry farmers, feed millers and any livestock related business
              holder’s requirements and optimum.
            </p>
          </div>
        </div>
      </div>
      <div class="introduce">
        <div class="col-md-3">
          <div class="box">
            <h3>Best quality Product</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              numquam animi sunt corporis, officia obcaecati, necessitatibus
              consequuntur assumenda doloremque eveniet ducimus dolor in tempora
              delectus ad quaerat harum deserunt explicabo.
            </p>
          </div>
          <div class="box">
            <h3>Farmer's support & srvices</h3>
            <img src="../../assets/image/card.jpg" />
          </div>
        </div>
        <div class="col-md-9">
          <div class="woks">
            <div class="workss my-3">
              <h4>Our Vision</h4>
              <p>
                Disseminates our innovative products and some innovation
                throughout Bangladesh.
              </p>
            </div>
            <div class="workss my-3">
              <h4>Our Mission</h4>
              <p>
                Remedies & Care Agro will import and market animal health
                products that are science-based, safe, environmentally friendly
                and cost effective. Our people will be recognized for their
                honesty, integrity, Competency, creativity and productivity.
              </p>
            </div>
          </div>

          <div class="wok">
            <div class="works my-3">
              <h4>Strength</h4>
              <p>
                Honesty, Experience and Expertise. Building a powerful team by
                Training, Mentoring, and empowering members.
              </p>
            </div>
            <div class="works my-3">
              <h4>Quality Assurance</h4>
              <p>
                To assure quality we have set up an organized well decorated,
                temperature controlled warehouse and experienced people also.
              </p>
            </div>

            <div class="works my-3">
              <h4>Company Growth</h4>
              <p>
                To achieve by expanding the market share in existing market as
                well as entering new territories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../services/Slider.vue";

export default {
  components: {
    Slider,
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Lobster&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100&family=Ubuntu:wght@300&display=swap");

.home {
  width: 100%;
  height: auto;
  padding: 0;
  margin-top: 190px;
}
.home .row {
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
.row .sliders {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.row .col-md-6 {
  width: 60%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.col-md-6 .works {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 5px;
  box-shadow: 1px 1px 3px red;
}
.col-md-6 .works h4 {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: #fff;
  padding: 5px;
  margin: 0;
  font-family: "Playfair Display", serif;
  background: rgb(37, 49, 117);
}
.col-md-6 .works p {
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  padding: 10px;
  margin: 0;
  font-family: "Lobster", cursive;
}
.row .col-md-12 {
  padding: 20px;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.col-md-12 .info {
  width: 100%;
  height: 100%;
  margin: 0;
   padding:10px;
  display: flex;
  justify-content: center;
}
.col-md-12 .info .image {
  width: 20%;
  height: 280px;
  padding:0;
  margin: 0;
  display: flex;
  justify-content: center;
  border: 1px solid black;
}
.col-md-12 .info .image img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.col-md-12 .info .info1 {
  width: 80%;
  height: 100%;
  padding: 10px;
  margin: 0;
  box-shadow: 2px 2px 5px green;
  display: flex;
  justify-content: center;
}
.info1 .wrap {
  position: relative;
  font-size: 1.2rem;
  font-weight: 600;
  color: #000;
  font-family: "Playfair Display", serif;
  text-align: justify;
  padding: 10px;
  margin: 10px;
}
.info1 .wrap::before {
  position: relative;
  content: "\201F";
  font-size: 1.8rem;
  font-weight: 900;
  display: flex;
  justify-content: left;
  padding: 0;
  margin-bottom: -30px;
  margin-left: -20px;
}
.info1 .wrap::after {
  position: relative;
  content: "\201D";
  font-size: 2rem;
  font-weight: 900;
  display: flex;
  justify-content: left;
  padding: 0;
  margin-top: -35px;
  margin-left: 400px;
}
.row .introduce {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
}
.row .introduce .col-md-3 {
  width: 20%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: block;
}
.row .introduce .col-md-3 .box {
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 10px;
  box-shadow: 0 0 10px green;
}
.row .introduce .col-md-3 .box h3 {
  width: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "League Gothic", sans-serif;
  text-align: center;
  padding: 5px;
  margin: 0;
}
.row .introduce .col-md-3 .box  img{
  width: 100%;
  height:100%;
  padding: 0;
  margin: 0;
}
.row .introduce .col-md-3 .box p {
  font-size: 1rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: justify;
  padding: 10px;
  margin: 0;
}

.row .introduce .col-md-9 {
  width: 80%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
}
.col-md-9 .wok {
  width: 50%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: block;
}
.col-md-9 .wok .works {
  width: 100%;
  height: 120px;
  padding: 10px;
  margin: 10px;
  border: 10px double rgb(90, 233, 90);
}
.col-md-9 .wok .works h4,
.col-md-9 .woks .workss h4 {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  font-family: "League Gothic", sans-serif;
}

.col-md-9 .wok .works p,
.col-md-9 .woks .workss p {
  font-size: 1rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  text-align: justify;
}
.col-md-9 .woks {
  width: 50%;
  height: 100%;
  padding: 5px;
  margin: 0;
  display: block;
}
.col-md-9 .woks .workss {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 5px;
  border: 10px double rgb(224, 161, 43);
}

@media only screen and (max-width: 436px) {
  .home {
    width: 100%;
    height: auto;
    padding: 0;
    margin-top: 100px;
  }
  .home .row {
    widows: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
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
  .row .sliders {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
  .row .col-md-6 {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  .col-md-6 .works {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 5px;
    box-shadow: 1px 1px 3px red;
  }
  .col-md-6 .works h4 {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    color: #fff;
    padding: 5px;
    margin: 0;
    font-family: "Playfair Display", serif;
    background: #0f8d20;
  }
  .col-md-6 .works p {
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    padding: 10px;
    margin: 0;
    font-family: "Lobster", cursive;
  }
  .row .col-md-12 {
    padding: 20px;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .col-md-12 .info {
    width: 100%;
    height: 100%;
    margin: 0;
    display: block;
  }
  .col-md-12 .info .image {
    width: 100%;
    height: 250px;
    margin: 0;
    display: flex;
    justify-content: center;
    border: 1px solid black;
  }
  .col-md-12 .info .image img {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .col-md-12 .info .info1 {
    width: 100%;
    height: 100%;
    padding: 20px;
    margin: 0;
    box-shadow: 2px 2px 5px green;
    display: block;
  }
  .info1 .wrap {
    position: relative;
    font-size: 1.2rem;
    font-weight: 600;
    color: #000;
    font-family: "Playfair Display", serif;
    text-align: justify;
    padding: 10px;
    margin: 10px;
  }
  .info1 .wrap::before {
    position: relative;
    content: "\201F";
    font-size: 1.8rem;
    font-weight: 900;
    display: flex;
    justify-content: left;
    padding: 0;
    margin-bottom: -30px;
    margin-left: -20px;
  }
  .info1 .wrap::after {
    position: relative;
    content: "\201D";
    font-size: 2rem;
    font-weight: 900;
    display: flex;
    justify-content: left;
    padding: 0;
    margin-top: -35px;
    margin-left: 310px;
  }
  .row .introduce {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    display: block;
  }
  .row .introduce .col-md-3 {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    display: block;
  }
  .row .introduce .col-md-3 .box {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 5px;
    box-shadow: 0 0 10px green;
  }
  .row .introduce .col-md-3 .box h3 {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "League Gothic", sans-serif;
    text-align: center;
    padding: 5px;
    margin: 0;
  }
  .row .introduce .col-md-3 .box p {
    font-size: 1rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    text-align: justify;
    padding: 10px;
    margin: 0;
  }
  .row .introduce .col-md-3 .box img {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }

  .row .introduce .col-md-9 {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: block;
  }
  .col-md-9 .wok {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    display: block;
  }
  .col-md-9 .wok .works {
    width: 100%;
    height: 150px;
    padding: 10px;
    margin: 0;
    border: 10px double rgb(90, 233, 90);
  }
  .col-md-9 .wok .works h4,
  .col-md-9 .woks .workss h4 {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    font-family: "League Gothic", sans-serif;
  }

  .col-md-9 .wok .works p,
  .col-md-9 .woks .workss p {
    font-size: 1rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    text-align: justify;
  }
  .col-md-9 .woks {
    width: 100%;
    height: 100%;
    padding: 5px;
    margin: 0;
    display: block;
  }
  .col-md-9 .woks .workss {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    border: 10px double rgb(224, 161, 43);
  }
}
</style>