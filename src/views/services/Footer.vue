<template>
  <div class="footer">
    <div class="first">
      <ul>
        <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
        <li><i class="fa fa-envelope-o" aria-hidden="true"></i></li>
        <li><i class="fa fa-linkedin" aria-hidden="true"></i></li>
      </ul>
    </div>
    <div class="second">
      <div class="home">
        <h3>Get in Touch</h3>
        <h5>Head Office</h5>
        <address>
          Neer-51,7B,. KA-201/1/A.<br />
          Jarsahara, Vatara, Dhaka-1229.
        </address>
        <h5>Ware House</h5>
        <address>H-157, Pandit Para, Palash, <br />Narshingdi-1610</address>
      </div>
      <div class="navi">
        <h3>Quick link</h3>
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/notice">Notice</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/partners">Partners</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <p>All right reserved in &copy; ULTRAWAVE.DIGITAL</p>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Lobster&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100&family=Ubuntu:wght@300&display=swap");

.footer {
  background-image: url("../../assets/image/back2.jpg");
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 0;
}
.footer .first {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  box-shadow: 2px 1px 5px #fff;
}
.footer .first ul {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.footer .first ul li {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  background: #fff;
  text-align: center;
  padding: 5px;
  margin: 10px;
  list-style: none;
  transition: 0.3s all ease-out;
}
.footer .first ul li i {
  color: #000;
  font-size: 1.7rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding: 5px;
  margin: auto;
}
.footer .first ul li:hover {
  background: #d2232a;
  transition: 0.3s all ease-out;
}
.footer .second {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
}
.footer .second .home {
  width: 40%;
  height: 100%;
  padding: 10px;
  display: block;
  border-right: 1px solid #fff;
}
.footer .second .home h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color: rgb(255, 255, 255);
  text-align: center;
  letter-spacing: 1px;
  font-family: "Roboto Slab", serif;
  padding: 10px;
  margin: 0;
}
.footer .second .home h5 {
  font-size: 1.4rem;
  font-weight: 600;
  color: rgb(255, 255, 255);
  font-family: "Playfair Display", serif;
  text-align: center;
  padding: 5px;
  margin: 0;
}
.footer .second .home address {
  font-size: 1.2rem;
  font-weight: 600;
  color: rgb(255, 255, 255);
  font-family: "Playfair Display", serif;
  text-align: center;
}
.footer .second .navi {
  width: 60%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: block;
}
.footer .second .navi h3 {
  font-size: 2rem;
  font-weight: 700;
  color: rgb(255, 255, 255);
  font-family: "Roboto Slab", serif;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0;
  margin-top: 5%;
}
.footer .second .navi h5 {
  font-size: 1.8rem;
  font-weight: 600;
  color: rgb(255, 255, 255);
  font-family: "Playfair Display", serif;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0;
  margin-top: 5%;
}
.footer .second .navi ul {
  padding: 10px;
  margin: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.footer .second .navi ul li {
  padding: 5px;
  margin: 5px;
  list-style: none;
}
.footer .second .navi ul li a {
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  font-family: "Playfair Display", serif;
  padding: 5px;
  margin: 0;
  color: rgb(255, 255, 255);
}
.footer .bottom {
  /* border-top: 1px solid #000; */
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: center;
  /* background: #d2232a; */
  background: #fff;
}
.footer .bottom p {
  font-size: 0.8rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  color: #000;
  padding: 0;
  margin: 0;
}

@media only screen and (max-width: 436px) {
  .footer {
    background-image: url("../../assets/image/back2.jpg");
    width: 100%;
    height: 100%;
    padding: 5px;
    margin: 0;
  }
  .footer .first {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    box-shadow: 2px 1px 5px #fff;
  }
  .footer .first ul {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .footer .first ul li {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    background: #fff;
    text-align: center;
    padding: 5px;
    margin: 10px;
    list-style: none;
    transition: 0.3s all ease-out;
  }
  .footer .first ul li i {
    color: #000;
    font-size: 1.7rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    padding: 5px;
    margin: auto;
  }
  .footer .first ul li:hover {
    background: #d2232a;
    transition: 0.3s all ease-out;
  }
  .footer .second {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    display: block;
  }
  .footer .second .home {
    width: 100%;
    height: 100%;
    padding: 10px;
    display: block;
    border-right: none;
  }
  .footer .second .home h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: rgb(255, 255, 255);
    text-align: center;
    letter-spacing: 1px;
    font-family: "Roboto Slab", serif;
    padding: 10px;
    margin: 0;
  }
  .footer .second .home h5 {
    font-size: 1.5rem;
    font-weight: 600;
    color: rgb(255, 255, 255);
    font-family: "Playfair Display", serif;
    text-align: center;
    padding: 10px;
    margin: 0;
    border-bottom: 2px solid rgba(247, 192, 42, 0.507);
  }
  .footer .second .home address {
    font-size: 1.2rem;
    font-weight: 600;
    color: rgb(255, 255, 255);
    font-family: "Playfair Display", serif;
    text-align: center;
  }
  .footer .second .navi {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
    display: block;
  }
  .footer .second .navi h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: rgb(255, 255, 255);
    font-family: "Roboto Slab", serif;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .footer .second .navi ul {
    padding: 5px;
    margin: 5px;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .footer .second .navi ul li {
    padding: 5px;
    margin: 2px;
    list-style: none;
  }
  .footer .second .navi ul li a {
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
    font-family: "Playfair Display", serif;
    padding: 0;
    margin: 0;
    color: rgb(255, 255, 255);
  }
  .footer .bottom {
    /* border-top: 1px solid #000; */
    padding: 5px;
    margin: 0;
    display: flex;
    justify-content: center;
    /* background: #d2232a; */
    background: #fff;
  }
  .footer .bottom p {
    font-size: 0.8rem;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    color: #000;
    padding: 0;
    margin: 0;
  }
}
</style>