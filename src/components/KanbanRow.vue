<template>
  <div class="container">
    <div class="dropdown float-right col-xl">
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addCard">
        <h5>Add New</h5><i class="fas fa-plus-circle"></i>
      </button>

<div class="modal fade" id="addCard" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">What New!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Title:</label>
            <input type="text" required class="form-control" v-model="Title">
          </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addBoard()">Add new Card</button>
      </div>
        </form>
      </div>
    </div>
  </div>
</div>
      <button
        class="btn dropdown-toggle shadow-none"
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

    <div
      class="row justify-content-center"
      v-for="kanbanTopics in kanbanTopic"
      :key="kanbanTopics.Uid"
    >
      <div class="col-xl box py-2">
        <h5>{{kanbanTopics.title}}</h5>
        <div class="sec-box">
          <div class="detail">
            <h5>{{kanbanTopics.topic}}</h5>
            <p>{{kanbanTopics.message}}</p>
            <p>{{kanbanTopics.date}}</p>
        <button type="button" class="btn btn-primary">
        <span>Edit</span>
      </button>
          </div>
        </div>
      </div>
        <button type="button" class="btn">
        <i class="fas fa-plus-circle"></i><span>Add</span>
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "KanbanRow",
  data() {
    return {
      Title:"",
      message: "",
      Email: "",
      Uid: "",
      kanbanTopic: []
    };
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.$router.replace("/");
      } else {
        this.Email = user.email;
        this.Uid = user.uid;
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
    },
    addBoard() {
      const database = firebase.database();
      const getUser = firebase.auth().currentUser;
      const getUid = getUser.uid;
      let sendRef = database.ref(getUid);
      sendRef.push({
        title: this.Title,
      });
        this.Title = ""
    },
    
      fetchCard() {
        const database = firebase.database();
        const getUser = firebase.auth().currentUser;
        const getUid = getUser.uid;
        let getRef = database.ref(getUid);
        getRef.on("child_added", snapshot => {
          this.kanbanTopic.push(snapshot.val());
          console.log(snapshot.val());
        });
      }
  },
  created() {
    this.fetchCard();
  }
};
</script>