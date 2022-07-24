<template>
  <div class="admin">
    <Navbar />
    <div class="row">
      <div class="col-md-2">
        <a class="brand" href="">
          <img src="../../assets/image/logo1.svg" />
        </a>
        <ul>
          <li><router-link to="dashboard">Dashboard</router-link></li>
          <li><router-link to="users">Users</router-link></li>
          <li><router-link to="product">Product</router-link></li>
          <li><router-link to="slider">Slider</router-link></li>
          <li><router-link to="gallery">Gallery</router-link></li>
          <li><router-link to="Partner">Partner</router-link></li>
          <li><router-link to="notice-board">Notice</router-link></li>
        </ul>
      </div>
      <div class="col-md-10">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  components: {
    Navbar,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.admin {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.admin .row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: left;
}
.row .col-md-2 {
  width: 15%;
  height: 100vh;
  padding: 0;
  margin: 0;
  background: #1d3557;
  position: fixed;
}
 .col-md-2 .brand {
  width: 100%;
  height: 150px;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: left;
}
 .col-md-2 .brand img {
  width: 150px;
  height: 100%;
}
 .col-md-2 ul {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: block;
}
 .col-md-2 ul li {
  list-style: none;
  padding: 10px;
  margin: 0;
}
 .col-md-2 ul li:hover {
  background: #e63946;
}
 .col-md-2 ul li a {
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  margin: 10px;
}
.row .col-md-10 {
  width: 85%;
  height: 100%;
  position: relative;
  margin-left: 15%;
}
</style>