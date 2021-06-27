$(document).ready(function(){
    
});
var email = "reyna@gmail.com";
var pass = "123";
$("#login").click(function(){
    let correo = $("#correo").val();
    let password =$("#password").val();
    if(email===correo && pass ===password){
        sessionStorage.setItem("correo",correo);
        //window.location = "view/main.html";
        $.post("lc", {"correo":correo},function (data) {
            alert(data);
        });
    }else{
        alert("sasa");
        window.location = "login.html";
    }

});


