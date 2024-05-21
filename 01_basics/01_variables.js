const accountId = 1556445
let accountEmail = "rohini@google.com"
var accountPassword = "6811"
accountCity = "jaipur"
let accountState;

//accountId = 2 // not allowed

accountEmail = "gjio@jgo.com"
accountPassword = "125546"
accountCity = "Bengaluru"



console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
