<template>
  <div class="products">
    <div class="row">
      <h3>Our Products</h3>
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="product in products" :key="product.id">
            <div class="card">
              <div class="card-body">
                <img :src="product.image" />
              </div>
              <div class="card-footer">
                <ul>
                  <li>{{ product.pname }}</li>
                </ul>
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
  </div>
</template>

<script>
import Product from "../../apis/Product";

export default {
  data() {
    return {
      products: [ ],
    };
  },

  created() {
    this.getProducts();
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    getProducts() {
      Product.getProduct().then((response) => {
        this.products = response.data;
        // console.log(this.partners);
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Lobster&family=Poppins:wght@100&family=Roboto+Condensed:wght@300&family=Roboto:wght@100&family=Ubuntu:wght@300&display=swap");

.products {
  width: 100%;
  height: auto;
  padding: 10px;
  margin-top: 190px;
}
.products .row {
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
.row .row{
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.row .col-md-4 {
  width: 30%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
}
.row .col-md-4 .card {
  width: 100%;
  height: 300px;
  padding: 0;
  margin: 10px;
  box-shadow: 1px 1px 4px red;
}
.col-md-4 .card .card-body {
  width: 100%;
  height: 75%;
  padding: 0;
  margin: 0;
}
.col-md-4 .card .card-body img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.col-md-4 .card .card-footer {
  width: 100%;
  height: 25%;
  padding: 0;
  margin: 0;
}
.col-md-4 .card .card-footer ul {
  width: 100%;
  height: 50%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  background: #2053a0;
}
.col-md-4 .card .card-footer ul li {
  width: 100%;
  padding: 0;
  margin: 0;
  text-align: center;
  list-style: none;
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
}
.col-md-4 .card .card-footer a {
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  color: #000;
}

@media only screen and (max-width: 436px) {
  .products {
    width: 100%;
    height: auto;
    padding: 0;
    margin-top: 100px;
  }
  .products .row {
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
  .row .row {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: block;
  }
  .row .col-md-4 {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  .row .col-md-4 .card {
    width: 100%;
    height: 400px;
    padding: 0;
    margin: 10px;
    box-shadow: 1px 1px 4px red;
  }
  .col-md-4 .card .card-body {
    width: 100%;
    height: 75%;
    padding: 0;
    margin: 0;
  }
  .col-md-4 .card .card-body img {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .col-md-4 .card .card-footer {
    width: 100%;
    height: 25%;
    padding: 0;
    margin: 0;
  }
  .col-md-4 .card .card-footer ul {
    width: 100%;
    height: 50%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    background: #2053a0;
  }
  .col-md-4 .card .card-footer ul li {
    width: 100%;
    padding: 0;
    margin: 0;
    text-align: center;
    list-style: none;
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
  }
  .col-md-4 .card .card-footer a {
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    color: #000;
  }
}
</style>