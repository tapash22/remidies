<template>
  <div class="message">
    <h2>Message</h2>
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label>To</label>
            <input class="form-control" v-model="email" />
          </div>
          <div class="form-group">
            <label>Subject</label>
            <input class="form-control" v-model="sunject" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" v-model="message"></textarea>
          </div>
          <div class="my-3">
            <button class="btn btn-primary">Sent</button>
          </div>
        </form>
      </div>

      <div class="col-md-6">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">email</th>
              <th scope="col">phone</th>
              <th scope="col">Subject</th>
              <th scope="col">Message</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>@gmail.com</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Message</td>
              <td>
                <button
                  @click="deleteMessage(message.id)"
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

<style scoped>
.message {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.message h2 {
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  padding: 10px;
  margin: 0;
}
.message .row {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.message .row .col-md-6 {
  width: 48%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.message .row .col-md-6 form {
  padding: 10px;
  margin: 5px;
  width: 100%;
}
.message .row .col-md-6 form label {
  font-size: 1.2rem;
  font-weight: 600;
  padding: 5px;
  margin: 0;
}
.message .row .col-md-6 table {
  padding: 10px;
  margin: 10px;
}
</style>