// var datas = {
//     name : "samyog khadka",
//     age : 21,
//     location : "Khotang"
// }


// //for in
// for(let key in datas){
//     console.log(key)
// }

//function
//i.Regular function ii.Arrow function

// Regular function
function sayHello(name) {  //dynamic-->using params and args
    console.log("Hello I am " + name)
}
sayHello('Ram.')//function call
sayHello('Kanha.')
// where name is parameter
// and Ram. and Kanha. are arguments

function Add(n1,n2){
    console.log(n1 + n2)
}

Add(5,7)

// arrow function
var sayHello = (name)=>{
    console.log("Hello I am " + name)
}
sayHello('Ram.')//function call
sayHello('Kanha.')

var Add = (n1,n2=3)=> console.log(n1+n2)

Add(5)


// task

// var Ramayan = ['Ram','Sita','Laxman']
// var Mahavarat = ['Kanha','Radha', 'Balram']

// function loopName(){
// for(let charact of Ramayan){
//     console.log(charact)
// }
// }
// loopName()



// function loopName2(){
//     for(let charact of Mahavarat){
//         console.log(charact)
//     }
//     }
//     loopName2()

function greet(name) {
    return 'Hello, $name!';
}
console.log(greet('TRI'));