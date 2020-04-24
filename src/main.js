import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase";

const config = {
  apiKey: 'YOUR_PROJECT_API_KEY',
  authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
  databaseURL: 'https://YOUR_PROJECT_ID.firebaseio.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT_ID.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID'
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