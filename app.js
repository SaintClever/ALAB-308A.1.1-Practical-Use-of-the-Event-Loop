let counter = 0;

try {
  let simpleFunction = () => {
    console.log(counter++);
    simpleFunction();
  }
  simpleFunction();
} catch(e) {
  console.error(e);
}
