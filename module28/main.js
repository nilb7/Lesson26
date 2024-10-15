var button1 = document.getElementById("btn1")
var button2 = document.getElementById("btn2")
var button3 = document.getElementById("btn3")
var button4 = document.getElementById("btn4")
var ds_text = document.getElementById("txt1")

button1.onclick = function(){
    ds_text.style.color='blue';
    ds_text.style.textAlign='center';
    ds_text.style.fontSize='50px';

}

button2.onmouseover = function(){
    alert('button 2 was hovered')
}

button3.onmouseleave = function(){
    alert('button 3 was left')
}

button4.onwheel = function(){
    ds_text.style.cssText= "color: red; text-align: right; font-size:100px; background-color: lightblue;"
}


