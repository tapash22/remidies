<template>
  <div class="product">
    <h2>Add Product</h2>
    <div class="row">
      <div class="col-md-12">
        <form>
          <div class="form-group">
            <label>Product Name</label>
            <input class="form-control" v-model="pname" />
          </div>
          <div class="form-group">
            <label>Catagory</label>
            <input class="form-control" v-model="pcategory" />
          </div>
          <div class="form-group">
            <label>sub-Category</label>
            <input class="form-control" v-model="pscategory" />
          </div>
          <div class="form-group">
            <label>description</label>
            <textarea class="form-control" v-model="pdescription"></textarea>
          </div>
          <div class="form-group">
            <label>Composition</label>
            <input
              class="form-control"
              type="file"
              ref="pcomposition"
              @change="uploadComposition"
            />
          </div>
          <div class="form-group">
            <label>Image</label>
            <input
              class="form-control"
              type="file"
              ref="pimage"
              @change="uploadImage"
            />
          </div>
          <div class="my-3">
            <button class="btn btn-primary" @click.prevent="addProduct()">
              Add Product
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
              <th scope="col">Category</th>
              <th scope="col">sub-category</th>
              <th scope="col">Description</th>
              <th scope="col">Composition</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <th scope="row">{{ product.id }}</th>
              <td>{{ product.pname }}</td>
              <td>{{ product.pcategory }}</td>
              <td>{{ product.pscategory }}</td>
              <td>{{ product.pdescription }}</td>
              <td>{{ product.pimage }}</td>
              <td>{{ product.pcomposition }}</td>
              <td>
                <button
                  @click="deleteProduct(product.id)"
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
import Product from "../../apis/Product";

export default {
  data() {
    return {
      pname: "",
      pcategory: "",
      pscategory: "",
      pdescription: "",
      pimage: "",
      pcomposition: "",

      products: [],
      id: "",
    };
  },

  created() {
    this.getProduct();
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    addProduct() {
      var data = new FormData();
      data.append("pname", this.pname);
      data.append("pcategory", this.pcategory);
      data.append("pscategory", this.pscategory);
      data.append("pdescription", this.pdescription);
      data.append("pimage", this.pimage);
      data.append("pcomposition", this.pcomposition);

      Product.addProduct(data, {
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

    getProduct() {
      Product.getProduct().then((response) => {
        this.products = response.data;
        // console.log(this.partners);
      });
    },

    uploadImage() {
      this.pimage = this.$refs.pimage.files[0];
    },

    uploadComposition() {
      this.pcomposition = this.$refs.pcomposition.files[0];
    },

    deleteProduct(id) {
      if (window.confirm("Are you want to delete this?")) {
        Product.deleteProduct(id)
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
.product {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.product h2 {
  font-size: 1.5rem;
  font-weight: 700;
  padding: 5px;
  margin: 5px;
  text-align: center;
  text-transform: uppercase;
}
.product .row {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.row .col-md-12 {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.row .col-md-12 form {
  padding: 10px;
}
.row .col-md-12 form label {
  font-size: 1.2rem;
  font-weight: 600;
  padding: 5px;
  margin: 0;
}
.row .col-md-12 .table {
  width: 100%;
  height: 100%;
}
</style>