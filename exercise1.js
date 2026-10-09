
let arr = [2,4,5,7,23,78,35,64,356,29,39]
console.log("Original Array:", arr)

function removeEven(arr){
    return arr.filter(num => num % 2 !== 0);
}

let oddOnly = removeEven(arr)
console.log("Filtered Array:", oddOnly)