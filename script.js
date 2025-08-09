alert("Hello")
setTimeout(function(){alert("I am inside of settimeout")}, 2000)
let a= setTimeout(function(){document.writeln("I am inside of settimeout")}, 5000)
let b = prompt("Do you want to run the settimeout")
if("n"==b){
clearTimeout
}
clearTimeout(a)
console.log(a)
const sum = (a,b,c)=> {
    console.log("yes I am running"+(a+b+c))
    a+b+c
}
setTimeout(sum,1000,1,2,7)
setInterval(function(){
    alert("setinterval")
},3000);
