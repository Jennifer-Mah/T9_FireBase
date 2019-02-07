// Get a reference to the database service
var database = firebase.database();

// Create a storage reference from our database
var storageRef = database.ref("orders");

var order_list = document.getElementById("orders");

// Adds an event listener to any child added to our database
// This is triggered when the listener is first attached and every time a new child is added
// Adds the orders to the orders div
	storageRef.on("child_added", function(snapshot){
			console.log(snapshot.val());
			var name=snapshot.val().name;
			var location=snapshot.val().location;
			var payment=snapshot.val().payment.type;
			order_list.innerHTML += "<span class='name'>" + name + "</span><span class='location'>" + location + "</span><span class='type'>" + payment +"</span><br>";
	});
