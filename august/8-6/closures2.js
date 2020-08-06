function instructionGenerator() {
  function multiplyByTwo(num) {
    return num * 2;
  }
  return multiplyByTwo;
}

// const generatedFunc = instructorGenerator();

// console.log(generatedFunc(8))

function outer() {
  let counter = 0;
  function incrementCounter() {
    return counter++;
  }
  return incrementCounter;
}

const myNewFunction = outer();
// console.log(myNewFunction());
// console.log(myNewFunction());
// console.log(myNewFunction());

function randoNum() {
  let num = Math.random();

  return function ret() {
    return num;
  }
}

let newrando = randoNum();
let res = [newrando(), newrando(), newrando()];
// console.log(res);

function cntr() {
  let cnt = 0;

  this.up = function() {
    return ++cnt;
  }

  this.down = function() {
    return --cnt;
  };
};

let getcount = new cntr()
// console.log(getcount.up())
// console.log(getcount.up())
// console.log(getcount.down())

function summ(a) {
  return function(b) {
      return a + b
  }
}

let end = summ(5);
let final = end(-1);
console.log(final)