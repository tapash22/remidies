<template>
  <div class="slider">
    <h2>Add Slider</h2>
    <div class="row">
      <div class="col-md-12">
        <form>
          <div class="form-group">
            <label>Slider Name</label>
            <input class="form-control" v-model="sname" />
          </div>
          <div class="form-group">
            <label>Image</label>
            <input
              class="form-control"
              type="file"
              ref="simage"
              @change="uploadImage"
            />
          </div>
          <div class="my-3">
            <button class="btn btn-primary" @click.prevent="addSliders()">
              Add Slider
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
              <th scope="col">Slider Name</th>
              <th scope="col">Slider Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="slider in sliders" :key="slider.id">
              <th scope="row">{{ slider.id }}</th>
              <td>{{ slider.sname }}</td>
              <td>{{ slider.simage }}</td>
              <td>
                <button
                  @click="deleteSlider(slider.id)"
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
import Slider from "../../apis/Slider";

export default {
  data() {
    return {
      sname: "",
      simage: "",

      sliders: [],
      id: "",
    };
  },

  created() {
    this.getSlider();
  },

  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    addSliders() {
      var data = new FormData();
      data.append("sname", this.sname);
      data.append("simage", this.simage);

      Slider.addSlider(data, {
        header: {
          "Content-Type": "multipart/form-data",
        },
      })
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
    },
    getSlider() {
      Slider.getSlider().then((response) => {
        this.sliders = response.data;
        // console.log(this.gallerys);
      });
    },

    uploadImage() {
      this.simage = this.$refs.simage.files[0];
    },

    deleteSlider(id) {
      if (window.confirm("Are you want to delete this?")) {
        Slider.deleteSlider(id)
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
.slider {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.slider h2 {
  font-size: 1.5rem;
  font-weight: 700;
  padding: 5px;
  margin: 5px;
  text-align: center;
  text-transform: uppercase;
}
.slider .row {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.slider .row .col-md-12 {
  padding: 0;
  margin: 0;
}
.slider .row .col-md-12 form {
  padding: 10px;
}
.slider .row .col-md-12 form label {
  font-size: 1.2rem;
  font-weight: 600;
  padding: 5px;
  margin: 0;
}
</style>