//sample code 
// for (let x of [1,2,3,4]){
//     console.log(x)
// }//we can use for of loop to iterate over elements in an array

/*Java Script iterators 
we use next() method 
in this next method it has two properties
1) value(the next value)
2) done(true or false)
*/


function nextIterator(array) {
    let count = 0
    return {
        next : function(){
            if(count < array.length){
                return {
                    value : array[count++],
                    done : false
                }
            }
            else{
                return{
                    done : true
                }
            }
        }
    }
}

let array = [1,2,3,4,5]
let numbers = nextIterator(array)
console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)