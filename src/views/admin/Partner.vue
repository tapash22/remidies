<template>
  <div class="partner">
    <h2>Add Partner</h2>
    <div class="row">
      <div class="col-md-12">
        <form>
          <div class="form-group">
            <label>Partner Name</label>
            <input class="form-control" v-model="ptname" />
          </div>
          <div class="form-group">
            <label>Partner link</label>
            <input class="form-control" v-model="plink" />
          </div>
          <div class="form-group">
            <label>Partner Certificate</label>
            <input class="form-control" v-model="pcertificate" />
          </div>
          <div class="form-group">
            <label>Partner Image</label>
            <input
              class="form-control"
              type="file"
              ref="ptimage"
              @change="uploadImage"
            />
          </div>
          <div class="my-3">
            <button class="btn btn-primary" @click.prevent="addPartner()">
              Add Partner
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
              <th scope="col">partner name</th>
              <th scope="col">Partner Certificate</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="partner in partners" :key="partner.id">
              <th scope="row">{{ partner.id }}</th>
              <td>{{ partner.ptname }}</td>
              <td>{{ partner.pcertificate }}</td>
              <td>{{ partner.ptimage }}</td>
              <td>
                <button
                  @click="deletePartner(partner.id)"
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
import Partner from "../../apis/Partner";

export default {
  data() {
    return {
      ptname: "",
      plink: "",
      pcertificate: "",
      ptimage: "",

      partners: [],
      id: "",
    };
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  created() {
    this.getPartner();
  },

  methods: {
    addPartner() {
      var data = new FormData();
      data.append("ptname", this.ptname);
      data.append("plink", this.plink);
      data.append("pcertificate", this.pcertificate);
      data.append("ptimage", this.ptimage);

      Partner.addPartner(data, {
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

    getPartner() {
      Partner.getPartner().then((response) => {
        this.partners = response.data;
        // console.log(this.partners);
      });
    },

    uploadImage() {
      this.ptimage = this.$refs.ptimage.files[0];
    },

    deletePartner(id) {
      if (window.confirm("Are you want to delete this?")) {
        Partner.deletePartner(id)
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
.partner {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.partner h2 {
  font-size: 1.5rem;
  font-weight: 700;
  padding: 5px;
  margin: 5px;
  text-align: center;
  text-transform: uppercase;
}
.partner .row {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.partner .row .col-md-12 {
  padding: 0;
  margin: 0;
}
.partner .row .col-md-12 form {
  padding: 10px;
  width: 100%;
  height: 100%;
  margin: 0;
}
.partner .row .col-md-12 form label {
  font-size: 1.2rem;
  font-weight: 600;
  padding: 5px;
  margin: 0;
}
</style>