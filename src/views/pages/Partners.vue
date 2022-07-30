<template>
  <div class="partners">
    <div class="row">
      <h3>Our Partners</h3>
      <div class="col-md-4" v-for="partner in partners" :key="partner.id">
        <div class="card">
          <div class="card-body">
            <img :src="'../storage/app/'+partner.ptimage" />
          </div>
          <div class="card-footer">
            <p>{{ partner.ptname }} <br />{{ partner.pcertificate }}</p>
            <a :href="partner.plink">Visit</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Partner from "../../apis/Partner";

export default {
  data() {
    return {
      partners: [],
    };
  },

  created() {
    this.getPartner();
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    getPartner() {
      Partner.getPartner().then((response) => {
        this.partners = response.data;
        // console.log(this.partners);
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Lobster&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100&family=Ubuntu:wght@300&display=swap");

.partners {
  width: 100%;
  height: auto;
  padding: 10px;
  margin-top: 190px;
}
.partners .row {
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
.row .col-md-4 {
  width: 20%;
  height: auto;
  padding: 20px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.row .col-md-4 .card {
  width: 100%;
  height: 300px;
  padding: 0;
  margin: 0;
  background: #fff;
  box-shadow: 2px 2px 5px #000;
}
.col-md-4 .card .card-body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 60%;
  border: none;
}
.col-md-4 .card .card-body img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.col-md-4 .card .card-footer {
  width: 100%;
  height: 40%;
  padding: 0;
  margin: 0;
  border: none;
  display: block;
}
.col-md-4 .card .card-footer p {
  width: 100%;
  height: 70%;
  background: #617edd;
  padding: 5px;
  margin: 0;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  font-family: "Roboto Slab", serif;
  color: rgb(0, 0, 0);
}
.col-md-4 .card .card-footer a {
  width: 100%;
  height: 30%;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  color: #000;
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 436px) {
  .partners {
    width: 100%;
    height: auto;
    padding: 0;
    margin-top: 100px;
  }
  .partners .row {
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
  .row .col-md-4 {
    width: 100%;
    height: auto;
    padding: 20px;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  .row .col-md-4 .card {
    width: 100%;
    height: 300px;
    padding: 0;
    margin: 0;
    background: #fff;
    box-shadow: 2px 2px 5px #000;
  }
  .col-md-4 .card .card-body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 65%;
    border: none;
  }
  .col-md-4 .card .card-body img {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .col-md-4 .card .card-footer {
    width: 100%;
    height: 35%;
    padding: 0;
    margin: 0;
    border: none;
    display: block;
  }
  .col-md-4 .card .card-footer p {
    width: 100%;
    height: 65%;
    background: #617edd;
    padding: 5px;
    margin: 0;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 600;
    text-align: center;
    font-family: "Roboto Slab", serif;
    color: rgb(0, 0, 0);
  }
  .col-md-4 .card .card-footer a {
    width: 100%;
    height: 30%;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    color: #000;
    display: flex;
    justify-content: center;
  }
}
</style>