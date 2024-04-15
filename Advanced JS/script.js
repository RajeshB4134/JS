async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(45)
        }, 1000);
    })
}


function sum (a, b, c){
    return a+b+c
}
(async function main(){
    //IIFE(Imediatly invoked Function Expression)
    // let a = await sleep();
    // let b = await sleep();
    
    // let [x, y] = [1, 7]
    // console.log(x, y);
    
    // let [a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8]
    // console.log(a, b, rest);//Destructioring
    
    let obj = {
        a: 1,
        b: 2,
        c: 3
    }

    let {a, b} = obj
    console.log(a, b)

    let arr = [1, 4, 6]
    console.log(arr[0]+arr[1]+arr[2])
    console.log(sum(...arr))//Spread operator

})();


