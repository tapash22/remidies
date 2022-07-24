<template>
  <div class="notice-board">
    <h2>Add Notice</h2>
    <div class="row">
      <div class="col-md-12">
        <form>
          <div class="form-group">
            <label>Title</label>
            <input class="form-control" v-model="ntitle" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" v-model="ndescription"></textarea>
          </div>
          <div class="my-3">
            <button class="btn btn-primary" @click.prevent="addNotice()">
              Add Notice
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Notice</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="notice in notices" :key="notice.id">
              <th scope="row">{{ notice.id }}</th>
              <td>{{ notice.ntitle }}</td>
              <td>{{ notice.ndescription }}</td>
              <td>
                <button
                  @click="deleteNotice(notice.id)"
                  class="btn btn-small btn-warning"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Nboard from "../../apis/Nboard";

export default {
  data() {
    return {
      ntitle: "",
      ndescription: "",

      notices: [],
      id: "",
    };
  },

  created() {
    this.getNotices();
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    addNotice() {
      var data = new FormData();
      data.append("ntitle", this.ntitle);
      data.append("ndescription", this.ndescription);

      Nboard.addNotice(data, {
        header: {
          "Content-Type": "multipart/form-data",
        },
      })
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
    },

    getNotices() {
      Nboard.getNotice().then((response) => {
        this.notices = response.data;
        // console.log(this.partners);
      });
    },

    deleteNotice(id) {
      if (window.confirm("Are you want to delete this?")) {
        Nboard.deleteNotice(id)
          .then((res) => {
            if (res.data.error) {
              console.log("errors", res.data);
              alert(res.data);
            } else {
              console.log(res.data.message);
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
.notice-board {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.notice-board h2 {
  font-size: 1.5rem;
  font-weight: 700;
  padding: 5px;
  margin: 5px;
  text-align: center;
  text-transform: uppercase;
}
.notice-board .row {
  width: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.notice-board .row .col-md-12 {
  padding: 0;
  margin: 0;
}
.notice-board .row .col-md-12 form {
  padding: 10px;
  width: 100%;
  height: 100%;
  margin: 0;
}
.notice-board .row .col-md-12 form label {
  font-size: 1.2rem;
  font-weight: 600;
  padding: 5px;
  margin: 0;
}
</style>