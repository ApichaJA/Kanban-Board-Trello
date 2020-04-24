<template>
  <div class="container">
    <div class="dropdown float-right col-xl">
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addTitle">
        <h5>Add New</h5><i class="fas fa-plus-circle"></i>
      </button>

<!--Title popup-->
<div class="modal fade" id="addTitle" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add New Title!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Title:</label>
            <input type="text" required class="form-control" v-model="pushTopic.title">
          </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addTitle()">Add new Card</button>
      </div>
        </form>
      </div>
    </div>
  </div>
</div>
<!--Topic popup-->
<div class="modal fade" id="addTopic" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New Topic!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
          <label for="recipient-name" class="col-form-label">Title:</label>
            <input type="text" required class="form-control" v-model="pushTopic.title">
            <label for="recipient-name" class="col-form-label">Topic:</label>
            <input type="text" required class="form-control" v-model="pushTopic.topic">
            <label for="recipient-name" class="col-form-label">Message:</label>
            <input type="text" class="form-control" v-model="pushTopic.message">
            <label for="recipient-name" class="col-form-label">Deadline:</label>
            <input type="text" class="form-control" v-model="pushTopic.date">

          </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addTopic()">Add new Topic</button>
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
      <div class="col-3 box py-2">
        <h1>{{kanbanTopics.title}}</h1>
        <div class="sec-box">
          <div class="detail">
            <input class="form-control" v-show="onEdit == kanbanTopics.title" v-model="kanbanTopics.topic"/>
            <h3 v-show="onEdit != kanbanTopics.title">{{kanbanTopics.topic}}</h3>
            <input class="form-control" v-show="onEdit == kanbanTopics.title" v-model="kanbanTopics.message"/>
            <h5 style="text-align:center;" v-show="onEdit != kanbanTopics.title">{{kanbanTopics.message}}</h5>
            <input class="form-control" v-show="onEdit == kanbanTopics.title" v-model="kanbanTopics.date"/>
            <p style="font-size: 15px; text-align:center;" v-show="onEdit != kanbanTopics.title">{{kanbanTopics.date}}</p>
            <p v-show="kanbanTopics.topic == kanbanTopic.topic">No Topic</p>
        <button @click.prevent="editBoard(kanbanTopics)" v-show="onEdit != kanbanTopics.title && kanbanTopics.topic != kanbanTopic.topic" type="button" class="btn btn-primary">
        <span>Edit</span>
      </button>
      <button @click.prevent="updateTopic(kanbanTopics)" v-show="onEdit == kanbanTopics.title && kanbanTopics.topic != kanbanTopic.topic" type="button" class="btn btn-primary">
        <span>Done</span>
      </button>
      <button v-show="onEdit == kanbanTopics" @click.prevent="removeTopic(kanbanTopics)" type="button" class="btn">
        <span>Remove</span>
      </button>
          </div>
        </div>
      </div>
        <button data-toggle="modal" data-target="#addTopic" type="button" class="btn">
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
      editTopic:"",
      editButton:"",
      onEdit: null,
      pushTopic:{
      title:"",
      topic:"",
      message: "",
      date:"",
      },
      Email: "",
      Uid: "",
      kanbanTopic: [],
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
    editBoard(kanbanTopics) {
      this.onEdit = kanbanTopics.title;
      this.editButton = "Done"
    },
    updateTopic(){
      this.editButton = "Edit"
      this.onEdit = false;
        const database = firebase.database();
        const getUser = firebase.auth().currentUser;
        const getUid = getUser.uid;
        let editRef = database.ref(getUid);
        editRef.update({...this.kanbanTopics})
        this.pushTopic.topic = ""
        this.pushTopic.message = ""
        this.pushTopic.date = ""
        this.pushTopic.title = ""
    },
    signout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        });
    },
    addTitle() {
      const database = firebase.database();
      const getUser = firebase.auth().currentUser;
      const getUid = getUser.uid;
      let sendRef = database.ref(getUid);
      sendRef.push({
        title: this.pushTopic.title,
      });
        this.pushTopic.title = ""
    },
  addTopic(){
    const database = firebase.database();
    const getUser = firebase.auth().currentUser;
    const getUid = getUser.uid;
    let sendRef = database.ref(getUid);
      sendRef.push({...this.pushTopic})
      this.pushTopic.topic = ""
      this.pushTopic.message = ""
      this.pushTopic.date = ""
      this.pushTopic.title = ""
  },
    removeTopic(kanbanTopics){
      const database = firebase.database();
      const getUser = firebase.auth().currentUser;
      const getUid = getUser.uid;
      let removeRef = database.ref(getUid);
      removeRef.Child(kanbanTopics.Title).remove();
    },
  },
  computed: {
  
  },
  created() {
    //Update
      this.$nextTick(function() {
        const database = firebase.database();
        //const getUser = firebase.auth().currentUser;
        //const getUid = getUser.uid;
        let getRef = database.ref("Rst7gjtdrAaq3ePdBPa24Gi2w4D3");
        getRef.on("child_added", snapshot => {
          this.kanbanTopic.push({...snapshot.val(),Title:snapshot.key});
        });
        })
      //Remove
  //    this.$nextTick(function() {
  //      const database = firebase.database();
  //      //const getUser = firebase.auth().currentUser;
  //      //const getUid = getUser.uid;
  //      let getRef = database.ref("Rst7gjtdrAaq3ePdBPa24Gi2w4D3");
  //      getRef.on("child_removed", snapshot => {
  //        const deleteTitle = this.kanbanTopic.find(kanbanTopic=>kanbanTopic.Title == snapshot.key)
  //        const index = this.kanbanTopic.indexOf(deleteTitle)
  //        this.kanbanTopic.splice(index, 1);
  //      });
  //      })
  }
};
</script>