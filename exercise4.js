let arr = [66, 97, 108, 108, 115];

let result = arr.map(num => ({ [num]: String.fromCharCode(num) }));

console.log(result);