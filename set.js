const propmt = require("prompt-sync")()
// //An array as a set
// const numbers = new Set([1,2,3,4])
// console.log(numbers)

// //creating an empty set and adding elements into a set
// const letters = new Set()
// letters.add("a")
// letters.add("b")
// letters.add("c")

// console.log(letters)
// console.log(letters.size)//size is a property of set not a method 

// // we can add variables into a set
// let a = 'x'
// let b = 'y'
// let c = 'z'

// let newSet = new Set()
// newSet.add(a)
// newSet.add(b)
// newSet.add(c)
// console.log(newSet)
// console.log(newSet.size)

//we can iterate over an array using forEach() method 

let letters = new Set(['a', 'b', 'c', 'd'])
let txt = ""
letters.forEach(function(value) {
    txt = txt + value +" "
})
console.log(txt)
console.log(typeof letters)//sets are objects

console.log(letters instanceof Set)