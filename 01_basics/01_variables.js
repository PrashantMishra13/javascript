const accountId = 1445533;
let accountEmail = "js@gmail.com"
var accountPassword = "123456"
accountCity = "Lucknow"
let accountState;
// accountId =  2; // not allowed

accountEmail = "jstutorial@gmail.com";
accountPassword = "22446688";
accountCity = "Mumbai";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and funtional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState]);
