//Variables:
//A variable is container the stores a  value.
// {
//     let a = 10//integer
//     var b = "Rajesh"//String
//     const c = true//boolean
//     console.log(c)
// }//Block

//Var is Globally scoped where as let and const are block scoped
//Var can be updated & redeclared within the block
//Where as let can updated but not redeclared
//const can neither updated nor redeclared
// let object = {
//     Name : "Rajesh",
//     Age : 20,
//     College: "SAHE",
//     Branch : "Information Technology"//Objects can be stored in the form of key: "Value" Pairs or in the form of json format
// }
// console.log(object)
// object.forEach(element => {
//     console.log(object[element])
// });

// function main(){
//     var string = "number"
//     let number = 1
//     console.log(typeof(string))
//     return string+number
// }
// let heman = main()
// console.log(heman)

// const object1 = {
//     name : "Kushal",
//     alias : "Panda",
//     age : 20
// }
// console.log(object1)

/*Conditional Statements in JavaScript
1. If Statement
2. if else Statement
if ...else if... else statement*/
// let a = Math.random()
// if (a<0.1) {
//     console.log(a)
//     alert("Kushal is Gay")
// } else {
//     console.log(a)
//     alert("Also Kushal is Gay")
// }

//Ternary Operator
// (a<0.1)? 'console.log("Hello String")' : 'onsole.log("Bye String")'

// function main(){
//     let object = {
//         harry: 98,
//         rohan: 70,
//         aakash: 9
//     }
//     for (keys in object){
//         console.log(object[keys])
//     }
// }
// main()

// function isNumber(number){
//     return typeof(number) == 'number'
// }
// function tryAgain(){
//     let number = prompt("Enter a Valid number");
//     if(isNaN(number||number == null)){
//         tryAgain();
//     }
//     else{
//         console.log(number);
//         console.log("You Entered a Valid number")
//     }
// }

// tryAgain()

// function strings(){
//     let name = "Harry"
//     let name1 = `harry`//Template Literals
//     let name2 = 'harrY'
//     console.log(name, name1, name2)
//     console.log(`His name is ${name1}`)//Template Literals
// }
// strings()

/*Some methods in String 
they are : 
1. name.length
2. name.toUpperCase()
3. name.toLowerCase()
4. name.slice(2, 4) where it defines that slice from 2 to 4 where 4 is not included
5. name.slice(2) states that slice from 2 to end*/

// function string(){
//     function reverse(name){
//         return name.split("").reverse().join("")
//     }
//     let name = "Code With Harry"
//     console.log(name.slice(2))
//     console.log(name.toUpperCase())
//     console.log(name.toLowerCase())
//     console.log(name.length)
//     console.log(reverse(name.toUpperCase()))
// }
// string()

//DOM's(Document Object Model)
//BOM)Browser Object Model

/*Interactions: alert, prompt, confirm
 */

/* Searching of DOM's 
    document.getElementById()
    document.querySeletorAll()
    document.quertSelector()
    document.getElementByTagName()
    document.getElementByClassName()
    document.getElementByName()
*/

/*Attributes Methods
1. element.getAttributes
2. element.getAttribute(name)=> Method to get the value of an attribute
3. element.setAttribute(name, value)=> Method to set the values of an attribute
4. element.removeAttribute(name) => Method to remove attribute
5. element.hasAttribute(name) => Method to check weather the attribute exists or not
*/

/*Insertion Methods 
1. node.append(e)
2, node.prepend(e)
3, node.before(e)
4. node.after(e)
5. node.replaceWith(e)
*/

// let navbar = document.querySelector("nav");
// let target = navbar.querySelector("li");
// target.style.color = "red";

// //Inserting an element using DOM
// let div = document.createElement("div");
// div.className = "helloWorld";
// div.innerHTML = "<span>Code with harry</span>";
// document.body.append(div);

// div.insertAdjacentHTML("beforebegin", "<p>Hello World</p>");
// div.insertAdjacentHTML("afterend", "<p>Bye Harry</p>");

// div.remove(); //remove a node

/* SetTimeOut and SetInterval

setTimeOut syntax: 
    let timeId = setTimeout(function, <delay>, <arg1>, <arg2>)
    where as delay is in milliseconds
    and timeid return a timeid

    and clearTimeout is used to cancel the execution(incase we cahnge our mind)

*/

// let timeId = setTimeout(()=>{
//     alert("Hello Harry")
// }, 1000)
// // timeId()
// clearTimeout(timeId)

// function Drive() {
//   let userAge = Number(prompt("Enter your age:"));
//   if (userAge > 18) {
//     alert("Yes you can Drive!");
//   } else {
//     console.error(userAge)
//     alert("You cannot drive!");
//   }
//   confirm("Do you want to see the prompt again?")
// }

// Drive()


// let number = Number(prompt("Enter a number"))
// if(number>4){
//     window.location.href = "https://www.google.com/"
// }
// else{
//     window.location.href = "http://127.0.0.1:3000/index.html"
// }



// let colorObject = {
//     1: "red",
//     2: "green",
//     3: "blue",
//     4: "yellow",
//     5: "black"
// }
// let userInput = Number(prompt("Enter a number"))
// let body = document.querySelector("body")
// if (userInput <= Object.keys(colorObject).length) {
//     body.style.backgroundColor = colorObject[userInput]
// } else {
//     const div = document.createElement("div")
//     const h1 = document.createElement("h1")
//     h1.innerText = "Hello World!"
//     div.appendChild(h1)
//     document.appendChild(div)
// }
// console.dir()



let body = document.querySelector("body")
body.onclick = ()=>{
    alert("Hello World!")
}