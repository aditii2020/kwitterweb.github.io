var firebaseConfig = {
      apiKey: "AIzaSyADiHEZnenzpqpfRJJwcFWM7nfWnhgzbYg",
      authDomain: "kwitter-3fb07.firebaseapp.com",
      databaseURL: "https://kwitter-3fb07.firebaseio.com",
      projectId: "kwitter-3fb07",
      storageBucket: "kwitter-3fb07.appspot.com",
      messagingSenderId: "20150350972",
      appId: "1:20150350972:web:00e3cd2151123b132905f9",
      measurementId: "G-XE60BT56R2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name")
document.getElementById("room_name").innerHTML = "welcome  " +user_name + "!";

function addRoom(){
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
 purpose :"adding Room Name"
     });
     localStorage.setItem("room_name",room_name);
     window.location = "kwitter_page.html";
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name" + Room_names);
row = "<div class='room_name' id='+room_name+' onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>"        
     document.getElementById("output").innerHTML += row ;
//End code
      });});}
getData();

function redirectToRoomName()
{
      console.log("name");
      localStorage.setItem("room_name",name);
      Window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}