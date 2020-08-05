function makeFunc() {
  let name = 'Mozilla';
  function displayName() {
    console.log(name)
  }
  return displayName;
}

// let func = makeFunc();
// func()

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(makeAdder(5))
// console.log(add5(2));
// console.log(add10(7));
