<template>
  <div class="container">
    <div class="dropdown float-right">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >{{Email}}</button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" @click="signout">Logout</a>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-3 box py-2">
        <h3>To Do</h3>
        <div class="sec-box">
          <div>Math</div>
        </div>
      </div>

      <div class="col-3 box py-2">
        <h3>In Progress</h3>
        <div class="sec-box"></div>
      </div>

      <div class="col-3 box py-2">
        <h3>Completed</h3>
        <div class="sec-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "KanbanRow",
  data(){
    return{
      Email:""
    }
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.$router.replace("/");
      }
      else{
        this.Email = user.email
      }
    });
  },
  methods: {
    signout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        });
    }
  }
};
</script>
