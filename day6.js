
// Higher order function-->function which takes function as parameter(forEach,map,filter,reduce)-->only for arrays

// function sayHello(abc){
// console.log('I am ' + abc )
// }
// sayHello(function abc(){
    
// }) //where sayHello is a HOF and abc is a callback function

// foreach --> arrayset lai loop garne 
var days = ['sunday','monday','tuesday','wednesday']
days.forEach(function(day){
    console.log(day)
})

var nums = [1,2,3,4,5]
var squareOfNums = []

nums.forEach(function(num){
 squareOfNums.push(num * num)
})
console.log(nums)
console.log(squareOfNums)

// map-->yesma return garne capability pani xa

var nums = [1,2,3,4,5]
var squareOfNums = nums.map(function(num){
    return num * num;
 }) //jhataro handaixa map le ra array ma basiraxa -->1*1 = 1 --> [1,4,9,...]

 console.log(squareOfNums)
// task
 var nums = [1,2,3]

 var output = nums.map(function(num){
    return {
        text : "PNC College",
        num : num
    }
 })
 console.log(output)

//  or
 var nums = [1, 2, 3];

 var result = nums.map(num => ({
  text: "pnc college",
  num: num
}))

console.log(result)


// filter -->data filter garera lyaune

var nums = [1,2,3,4,5,6,7,8,9,10]
var evenNums = nums.filter(function(num){
    return num % 2 == 0
})
console.log(evenNums)

// task
// var foods = [
//     {
//         Name : "Khir",
//         price : 150,
//         qty : 2
//     },
//     {
//         Name : "Kurauni",
//         price : 120,
//         qty : 4
//     }
// ]
// var output = foods.filter(function(food){
//     return food.price == 150
// })
// console.log(output)

//task4
// var students = [
//     {
//         Name : "Anish",
//         status : 'pass'
//     },
//     {
//         Name : "Ram",
//        status : 'pass'
//     },
//     {
//         Name : "Manish",
//        status : 'pass'
//     }
// ]
// var output = students.filter(function(student){
//     return student.status === 'pass' && student.Name.
//     endsWith('sh')
// })
// console.log(output)

// reduce--> for doing mathematical calculation in Array

var nums = [1,2,3,4,5]
var sum = nums.reduce(function(accumulator,num){
    return num + accumulator
},0)
console.log(sum)

//task5 flipkart example
var cart = [
    {
        Name : "Watch",
        price : 18999,
        qty : 1
    },
    {
        Name : "Gamepad",
        price : 1479,
        qty : 2
    }
]
var output = cart.reduce(function(accumulator,item){
    accumulator.totalAmount = item.price * item.qty + accumulator.totalAmount
    accumulator.totalQty = item.qty + accumulator.totalQty
    return accumulator
},{totalAmount:0,totalQty:0})
console.log(output)
