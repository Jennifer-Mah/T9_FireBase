// Get a reference to the database service
var database = firebase.database();

// Create a storage reference from our storage service
var storageRef = database.ref("orders");

//create instance of the Google provider instance
var provider = new firebase.auth.GoogleAuthProvider();

//user status div
var user_info = document.getElementById("user_status");

//current user
var current_user = null;

function authenticate(){
	
}

function signOut(){
	
}

//setting an event listener for change of authentication state
firebase.auth().onAuthStateChanged(function(user) {
	current_user=user;
	if (user) {
    	// User is signed in
		user_info.innerHTML = "Hi, " + user.displayName;
  	} else {
    	// No user is signed in
		user_info.innerHTML = "";
  	}
});

function order()
{
	
}

document.getElementById("enter").addEventListener("click", order);
document.getElementById("signin").addEventListener("click", authenticate);
document.getElementById("signout").addEventListener("click", signOut);