var button = document.getElementById("btn_id")
var input = document.getElementById("input_id")
var text = document.getElementById("text_id")

button.onclick = function(){
    text.innerHTML = input.value;
}

var number1 = document.getElementById("number1")
var number2 = document.getElementById("number2")
var button2 = document.getElementById("btn2_id")
var equal = document.getElementById("equal_id")




button2.onclick = function(){
    equal.innerHTML = parseInt(number1.value) + parseInt(number2.value)
}

var buttonperage = document.getElementById("btn3age")
var age = document.getElementById("age_id")
var result = document.getElementById("textage")



buttonperage.onclick = function(){
    if (parseInt(age.value) >= 18){
        result.innerHTML = 'You can vote';
    }
    else{
         result.innerHTML = 'You cant vote';
    }
}