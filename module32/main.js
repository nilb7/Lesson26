var input = document.getElementById("input_id")
var button = document.getElementById("btn_id")
var text = document.getElementById("texti_id")

button.onclick = function(){
    text.innerHTML = input.value;
}