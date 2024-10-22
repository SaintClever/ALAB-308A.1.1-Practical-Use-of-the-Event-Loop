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
  for (let i in arr) {
    console.log(arr[i]);
  }
}


let arrayFlat = (arr) => {
  let newArray = [];

  for (let i in arr) {
    if (arr[i] === (typeof "string")) {
      newArray.push(arr[i]);
    }
    flatTop(arr[i], newArray);
  }
  return newArray;
}

arrayFlat(nestedArray);