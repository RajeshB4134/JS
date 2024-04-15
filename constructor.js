function person(first, last, age, eye){
    this.firstName = first
    this.lastName = last
    this.age = age
    this.eyecolor = eye
    // this.setNationality = function(name){
    //     this.Nationality = name
    // }
}

// let Father = new person("Murthy", "Bandaru", 45, "Black")
// let Mother = new person("Revathi", "Bandaru", 36, "Black")

// console.log(Mother.firstName)
// Father.setNationality("English")
// console.log(Father.Nationality)


//Object Prototypes
person.prototype.nationality = "English"
//or

person.prototype.name = function() {
    return this.firstName+" "+this.lastName
}

let Student = new person("Rajesh", "Bandaru", 20, "Black")
console.log(Student.nationality)
console.log(Student.name())
