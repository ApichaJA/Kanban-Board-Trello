<template>
  <div id="sigin" class="">
    <form @submit="loginWithEmail">
      <h1>Login</h1>
      <div class="col-xl py-2">
        <input v-model="email" type="text" class="form-control" placeholder="Email">
      </div>
      <div class="col-xl py-2">
         <input v-model="password" type="password" class="form-control" placeholder="Password">
      </div>
      <button type="submit" class="btn ">Login</button>
    <button @click="loginWithGmail" class="btn">Login in with Gmail
    </button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "sigin",
  data: function() {
            return { email: "", password: "" };
        },
  methods: {
       loginWithEmail(e) {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(
                 user => {
                    this.$router.replace("KanbanRow");
                    console.log(user)
                 },
                 err => {
                    alert(err.message)
                 });
            e.preventDefault();
       },
       loginWithGmail() {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase
            .auth()
            .signInWithPopup(provider)
            .then(
                 user => {
                    this.$router.replace("KanbanRow")
                    console.log(user)
                 },
                 err => {
                    alert(err.message)
                 });
       }
  }
}
</script>