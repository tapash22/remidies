<template>
  <div class="users">
    <h2>Add Users</h2>
    <div class="row">
      <div class="col-md-12">
        <form >
          <div class="form-group">
            <label>User Name</label>
            <input class="form-control" v-model="form.name" />
          </div>

          <div class="form-group">
            <label>User Email</label>
            <input class="form-control" v-model="form.email" />
          </div>

          <div class="form-group">
            <label>User password</label>
            <input
              class="form-control"
              type="password"
              v-model="form.password"
            />
          </div>
          <div class="my-3">
            <button
              class="btn btn-primary"
              @click.prevent="register"
            >
              Add User
            </button>
          </div>
        </form>
      </div>

      <!-- <div class="col-md-12"> -->
        <!-- <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">password</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <th scope="row">{{ user.id }}</th>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.password }}</td>
              <td>
                <button
                  @click="deleteUser(user.id)"
                  class="btn btn-small btn-warning"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import User from "../../apis/User";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
       errors: [],
    };
  },

  created() {
    this.getUser();
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    register() {
       User.register(this.form)
        .then(() => {
          alert("Registration successfull!!"+this.form.name)
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    },
    getUser() {
      User.getUser().then((response) => {
        this.users = response.data;
        // console.log(this.gallerys);
      });
    },

    deleteUser(id) {
      if (window.confirm("Are you want to delete this?")) {
        User.deleteUser(id)
          .then((res) => {
            if (res.data.error) {
              console.log("errors", res.data);
              alert(res.data);
            } else {
              console.log(res.data);
              alert(res.data);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style scoped>
.users {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.users h2 {
  font-size: 1.5rem;
  font-weight: 700;
  padding: 5px;
  margin: 5px;
  text-align: center;
  text-transform: uppercase;
}
.users .row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.users .row .col-md-12 {
  padding: 0;
  margin: 0;
}
.users .row .col-md-12 form {
  padding: 10px;
}
.users .row .col-md-12 form label {
  font-size: 1.2rem;
  font-weight: 600;
  padding: 5px;
  margin: 0;
}
</style>