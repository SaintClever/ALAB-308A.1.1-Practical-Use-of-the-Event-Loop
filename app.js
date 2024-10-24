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


let nestedArray = [["a", [["b", "c"], "d", ["e", "f"]], "g"]];

// Goal
// console.log(nestedArray.flat(Infinity));

let flatTop = (arr) => {
  let counter = 1;

  while (arr[counter] === (typeof "string")) {
    console.log(arr[counter]);
  }
  counter++;
}


let arrayFlat = (arr) => {
  let newArray = [];

  for (let i in arr) {
    if (arr[i] === (typeof "string") || arr[i] === (typeof 0)) {
      newArray.push(arr[i]);
    }
    flatTop(arr);
  }
  return newArray;
}

arrayFlat(nestedArray);



// OR
console.log(nestedArray.toString().split(','))