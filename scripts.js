let expression = "";
let value = "";

//1-9//

document.getElementById("b1").addEventListener("click", function() {
    expression += "1";
    console.log(expression);
})

document.getElementById("b2").addEventListener("click", function() {
    expression += "2";
    console.log(expression)
})

document.getElementById("b3").addEventListener("click", function() {
    expression += "3";
    console.log(expression)
})

document.getElementById("b4").addEventListener("click", function() {
    expression += "4";
    console.log(expression)
})

document.getElementById("b5").addEventListener("click", function() {
    expression += "5";
    console.log(expression)
})

document.getElementById("b6").addEventListener("click", function() {
    expression += "6";
    console.log(expression)
})

document.getElementById("b7").addEventListener("click", function() {
    expression += "8";
    console.log(expression)
})

document.getElementById("b9").addEventListener("click", function() {
    expression += "9";
    console.log(expression)
})

//clear//

document.getElementById("bac").addEventListener("click", function() {
    expression = "";
    console.log(expression)
})

// + - x / //

document.getElementById("b+").addEventListener("click", function() {
    expression += "+";
    console.log(expression)
})

document.getElementById("b-").addEventListener("click", function() {
    expression += "-";
    console.log(expression)
})

document.getElementById("b÷").addEventListener("click", function() {
    expression += "/";
    console.log(expression)
})

document.getElementById("bx").addEventListener("click", function() {
    expression += "*";
    console.log(expression)
})

document.getElementById("b^2").addEventListener("click", function() {
    expression += "^2";
    console.log(expression)
})


// = //