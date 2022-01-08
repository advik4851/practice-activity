
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1rECuPFAFQSa4raZK0W_l5QvkgLXlTHY",
    authDomain: "kwitter-13c99.firebaseapp.com",
    databaseURL: "https://kwitter-13c99-default-rtdb.firebaseio.com",
    projectId: "kwitter-13c99",
    storageBucket: "kwitter-13c99.appspot.com",
    messagingSenderId: "1040972197148",
    appId: "1:1040972197148:web:a55c5ec50b513013a25ed9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firbase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}