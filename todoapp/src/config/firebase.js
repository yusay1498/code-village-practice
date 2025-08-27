import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCDxDAgfuwiDZ9KfgVrh53UIXIfKAN-Zec",
    authDomain: "chat-app-9dfc6.firebaseapp.com",
    databaseURL: "https://chat-app-9dfc6.firebaseio.com",
    projectId: "chat-app-9dfc6",
    storageBucket: "chat-app-9dfc6.appspot.com",
    messagingSenderId: "219143585049",
    appId: "1:219143585049:web:35536c6d5298d3f1d19988",
    measurementId: "G-QFE7V3582D"
}

firebase.initializeApp(firebaseConfig)

export default firebase