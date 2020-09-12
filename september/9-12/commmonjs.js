// const palindrome = (word) => {
//   const splitWord = word.split('')
//   const reversedWord = []
//   for (let i = splitWord.length; i >= 0; i--) {
//     reversedWord.push(splitWord[i - 1])
//   }
//   return word === reversedWord.join('') ? true : false
// }

// console.log(palindrome('racecar'))

// const fizzBuzz = (num) => {
//   for (let i = 1; i <= num; i ++) {
//     (i % 3 === 0 && i % 5 === 0) ? console.log('fizzz-buzzzzz') : 
//     (i % 5 === 0) ? console.log('buzzz') : 
//     (i % 3 === 0) ? console.log('fizzz') : 
//     console.log(i)
//     // if (i % 3 === 0 && i % 5 === 0) {
//     //   console.log('fizzz-buzzzzz')
//     // } else if (i % 5 === 0) {
//     //   console.log('buzzz')
//     // } else if (i % 3 === 0) {
//     //   console.log('fizzz')
//     // } else {
//     //   console.log(i)
//     // }
//   }
// }
// console.log(fizzBuzz(30))
// anagram problem

// const objectCreate = str => {
//   createdObject = {};
//   for(let char of str.toLowerCase()) {
//     createdObject[char] = createdObject[char] + 1 || 1
//   }
//   return createdObject
// }

// const anagram = (first, second) => {
//   const firstWord = objectCreate(first)
//   const secondWord = objectCreate(second)
//   if (Object.keys(firstWord).length !== Object.keys(secondWord).length) return false;

//   for (let char in firstWord) {
//     if (firstWord[char] !== secondWord[char]) return false
//   }

//   return true
// }

// console.log(anagram('friend', 'finder'))

const findVowels = (word) => {
  const splitWord = word.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let counter = 0
  for (let i = splitWord.length; i >= 0; i--) {
    if (vowels.includes(splitWord[i])) {
      counter += 1
    }
  }
  return counter
}

console.log(findVowels('helloooo'))