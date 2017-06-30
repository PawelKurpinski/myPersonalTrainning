var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var span1 = document.querySelector("#span1");
var span2 = document.querySelector("#span2");
var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
var gameOver = false;
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    gameOver = true;
    p1Score = 0;
})

p1Button.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === maxScore) {
            span1.classList.add("winner");
            gameOver = true;
        }
        span1.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if (!gameOver){
        p2Score++;
        if (p2Score === maxScore) {
            span2.classList.add("winner");
            gameOver = true;
        }
        span2.textContent = p2Score;
    }


});
