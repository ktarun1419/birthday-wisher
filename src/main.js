import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import firebase from "firebase";



var firebaseConfig = {
    apiKey: "AIzaSyCJirnnEhxIcWWK8wK7Ohh6LMaHJOZijz4",
    authDomain: "birthdayalarm-b8077.firebaseapp.com",
    projectId: "birthdayalarm-b8077",
    storageBucket: "birthdayalarm-b8077.appspot.com",
    messagingSenderId: "614327637874",
    appId: "1:614327637874:web:fd5e845efe9a3e29ba6feb"
  };

  firebase.initializeApp(firebaseConfig);
  const db=firebase.database;
  const auth=firebase.auth;
  export{
    db,
    auth
  }

createApp(App).use(router).mount('#app')

