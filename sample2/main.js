

let tallyKey = '4MWYDKSuzH0Z0PRW4APa'


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
