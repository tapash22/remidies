import Api from "../apis/Api";

export default {

    addMessage(contact) {
        return Api().post("/send-mail", contact);
      },

}