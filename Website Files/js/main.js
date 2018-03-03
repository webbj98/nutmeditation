  // Initialize Firebase
var config = {
  apiKey: "AIzaSyDcTpbkOiB8IRUhNScPV8d3F4S0Hs63cTA",
  authDomain: "hackrice75.firebaseapp.com",
  databaseURL: "https://hackrice75.firebaseio.com",
  projectId: "hackrice75",
  storageBucket: "hackrice75.appspot.com",
  messagingSenderId: "547274297434"
};
firebase.initializeApp(config);

if (!firebase.apps.lenth){
    firebase.initializeApp({});
}
// ------ SIGN IN/SIGN UP ------- 
const auth = firebase.auth();
var database = firebase.database();
// btnLogin.addEventListener('click', e => {
//     //get email and password
//     const email = txtEmail.value;
// )}
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');


function firebaseCreateUser(){
    const email = document.getElementById('txtEmail').value;
    const pass = document.getElementById('txtPassword').value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass).catch(function(error){
        alert("This ain't workin");
    });
    console.log(email, pass);
    // const promise = auth.createUserWithEmailAndPassword(email, pass);
    // promise.catch(e => console.log(e.message));
    alert('whats happening');
    // if(email){
    // window.open('INSERT PAGE TO OPEN HERE');
    // }
    // else{
    //     alert('Invalid Email!');
    // }
}

function firebaseLogin(){
    const email = document.getElementById('txtEmail').value;
    const pass = document.getElementById('txtPassword').value;
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, pass);
    console.log(email, pass);
    // if(email)
    // window.open('blahhhh.html');
    // }
}


function firebaseLogout(){
    console.log('bye!');
    firebase.auth().signOut();
}

firebase.auth().onAuthStateChanged(firebaseUser => { //keeps checking if admin signed out
    if(firebaseUser) {
        console.log(firebaseUser);
    } else{
        console.log('not logged in');
    }
    })

function signInwGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      //
});
}


//setting the global variable for the date
var mydate=new Date();
var year=mydate.getYear();
if (year < 1000)
  year += 1900;

var day = mydate.getDay(); //current day
var month = mydate.getMonth(); //current month
var daym = mydate.getDate();
var h = mydate.getHours();
var m = mydate.getMinutes();
var s = mydate.getSeconds();

m = checkTime(m);
s = checkTime(s);

function checkTime(i){
  if (i < 10) {i = "0" + i};
  return i;
}


function beginJourney(){
  var database = firebase.database();
  var feelings = database.ref('feeling');
  var data = {

  }
  var deeznuts = "nuttttt"
  console.log(deeznuts)
  ref.push(data)
}

function submitFeeling(){
  var data = {
    uploadDay: day,
    uploadDaym: daym,
    uploadHour: h,
    uploadMin: m,
    uploadSec: s
    //decide feeling type
    //feeling
  }
  var ref = database.ref('feelings');
  ref.push(data)
}
