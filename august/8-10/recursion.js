// note: recursion is when a function calls itself until it doesn't
// make an array of objects to be recursivelly looped through
const categories = [
  {id: 'animals', 'parent': null},
  {id: 'mammals', 'parent': 'animals'},
  {id: 'cats', 'parent': 'mammals'},
  {id: 'dogs', 'parent': 'mammals'},
  {id: 'chihuahua', 'parent': 'dogs'},
  {id: 'labrador', 'parent': 'dogs'},
  {id: 'parsian', 'parent': 'cats'},
  {id: 'siamese', 'parent': 'cats'},
]

// make the recursive function, takes categories and parent as a parameter
const makeTree = (categories, parent) => {
  // make an empty object called node for storage
  let node = {}
  console.log('node:', node)
  // take the  categories and filter the object where parent equals null (accorfing to what we passed in during the console log )
  categories
  .filter(c => c.parent === parent)
  .forEach(c => node[c.id] = makeTree(categories, c.id))
  // forEach category id we're going to call MakeTree again(recursion) for each using the categories and each looped id as parameters
  
  // return the node
  return node

}

console.log(
  JSON.stringify(
    makeTree(categories, null),
    null, 2)
  );

  /*
  categories [
    {
      "animals": {
        "mammals": {
          "cats": {
            "persian": {},
            "siamese": {}
          },
          "dogs": {
            "chihuahua": {},
            "labrador": {}
          }
        }
      }
    }
  ]



  */