let numSquares = 6;
let colors = [];
let pickedColor;
let loseMessages = [
    "Come on",
    "Seriously?",
    "Really?",
    "So close"
]

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let resetButton = document.querySelector("#reset");
let modeBtn = document.querySelectorAll(".mode");

init();

function init(){
    //modeBtn eventListener
    setUpMode();
    setUpSquares();
    reset();  
}

function setUpMode(){
    for(i = 0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener("click", function(){
            console.log("click");
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
            reset();
        })
    }
}

function setUpSquares(){
    //for squares
    for( i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            let guessedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(guessedColor === pickedColor){
                messageDisplay.textContent = "You're Brilliant!";
                resetButton.textContent = "Play Again?";
                changeColors(pickedColor);
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = randomNum(loseMessages);
            }
        })
    }

}

function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = randomNum(colors);
    //Change colorDisplay to pickedColor
    colorDisplay.textContent = pickedColor;
    //change colors of squares (text)
    for (i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else{
            squares[i].style.display = "none";
        }
    }
    resetButton.textContent = "New Game";
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    h2.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color){
    //loop thru all squares
    for (i = 0; i < squares.length; i++){
        // change each color to match the given color
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
    h2.style.backgroundColor = color;
}

function randomNum(arr){
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];     
}

function generateRandomColors(num){
    let arr = [];
    for (i = 0; i < num; i++){
        arr.push(randomRGB());
    }
    return arr;
}

function randomRGB(){
    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    return "rgb(" + randomR + ", " + randomG + ", " + randomB +")";
}