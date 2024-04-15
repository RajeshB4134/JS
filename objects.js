// //Nested Objects
// obj1 = {
//     Name : 'TGR',
//     Age : 20,
//     Cars : {
//         car1 : "Ford",
//         car2 : "Ferrari",
//         car3 : "Mustang"
//     },
//     GF_s : {
//         GF_1 : 6,
//         GF_2 : 27,
//         GF_3 : 57,
//     }
// }
// console.log(obj1)
// console.log(typeof obj1)
// for(let i in obj1){
//     console.log(i , " ", obj1[i])
// }
// // converts the keys of an object into an array using Object.keys and simillarly using Object.values int convert all the values into an array
// let array = Object.keys(obj1)
// console.log(array)
// console.log(typeof array)

// // using JSON.stringify() function it converts the obj into string
// let myString = JSON.stringify(obj1)
// console.log(typeof myString)

// //simillarly JSON.stringly() function also works for arrays also
// let array1 = ['Rajesh', 24, null, "Jane"]
// console.log(array1)
// console.log(array1.length)
// console.log(JSON.stringify(array1))
// console.log(typeof array1)

// /*Object Accessors are of two types
// These accessories are just to get and set the properties for the object 
// and they are keywords
// 1) Getters :

// syntax for Getters are like 
// get function_name() {
//     return 
// }
// 2) Setters:


// simillary same for set keyword 
// set function_name(parameter) {
//     return 
// }
// */

// let person = {
//     fName : "Jyosna",
//     lName : "Ram",
//     Age : 20,
//     // fullname : function(){
//     //     return this.fName+" "+this.lName
//     // }
//     // get fullname(){
//     //     return this.fName+" "+this.lName
//     // }
//     set langg(lang){
//         this.language = lang
//     }
// }
// //langg is function name and lang is a parameter for the function name called langg.
// person.langg = "Telugu"
// console.log(person.language)
//Object.defineProperty(object, key, {Property function either get keyword or set keyword}) Methid can also be used to add getters and setters
let object = {
    count : 0,
}
Object.defineProperty(object, "reset", {
    get : function(){
        return this.count = 0
    }
})
Object.defineProperty(object, "increment", {
    get : function(){
        return this.count++
    }
})
Object.defineProperty(object, "decrement", {
    get : function(){
        return this.count--
    }
})
Object.defineProperty(object, "add", {
    set : function(value){
        this.count = this.count + value
    }
})
Object.defineProperty(object, "subtract", {
    set : function(value){
        this.count = this.count - value
    }
})

console.log(object.reset)
console.log(object.add = 4)
console.log(object.subtract = 1)
console.log(object.increment)
console.log(object.decrement)