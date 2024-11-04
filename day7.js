//DOM(Data Object Model)--> website ko naksaa
// var h1 = document.getElementsByTagName('h1')[0]
// h1.textContent = "Hare Krishna"
// // console.log(h1)
document.body.innerHTML = "<div id='test'>Hello, World!</div>";
const element =
document.getElementById('test');
console.log(element.textContent);