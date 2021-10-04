10 == 15 //igualdade - false
10!= 15 //desigualdade

//comparação estrita
10 === "10" //igualdade estrita - false
10!==15 //desigualdade - true


//negação 
! (true)

// Mesa de trabalho

console.log (!true)
console.log (!false)
console.log (!!false)
console.log (!!true)
console.log(!1);
console.log(!!1);
console.log(!0);
console.log (!!0)
console.log(!!"");

let x=5;
let y=9;
    console.log(x<10 && x!==5)
    console.log(x>9 || x===5)
    console.log(!(x===y))

    // Segunda parte


    x=10
    y ="a"
    console.log(y==="b" || x >= 10) //true
    
    
    x=3
    y=8
    console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y)) //false
    
//!== diferentico
    
    let str = ""
    let msg = "haha!"
    let eBonito = "false"
    console.log(!((str || msg) && eBonito)) //false
    