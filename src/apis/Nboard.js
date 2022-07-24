import Api from "./Api";

export default {
  getNotice() {
    return Api().get("/notice");
  },

  addNotice(notice) {
    return Api().post("/notice/add", notice);
  },

  deleteNotice(id) {
    return Api().delete(`/notice/delete/${id}`);
  },
};
