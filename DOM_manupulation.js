// var a = document.querySelector("h1")//i.selecton of an element
// a.innerHTML = "Hare Krishna!"//ii.changing HTML
// a.style.color = "red"IIRFilterNode.changing CSS
// a.style.backgroundColor = "Black"
// a.addEventListener("click",function(){ //iv.EventListner
//     a.innerHTML = "Hari Hari Bol!"
//     a.style.color = "yellow"
//     a.style.backgroundColor = "red"
// })
// console.log(a)

// simple bulb eg.

var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

var flag = 0
btn.addEventListener("click",function(){
   if(flag == 0){
    bulb.style.backgroundColor = "yellow"
    flag = 1
   }
   else{
    bulb.style.backgroundColor = "transparent"
    flag = 0
   }
})