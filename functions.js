const prompt = require("prompt-sync")()

// const sample = (s) =>{
//     while(--a){
//         console.log(a)
//     }
// }

// let a = prompt("Enter your name")
// // console.log(a)
// sample(a)

// let name = "            Harry               "
// console.log(name)
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.trim())
// console.log(name.length)

// let name = "Rajesh"
let number = Number(prompt("Enter the number"))
const func = () =>{
    return Math.round(number)
}
console.log(func())