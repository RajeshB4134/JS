// let arr = [45, 23, 21]
// //array map method 
// let a = arr.map((value) =>{
//     console.log(value)
//     return value + 1
// })
// console.log(a)// as same as for loop jaisey


// let b = arr.map((value, index, array) => {
//     console.log(value, index, array)
//     return value + 1
// })
// console.log(b)

//array filter method
let arr2 = [43, 23, 21, 0, 3, 5]
let c = arr2.filter((a) => {
    return a<10
})
console.log(c)

//reduce method

let arr3 = [1, 2, 4, 5, 1, 2]
let newarr3 = arr3.reduce((h1, h2) => {
    return h1 + h2
})
console.log(newarr3)