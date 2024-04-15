// class car {
//     constructor(name, age){
//         this.name = name 
//         this.age = age
//     }
//     calculateAge(){
//         let date = new Date()
//         console.log(date)
//         return date.getFullYear() - this.age
//     }
// }
// let myCar = new car("Supra", 1974)
// console.log(myCar.calculateAge())

//Class Inheritance is done by using extends keyword

// class Father {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     present(){
//         return "Hi My name is "+ this.name +" and my age is about"+ this.age
//     }
// }
// class Son extends Father{
//     constructor(name, age, property){
//         super(name, age)
//         this.property = property
//     }
//     display(){
//         return " "+this.present() + "and I have my property about "+ this.property
//     }
// }
// let grandSon = new Son("Rajesh", 20, "90Flats")
// console.log(grandSon.display())

class car {
    constructor(brand){
        this.brand = brand
    }
    get(){
        return this.brand
    }
    set(value){
        this.brand = value
    }
    static sayHello(){
        return "Hello World!"
    }
}
// let myCar = new car("Ford")
// console.log(myCar.get())
// myCar.set("Mustang")
// console.log(myCar.get())
console.log(car.sayHello())