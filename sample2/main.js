

let tallyKey = '4MWYDKSuzH0Z0PRW4APa'

const firebaseConfig = {
  apiKey: "AIzaSyB9CmYRYuZoo50oqJLEDRVDqh3v3956NCs",
  authDomain: "tally-8c201.firebaseapp.com",
  databaseURL: "https://tally-8c201.firebaseio.com",
  projectId: "tally-8c201",
  storageBucket: "tally-8c201.appspot.com",
  messagingSenderId: "341449618122",
  appId: "1:341449618122:web:1f8c32a0bbcd488ee8fa33",
  measurementId: "G-QKQC0GL7NC"
};


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB9CmYRYuZoo50oqJLEDRVDqh3v3956NCs",
  authDomain: "tally-8c201.firebaseapp.com",
  projectId: "tally-8c201",
});

var db = firebase.firestore();


getTallyLive = () => {
  db.collection("tally").doc(tallyKey)
    .onSnapshot((doc) => {

      var resultElement = document.getElementById('result');
      console.log("Current data: ", doc.data());
      resultElement.innerHTML = doc.data()["counter"];
    });


}    
