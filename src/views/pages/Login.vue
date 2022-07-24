<template>
  <div class="login">
    <div class="row">
      <div class="col-md-6">
        <form>
          <h3>Welcome to Remidies</h3>
          <div class="form-roup">
            <label>Email</label>
            <input
              class="form-control"
              placeholder="Enter your email..."
              v-model="form.email"
            />
            <span class="text-danger" v-if="errors.email">
              {{ errors.email[0] }}
            </span>
          </div>
          <div class="form-roup">
            <label>Password</label>
            <input
              class="form-control"
              placeholder="Enter your password..."
              type="password"
              v-model="form.password"
            />
            <span class="text-danger" v-if="errors.password">
              {{ errors.password[0] }}
            </span>
          </div>
          <div class="my-3">
            <button class="btn btn-primary" @click.prevent="login">
              LogIn
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../../apis/User";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        device_name: "browser",
      },
      errors: [],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    login() {
      User.login(this.form)
        .then((response) => {
          this.$root.$emit("login", true);
          localStorage.setItem("token", response.data);
          this.$router.push("/admin");
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Lobster&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100&family=Ubuntu:wght@300&display=swap");

.login {
  width: 100%;
  height: auto;
  padding: 10px;
  margin-top: 190px;
}
.login .row {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
}
.login .row .col-md-6 {
  width: 40%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.col-md-6 form {
  padding: 10px;
  margin: 10px;
}
.col-md-6 form h3 {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  padding: 10px;
  margin: 0;
  font-family: "Lobster", cursive;
}
.col-md-6 form label {
  font-size: 1.5rem;
  font-weight: 500;

  color: #000;
  padding: 5px;
  margin: 0;
}

@media only screen and (max-width: 436px) {
  .login {
    width: 100%;
    height: auto;
    padding: 10px;
    margin-top: 100px;
  }
  .login .row {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
  }
  .login .row .col-md-6 {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 0;
  }
  .col-md-6 form {
    padding: 10px;
    margin: 10px;
  }
  .col-md-6 form h3 {
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
    padding: 10px;
    margin: 0;
    font-family: "Lobster", cursive;
  }
  .col-md-6 form label {
    font-size: 1.2rem;
    font-weight: 500;

    color: #000;
    padding: 5px;
    margin: 0;
  }
}
</style>