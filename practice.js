
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDRSoOuKY2WwS7Ul5t6i3HZ8IBMzp0Uo-w",
    authDomain: "chitter-f5aa5.firebaseapp.com",
    databaseURL: "https://chitter-f5aa5-default-rtdb.firebaseio.com",
    projectId: "chitter-f5aa5",
    storageBucket: "chitter-f5aa5.appspot.com",
    messagingSenderId: "368459961576",
    appId: "1:368459961576:web:322a50c54040388f61255d"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
   function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
       

   }