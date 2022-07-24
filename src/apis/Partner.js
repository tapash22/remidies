import Api from "./Api";

export default {
  addPartner(partner) {
    return Api().post("/partner/add", partner);
  },

  getPartner() {
    return Api().get("/partner");
  },

  deletePartner(id) {
    return Api().delete(`/partner/delete/${id}`);
  },
};
