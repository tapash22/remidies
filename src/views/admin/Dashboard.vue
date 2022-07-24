<template>
  <div class="dashboard">
    <h2>Dashboard</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="box">
          <div class="image">
            <img src="../../assets/image/man.jpg" />
          </div>
          <address>
            <label>Name:Mr. Alok </label><br />
            <label>Email: alok@gmail.com</label><br />
            <label>Phone: +8801600000000</label><br />
            <label>Designation: CEO </label>
          </address>
        </div>
      </div>
      <div class="col-md-6">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.dashboard h2 {
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  padding: 10px;
  margin: 0;
}
.dashboard .row {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.dashboard .row .col-md-6 {
  width: 50%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.dashboard .row .col-md-6 .box {
  width: 100%;
  height: 100%;
  display: block;
}
.col-md-6 .box .image {
  width: 100%;
  height: 200px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  padding: 5px;
}
.col-md-6 .box .image img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid green;
}
.col-md-6 .box address {
  padding: 10px;
  margin: 10px;
  background: #1d3557;
  box-shadow: 5px 10px #65778f;
}
.col-md-6 .box address label {
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: 1px;
  padding: 2px;
  margin-left: 200px;
}
</style>