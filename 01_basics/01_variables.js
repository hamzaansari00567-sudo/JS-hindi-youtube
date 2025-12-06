const accountId = 144556 // constant cannot be changed
let accountEmail = "hamza@gmail.com" // it will be changed
var accountPassword = "12345" // it will be changed
accountCity = "mumbai" // it will be changed

accountEmail = "ala@gmail.com"
accountPassword = "45678"
accountCity = "pune"
let accountstate;
/*
prefer not to use var
because issue in block scope and funcctional scope
*/
console.table([accountEmail,accountId,accountPassword,accountCity,accountstate]);
