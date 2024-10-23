var days = ['Sunday', 'Monday', 'Tuesday', 'wednesday']
console.log(days[3])
console.log(days[0])

days.push('Ram');//method
console.log(days)
// days.length //property
console.log(days.length)
// push()//function

var numbers = [1,2,3,4,5]

// slice
var newNumbers = numbers.slice(2,5)
console.log(newNumbers)
console.log(numbers)//no change in original


console.log(numbers.splice(3,1,99))
// console.log(numbers)//change in original

//CW1
// var data = [1,2,3,4,5,6]
// data.splice(1,3,"hello","bye","world")
// console.log(data)
//CW2
// var ram = ['s','a','m','y','o','g']
//     ram.splice(0,6,19,1,13,25,15,7)
//     console.log(ram)
//split
// var text = "RAm,sita,laxman"
// var splicetext = text.split(" ")
// console.log(text)

//object
var me = {
    name : "samyog",
    age : 21,
    fac : "BCA"
};

console.log(me)
me.location = "khotang"
console.log(me)