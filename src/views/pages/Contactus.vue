<template>
  <div class="contactus">
    <h3>Contact Us</h3>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <form>
            <div class="form-group">
              <label>Name</label>
              <input class="form-control" v-model="cname" />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input class="form-control" v-model="cemail" />
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input class="form-control" v-model="cphone" />
            </div>
            <div class="form-group">
              <label>Subject</label>
              <input class="form-control" v-model="csubject" />
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea class="form-control" v-model="cmessage"></textarea>
            </div>
            <div class="my-3">
              <button class="btn btn-primary" @click.prevent="sendMail()">Send</button>
            </div>
          </form>
        </div>
        <div class="col-md-8">
          <div class="first">
            <h5>Head Office</h5>
            <address>
              Neer-51,7B,. KA-201/1/A.<br />
              Joarsahara, Vatara, Dhaka-1229.
            </address>
          </div>
          <div class="second">
            <h5>Warehouse</h5>
            <address>H-157, Pandit Para, Palash, <br />Narshingdi-1610</address>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from "../../apis/Contact";

export default {
  data(){
    return{
      cname:"",
      cemail:"",
      cphone:"",
      csubject:"",
      cmessage:"",
    }
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  methods:{
    sendMail(){
          var data = new FormData();
      data.append("cname", this.cname);
      data.append("cemail", this.cemail);
      data.append("cphone", this.cphone);
      data.append("csubject", this.csubject);
      data.append("cmessage", this.cmessage);

      Contact.addMessage(data)
        .then((res) => {
          if (res.data.error) {
            console.log("errors", res.data.error);
            alert(res.data.error);
          } else {
            console.log(res.data.message);
            alert(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });

    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Lobster&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100&family=Ubuntu:wght@300&display=swap");

.contactus {
  width: 100%;
  height: auto;
  padding: 10px;
  margin-top: 190px;
  background: #ffd1667a;
}
h3 {
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  padding: auto;
  margin: auto;
  font-family: "Playfair Display", serif;
}
.contactus .row {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.row .col-md-4 {
  width: 40%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.row .col-md-4 form {
  padding: 10px;
}
.row .col-md-4 label {
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Oswald", sans-serif;
}
.row .col-md-8 {
  width: 60%;
  height: 100%;
  padding: 10px;
  margin-top: 50px;
  display: flex;
}
.row .col-md-8 .first,
.row .col-md-8 .second {
  width: 45%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.row .col-md-8 .first h5,
.row .col-md-8 .second h5 {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  padding: 5px;
  margin: 5px;
  text-align: center;
}
.row .col-md-8 .first address {
  padding: 10px;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  font-family: "Oswald", sans-serif;
  border-right: 2px solid green;
}
.row .col-md-8 .second address {
  padding: 10px;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Oswald", sans-serif;
  text-align: center;
}

@media only screen and (max-width: 436px) {
  .contactus {
    width: 100%;
    height: auto;
    padding: 10px;
    margin-top: 100px;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
    padding: auto;
    margin: auto;
    font-family: "Playfair Display", serif;
  }
  .contactus .row {
    widows: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: #fff;
    display: block;
  }
  .row .col-md-4 {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    border-bottom: 1px solid rgb(0, 204, 255);
  }
  .row .col-md-4 label {
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
  }
  .row .col-md-8 {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin-top: 10px;
    display: block;
  }
  .row .col-md-8 .first,
  .row .col-md-8 .second {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    border-bottom: 1px solid rgb(0, 204, 255);
  }
  .row .col-md-8 .first h5,
  .row .col-md-8 .second h5 {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    padding: 5px;
    margin: 5px;
    text-align: center;
  }
  .row .col-md-8 .first address {
    padding: 10px;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    font-family: "Playfair Display", serif;
    border-right: none;
  }
  .row .col-md-8 .second address {
    padding: 10px;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    text-align: center;
  }
}
</style>