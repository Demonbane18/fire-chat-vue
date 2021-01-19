import firebase from "firebase/app";
import "firebase/database";

const config = {
    //API KEYS
    apiKey: "AIzaSyCE_pkSAn5-vsB7YOH2LSuMIGxzA4w93ps",
    authDomain: "firechat-vue-1716a.firebaseapp.com",
    databaseURL: "https://firechat-vue-1716a-default-rtdb.firebaseio.com",
    projectId: "firechat-vue-1716a",
    storageBucket: "firechat-vue-1716a.appspot.com",
    messagingSenderId: "161844580258",
    appId: "1:161844580258:web:bbc3d5a24660e906e66cfb",
    measurementId: "G-5SDBHJ7KZX"
}

const db = firebase.initializeApp(config);
export default db;