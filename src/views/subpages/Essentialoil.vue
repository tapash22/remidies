<template>
  <div class="essentialoil">
    <div class="row">
      <h3>Essential oils & Herbs</h3>
      <div class="box">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <div class="card">
            <div class="card-body">
              <img :src="product.pimage" />
              <p>{{ product.pname }}</p>
                   <router-link
                :to="{ name: 'ProductDetail', params: { id: product.id } }"
                >Show Details</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../../apis/Product";

export default {
  data() {
    return {
      products: [],
    };
  },

  created() {
    this.getProduct();
  },

  methods: {
    getProduct() {
      Product.getEssentialoil().then((response) => {
        this.products = response.data;
        // console.log(this.partners);
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Lobster&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100&family=Ubuntu:wght@300&display=swap");

.essentialoil {
  width: 100%;
  height: auto;
  padding: 10px;
  margin-top: 190px;
}
.essentialoil .row {
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
  display: flex;
  justify-content: center;
}
.box .col-md-4 {
  width: 30%;
  height: 100%;
  padding: 10px;
  margin: 10px;
  display: flex;
}
.box .col-md-4 .card {
  width: 100%;
  height: 250px;
  padding: 0;
  margin: 10px;
  border: 10px double gray;
  transition: 0.5s all ease-out;
}
.col-md-4 .card .card-body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.col-md-4 .card .card-body img {
  width: 100%;
  height: 70%;
  padding: 0;
  margin: 0;
}
.col-md-4 .card .card-body p {
  width: 100%;
  height: 15%;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "League Gothic", sans-serif;
  letter-spacing: 1px;
  text-align: center;
  background: #2f310b;
  color: #fff;
}
.col-md-4 .card .card-body a{
  width: 100%;
  height: 15%;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-top: -5px;
}

.box .col-md-4 .card:hover {
  cursor: pointer;
}

@media only screen and (max-width: 436px) {
  .essentialoil {
    width: 100%;
    height: auto;
    padding: 0;
    margin-top: 100px;
  }
  .essentialoil .row {
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
    padding: 10px;
    margin: 10px;
    display: flex;
  }
  .box .col-md-4 .card {
    width: 100%;
    height: 250px;
    padding: 0;
    margin: 10px;
    border: 10px double gray;
    transition: 0.5s all ease-out;
  }
  .col-md-4 .card .card-body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .col-md-4 .card .card-body img {
  width: 100%;
  height: 70%;
  padding: 0;
  margin: 0;
}
.col-md-4 .card .card-body p {
  width: 100%;
  height: 15%;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "League Gothic", sans-serif;
  letter-spacing: 1px;
  text-align: center;
  background: #2f310b;
  color: #fff;
}
.col-md-4 .card .card-body a{
  width: 100%;
  height: 15%;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-top: -5px;
}

  .box .col-md-4 .card:hover {
    cursor: pointer;
  }
}
</style>