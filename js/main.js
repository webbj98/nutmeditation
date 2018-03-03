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
var database = firebase.database();
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

var loggedIn = false;

function writeUserData(userId) {
  console.log('THIS IS WORKING');
  var pos = userId.indexOf(".");
  userName = userId.substring(0,pos);
  console.log(userName);
  firebase.database().ref('users/' + userName).set({
    username: name    //some more user data
  });
  loggedIn = true;
  console.log(loggedIn);
  // document.getElementById("userstring").innerHTML = userName;
}


var txtEmail = document.getElementById('txtEmail').value;
var txtPassword = document.getElementById('txtPassword').value;
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
    firebaseUser = auth.signInWithEmailAndPassword(email, pass);
    console.log(email, pass);
    writeUserData(email);
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
        var Logged = true;
    } else{
        var Logged = false;
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


function beginJourney(){
  var email = document.getElementById('txtEmail').value;
  txtEmail = email
  writeUserData(email);
  console.log("help")
  if(firebaseUser){
    window.location.href="journey.html";
    var database = firebase.database();
    var feelings = database.ref('feeling');
    // writeUserData()
    var deeznuts = "nuttttt"
    console.log(deeznuts)  }
  else{
    window.location.href="journey.html";
    alert("LOOOOOK ITS HAPPENING")
  }
}

//-------------------------------------------
//From here down is the how are you feeling page!
//separate handlers for each of the 5 feels:


function sad(){

  var sad = 1;
  var ref = database.ref('users');
  ref.once('value', showGraph);
  feels(1, "sad");
}
function neutral(){
  var neutral = 1;
  var ref = database.ref('users');
  ref.once('value', showGraph)
  feels(1, "neutral");
}
function optimistic(){
  var optimistic = 1;
  var ref = database.ref('users');
  ref.once('value', showGraph)
  feels(1, "optimistic");
  window.location.href="optimisticmeditation.html";
}
function stressed(){
  var ref = database.ref('users');
  ref.once('value', showGraph)
  feels(1, "stressed");
}
function nutty(){
  var nutty = 1;
  var ref = database.ref('users');
  ref.once('value', showGraph)
  feels(1, "nutty");
}

function feels(num, state){
  // var userId = firebase.auth().getUserId;
  // name = userId.displayName;
  
  var userId = firebase.auth().getUserId
  console.log(userId)
  var ref = database.ref('users');
  console.log(state);
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
  // firebase.database().ref('users/' + userId.substring(0,(userId.length - 4))).set({
  //   feeling: state,
  //   Day: day,
  //   Month: month,
  //   Daym: daym,
  //   Hour: h,
  //   Min: m,
  //   Sec: s    //some more user data
  // });
  var data = {
    feeling: state,
    Day: day,
    Month: month,
    Daym: daym,
    Hour: h,
    Min: m,
    Sec: s  
  } 
  firebase.database().ref('/users/' + userId);
  console.log(data);
  ref.push(data);
  window.location.href="meditation.html";
}
// var ref = database.ref('users');
// ref.on('value', showGraph);

function showGraph(data){
  console.log(data.val());
  var user = data.val();
  var fields = Object.keys(user);
  alert('THIS IS WORKING');
  console.log(fields);
}

