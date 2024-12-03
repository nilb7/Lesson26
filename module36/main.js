


$("li").click(function(){
    alert("This was clicked");
});
    

$("#btn1").click(function(){
    $("#h1").text("Anik dhe bled")
    $("#h1").append(" dhe EDEN")
})

$("#btn2").on("click",function(){
    console.log('This is  heading')
})

$("#div1").click(function(){
    $(this).addClass("clicked");
}).find("span").attr("title", "this is a changed title");

