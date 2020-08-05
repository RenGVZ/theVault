// let newObj = new Object ();

// function Animal(name) {
//   this.name = name;
// }

// let dog = new Animal('Greg');

function Plant () {
  this.country = 'Mexico',
  this.isOrganic = true
}

// add showNameAndColor method to Plant prototype
Plant.prototype.showNameAndColor = function() {
  return `I am ${this.name} and my color is ${this.color}`;
}

let newPlant = new Plant();
// newPlant.name = "Marsha"
// newPlant.color = 'red';

Plant.prototype.organic = function() {
  if (this.isOrganic) {
    return "I'm organic baby!"
  }
}

function Fruit(fruitName, fruitColor) {
  this.name = fruitName,
  this.color = fruitColor
}

Fruit.prototype = new Plant();

let newFruit = new Fruit('cherry', 'red');

// only loops over newFruit's own keys
// console.log(Object.keys(newFruit));

// for in loope to loop over prototype keys as well
for (let keys in newFruit) {
  console.log(keys)
}