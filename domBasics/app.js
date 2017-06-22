var body = document.querySelector("body");
var isBlue = false;

setInterval(function(){
    if (isBlue){
        body.style.background = "powderblue";
    } else {
        body.style.background = "red";
    }isBlue = !isBlue;
}, 1000);
