const prompt = require("prompt-sync")()
const lengthh = (obj) => {
    let count = 0
    for(let i in obj){
        count++
    }
    return count
}
let obj = {
    Name : "Rajesh",
    Age : 20,
    Sex : "Male"
}
console.log(obj)
console.log(lengthh(obj))
// let ans = ""
// for( let i in obj){
//     ans = ans + " " + obj[i]
// }
// console.log(ans)
obj.Nationality = "English"
console.log(obj)
console.log(lengthh(obj))
delete obj.Sex
console.log(obj)
console.log(lengthh(obj))