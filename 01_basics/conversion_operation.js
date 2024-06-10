let score = "33abc"
console.log(score);

let score2 = Number(score)

console.log(score2)
console.log(typeof score2)

//when converting a number to a number , it is easily done. i.e. when converting "33" ===> gives 33
//"33abc" ===> NaN(not a number)
// true ===> 1; false ===> 0

let isLoggedIn = 1
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn)

let notIsLogged = ""
let boolNotIsLogged = Boolean(notIsLogged)
console.log(boolNotIsLogged)

//converting 1 ===> booelan, gives true
//converting "" ====> boolean, gives false
//converting "Kargil" ====> boolean, gives true


let someNumber = 15
console.log(someNumber);
console.log(typeof someNumber);
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
