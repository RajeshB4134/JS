// console.log("log")
// console.warn("warn")
// console.info("info")
// console.error("error")
// console.assert("error"!= false)
// console.assert("error" == false)


// console.time("forloop")
// for (let i=0; i<5; i++){
//     console.log(233)
// }
// console.timeEnd("forloop")

// console.time("WhileLoop")
// let i = 0
// while(i<5){
//     console.log(233)
//     i++
// }
// console.timeEnd("WhileLoop")

// alert ("Hello Your script works!")
// let a = Number(prompt("Enter vallue of"))

// alert("You entered a of type: "+ (typeof a))

// let number = confirm("Do you want to confirm the value you entered")
// if(number){
//     document.write(a)
// }
// else{
//     document.write("Enter the valid number")
// }

/*
*/
const prompt= require("prompt-sync")()
//1)
function canDrive(age){
    age>=18?true:false
}
let age = Number(prompt("Enter the age of driver"))
if(canDrive(age)){
    alert("He can drive")
}
else{
    alert("He cannot drive car")
}
//2)