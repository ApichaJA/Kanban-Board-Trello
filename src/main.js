import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase";

const config = {
    apiKey: "AIzaSyD8Oux0180gy15e2DxfthmU1g07vwAzfL0",
    authDomain: "tedxcharoenkrung-f6d01.firebaseapp.com",
    databaseURL: "https://tedxcharoenkrung-f6d01.firebaseio.com",
    projectId: "tedxcharoenkrung-f6d01",
    storageBucket: "tedxcharoenkrung-f6d01.appspot.com",
    messagingSenderId: "972577017098",
};

firebase.initializeApp(config);


Vue.config.productionTip = false
    //const UID = firebase.auth().uid;
    //const databse = firebase.database();
    //const uidRef = databse.ref(UID);
new Vue({
    router,
    render: h => h(App),
    methods: {
        data() {
            return {
                kanbanTopic: [],
            }
        },
        //addBoard: function() {
        //    uidKanbanboard.push({
        //        title: this.Title,
        //        text: this.Text
        //    })
        //  },
    },
    //created() {
    //    uidRef.on('child_added', snapshot => {
    //        this.kanbanTopic.push(snapshot.val())
    //        console.log(snapshot.val())
    //    })
    //},
}).$mount('#app')

/*

const config = {
  apiKey: 'YOUR_PROJECT_API_KEY',
  authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
  databaseURL: 'https://YOUR_PROJECT_ID.firebaseio.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT_ID.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID'
};
firebase.initializeApp(config)


*/