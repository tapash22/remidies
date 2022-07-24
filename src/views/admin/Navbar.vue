<template>
  <nav>
    <ul>
      <li>Mr. Alok</li>
      <li><button class="btn btn-primary" @click.prevent="logout">Logout</button></li>
    </ul>
  </nav>
</template>


<script>
import User from "../../apis/User";
export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    User.auth().then((response) => {
      this.user = response.data;
    });
  },
  methods: {
    logout() {
      User.logout().then(() => {
        localStorage.removeItem("token");
        this.$router.push("/home");
      });
    },
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  height: 60px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: right;
  background: #1d3557;
  position: fixed;
  z-index: 99;
}
nav ul {
  width: 40%;
  height: 100%;
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: right;
}
nav ul li {
  list-style: none;
  padding: 5px;
  margin: 10px;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
}
nav ul li .btn {
  margin-top: -10px;
  background: #fff !important;
  color: #000;
}
</style>