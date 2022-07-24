<template>
  <div class="gallery">
    <h2>Add Gallery</h2>
    <div class="row">
      <div class="col-md-12">
        <form>
          <div class="form-group">
            <label>Gallery Name</label>
            <input class="form-control" v-model="gname" />
          </div>
          <div class="form-group">
            <label>Image</label>
            <input
              class="form-control"
              type="file"
              ref="gimage"
              @change="uploadImage"
            />
          </div>
          <div class="my-3">
            <button class="btn btn-primary" @click.prevent="addGallery()">
              Add Gallery
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
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="gallery in gallerys" :key="gallery.id">
              <th scope="row">{{ gallery.id }}</th>
              <td>{{ gallery.gname }}</td>
              <td>{{ gallery.gimage }}</td>
              <td>
                <button
                  @click="deleteGallery(gallery.id)"
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
import Gallery from "../../apis/Gallery";

export default {
  data() {
    return {
      gname: "",
      gimage: "",

      gallerys: [],
      id: "",
    };
  },

  created() {
    this.getGallery();
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    addGallery() {
      var data = new FormData();
      data.append("gname", this.gname);
      data.append("gimage", this.gimage);
      Gallery.addGallery(data, {
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
    getGallery() {
      Gallery.getGallery().then((response) => {
        this.gallerys = response.data;
        // console.log(this.gallerys);
      });
    },

    uploadImage() {
      this.gimage = this.$refs.gimage.files[0];
    },

    deleteGallery(id) {
      if (window.confirm("Are you want to delete this?")) {
        Gallery.deleteGallery(id)
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
.gallery {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.gallery h2 {
  font-size: 1.5rem;
  font-weight: 700;
  padding: 5px;
  margin: 5px;
  text-align: center;
  text-transform: uppercase;
}
.gallery .row {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.gallery .row .col-md-12 {
  padding: 0;
  margin: 0;
}
.gallery .row .col-md-12 form {
  padding: 10px;
}
.gallery .row .col-md-12 form label {
  font-size: 1.2rem;
  font-weight: 600;
  padding: 5px;
  margin: 0;
}
</style>