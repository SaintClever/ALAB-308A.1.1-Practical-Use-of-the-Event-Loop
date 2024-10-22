// let counter = 0;

// try {
//   let simpleFunction = () => {
//     console.log(counter++);
//     simpleFunction();
//   }
//   simpleFunction();
// } catch(e) {
//   console.error(e);
// }


let nestedArray = [[0, [[1, 2], 3, [4, 5]], 6]];

// Goal
console.log(nestedArray.flat(Infinity));


let arrayFlat = (arr) => {
  for (i in arr) {
    console.log(arr[i])
  }
  return arr;
}


let trampoline = (func) => {
  let result = func
  return result;
}

console.log(trampoline(arrayFlat(nestedArray)));