var numSquares = 6;
var colors = [];
var pickedColor;
var header = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init()

function init(){
    setupModeButtons();
    setupSquares();
    reset();
};

function setupModeButtons(){
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset()
        });
    };
};

function setupSquares(){
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"; 
                changeColors(clickedColor);
                header.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                messageDisplay.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }
        });
    };
};

function reset(){
    resetButton.textContent = "New Colors";
    header.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    };
}

resetButton.addEventListener("click", function(){
    reset();
});

 //assigns a color to each square upon page load
 function changeColors(color) {
     for (var i = 0; i < squares.length; i++) {
       squares[i].style.backgroundColor = color;
     }
 }

//assigns a random color to each of the squares
function generateRandomColors(num) {
    var arr = []
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}

//generate a random RGB value to be used by generateRandomColors
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

//picks a random color to be the "correct" color
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//controls the user clicking which color they think is correct




