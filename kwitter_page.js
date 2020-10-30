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

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({

        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
name = message_data['name'];
message  = message_data['message'];
like = message_data['like']
name_with_tag = "<h4>" + name + "<img src='tick.png'  class='user_tick'></h4>";
meesage_with_tag ="<h4 class='message_h4'>" + message + "</h4>" 
button_with_tag =  "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" +like+ "</span></button><hr>";
row = name_with_tag + meesage_with_tag + button_with_tag + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();

function updateLike(message_id)
{
button_id = message_id;
likes = document.getElementById(button_id).value;
update_Like = Number(likes)+1;
console.log(update_Like);
firebase.database().ref(room_name).child(message_id).update({
like:update_Like
});
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
    window.location.replace("index.html");
}