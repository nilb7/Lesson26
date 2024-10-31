var input = document.getElementById("input_id")
var button = document.getElementById("btn_id")
var text = document.getElementById("texti_id")

button.onclick = function(){
    text.innerHTML = input.value;
}

var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var answer = document.querySelector("#answer");
var btn_shuma = document.querySelector("#bt_shuma");

btn_shuma.addEventListener("click", function(){
    answer.innerHTML = input1.value+input2.value;
})