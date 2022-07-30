import Api from "./Api";

export default {

  addSlider(slider) {
    return Api().post("/slider/add", slider);
  },
  
  getSlider() {
    return Api().get("/slider");
  },

  deleteSlider(id) {
    return Api().delete(`/slider/delete/${id}`);
  },
};
