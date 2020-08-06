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


// console.log(add5(2));
// console.log(add10(7));


const counterCreator = () => {
  let count = 0;
  return () => {
    console.log(count);
    count ++;
  }
}

let counter = counterCreator();

// counter();
// counter();
// counter();
// counter();

const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName  = () => name;
  const die = () => {
    console.log('DED')
  };
  const damage = x => {
    health -= x;
    console.log(health);
    if (health <= 0) {
      die();
    }
  };
  const attack = enemy => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return {attack, damage, getLevel, getName}
};

const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
// jimmie.health -= 1000;
// jimmie.damage(9);

let counterr = function() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    } 
  };

  var counter1 = counterr();
  var counter2 = counterr();
  counter1.increment();

  // console.log(counter1.value())
  // console.log(counter1.value())
  // counterr.increment();
  // counterr.increment();
  // counterr.increment();
  // counterr.decrement();
  // counter1.increment();
  // console.log(counter1);

  function sum(a) {
    return function sum1(b) {
      return function sum2(c) {
        return function sum3(d) {
          return a + b + c + d
        }
      }
    }
  }

  // console.log(sum(1)(1)(1)(4));

  let val = 7;
  function createAdder() {
     function addNumbers(a, b) {
       let ret = a + b
       return ret;
    }
    return addNumbers;
  }

  let adding = createAdder();
  let summ = adding(val, 2);
  console.log(summ)