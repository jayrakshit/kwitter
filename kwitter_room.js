var firebaseConfig = {
      apiKey: "AIzaSyCTTsVXIIiEW6XtjhAIjvQ_Jv8gjNH4MgU",
      authDomain: "kwitter-9ec13.firebaseapp.com",
      databaseURL: "https://kwitter-9ec13-default-rtdb.firebaseio.com",
      projectId: "kwitter-9ec13",
      storageBucket: "kwitter-9ec13.appspot.com",
      messagingSenderId: "136464304609",
      appId: "1:136464304609:web:020a91bf2989c62dea2aa0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";}

      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }