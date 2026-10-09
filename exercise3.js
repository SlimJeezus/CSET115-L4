const prompt = require('prompt-sync')();

let arr = [1,2,3,4,5,6,7,8,9,10]
let input = Number(prompt("Enter number to search for:"))
let found = true

if (arr.indexOf(input) == -1){
    found = false
}
if (found == true){
    console.log("FOUND!")
}
else{
    console.log("Not Found.")
}