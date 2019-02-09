// // NO AUTHENTICATE

// // Get a reference to the database service
// var database = firebase.database();

// // Create a storage reference from our storage service
// var storageRef = database.ref("orders");

// //create instance of the Google provider instance
// var provider = new firebase.auth.GoogleAuthProvider();

// //user status div
// var user_info = document.getElementById("user_status");

// //current user
// var current_user = null;

// function order()
// {
// 		var name;
// 		var email;
// 		var street;
// 		var city;
// 		var state;
// 		var zip;
// 		var country;
// 		var pickup;
// 		var pay_type; 
// 		var card_num;
// 		var exp_date;
// 		var cookies;
// 		var macaroons;
// 		var choclate;

// 		if (document.getElementById("cookies").checked == true){
// 			//cookies
// 			cookies = document.getElementById("cookies").value;
// 		}
// 		else {
// 			cookies = "none";
// 		}
// 		if (document.getElementById("macaroons").checked == true){
// 			//macaroons
// 			macaroons = document.getElementById("macaroons").value;
// 		}
// 		else {
// 			macaroons= "none";
// 		}
// 		if (document.getElementById("CC").checked == true){
// 			//choclate
// 			choclate = document.getElementById("CC").value;
// 		}
// 		else {
// 			choclate= "none";
// 		}
		
// 		//team
// 		pickup = document.getElementById("location").value;
	
// 		//name
// 		name = document.getElementById("name").value;
		
// 		//email
// 		email = document.getElementById("email").value;
	
// 		//address
// 		street = document.getElementById("address").value;
		
// 		//city
// 		city = document.getElementById("city").value;
		
// 		//state
// 		state = document.getElementById("state").value;
		
// 		//zip
// 		zip = document.getElementById("zip").value;
		
// 		//country
// 		country = document.getElementById("country").value;
			
// 		//payment
// 		if (document.getElementById("paypal").checked == true){
// 			pay_type = document.getElementById("paypal").value;
// 		} else {
// 			if (document.getElementById("visa").checked == true){
// 				pay_type = document.getElementById("visa").value;
// 			} else {
// 				if (document.getElementById("mastercard").checked == true){
// 					pay_type = document.getElementById("mastercard").value;
// 				} else {
// 					pay_type = "none";
// 				}
// 			}
// 		}
		
// 		//card number
// 		card_num = document.getElementById("cardNumber").value;
		
// 		//expiration date
// 		exp_date = document.getElementById("expiration").value;
		
// 		//write to firebase
// 		storageRef.push({
// 			name: name, 
// 			billing_address:{
// 				address: street,
// 				city: city,
// 				state: state,
// 				zip: zip,
// 				country: country
// 			},
// 			email: email,
// 			cookie: cookies,
// 			macaroons: macaroons,
// 			Pain_au_chocolat: choclate, 
// 			location: pickup, 
// 			payment: {
// 				type: pay_type,
// 				card: card_num,
// 				exp: exp_date
// 			}
// 			}).then(window.location.href = "firebase_order_confirm.html");
		
		
// }

// document.getElementById("enter").addEventListener("click", order);
