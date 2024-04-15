// async function getdata(){
//     //Simulate getting data from server
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Harry")
//         }, 3500)
//     })
// }

//Settle means resolve or reject
//Resolve means promise has setteled successfully
//Reject means promise has not setteled succesfully

async function getdata(){
    //Simulate getting data from server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data =  await x.json()
    // console.log(data)
    return data
}

async function main() {
    console.log("Start Something")
    console.log("Do Something")
    console.log("Load Data")
    let data = await getdata()
    console.log(data)
    console.log("Process Data")
    console.log("Task2")
}

main()

// data.then((v)=>{
    
//     console.log(data)
    
//     console.log("Process data")
    
//     console.log("task2")
// })

