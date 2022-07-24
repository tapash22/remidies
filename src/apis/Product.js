import Api from "./Api";

export default {
  getProduct() {
    return Api().get("/product");
  },

  addProduct(product) {
    return Api().post("/product/add", product);
  },

  deleteProduct(id) {
    return Api().delete(`/product/delete/${id}`);
  },

  getAntibiotic() {
    return Api().get('/product/antibiotic');
  },

  getNutrition() {
    return Api().get('/product/nutrition');
  },

  getEssentialoil() {
    return Api().get('/product/essentialoil');
  },

  getCattle() {
    return Api().get('/product/cattle');
  },

  getProductid(id) {
    return Api().get(`/product/products/${id}`);
  },
};
