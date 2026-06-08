//Author: Yankho Ngolleka (codaMW)

//an object called user and initiating 3 string fields
let user = {

	name: "Yankho Ngolleka",
	password: "123xxxx",
	email: "codamw011@gmail.com"
}

//a function to validate email format
function isValidEmail(email) {

	if(email.includes('@') && email.includes('.')) {

		console.log(email);
	} else {
		console.log("Invalid email format");
	}
}

//printing out the output
console.log("name: " + user.name);
console.log("email: " + user.email);

