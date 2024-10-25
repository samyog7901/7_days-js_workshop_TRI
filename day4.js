//conditional statements
// var isRaining = true
// if(isRaining){
//     console.log("Carry umbrella")
// }
// else{
//     console.log("Don't carry umbrella")
// }

// //ternary operator 
// isRaining ? console.log("Carry umbrella") :  console.log("Don't carry umbrella")

// short-circuit
// var isRaining = false
// var isRaining = true
// isRaining && console.log("carry umbrela")


//if-else-if
// var tempr = 31
// if(tempr > 30){
//     console.log("its hot outside")
// }
// else if(tempr > 20){
//     console.log("its moderate outside")
// }
// else{
//     console.log("its cold outside")
// }

//loop in js
/*
for
for of 
for in
*/

var days = ['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday']
//for loop-->for everything
// for(var i = 0;i < days.length;i++){
//     console.log(days[i])
// }

//for of loop(specialized for only arrays)
for(let day of days){
    console.log(day)
}

//for in-->loop for object only

// let result = 0
// for(let i = 1;i <=3;i++){
//     result += i
// }
// console.log(result)