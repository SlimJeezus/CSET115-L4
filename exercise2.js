let arr = [2, 2, 2, 4, 5, 6, 7, 5, 22, 5, 6, 33, 55, 22];
console.log("Original Array:", arr)

function removeDuplicate(arr){
    return [...new Set(arr)];
};

let filtered = removeDuplicate(arr)
console.log("Filtered Array:", filtered)
