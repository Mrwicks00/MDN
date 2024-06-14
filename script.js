let inputNum = document.getElementById("inputNum");
let randomNumber = Math.floor(Math.random()* 100) + 1;
const guessButton = document.querySelector(".guessButton");
const preGuess = document.querySelector(".preGuess");
const guessResult = document.querySelector('.guessResult');
const lastGuess = document.querySelector('.lastGuess');
let guessCount = 1;
let resetButton

function checkGuess() {
    let userGuess = Number(inputNum.value)
    if (guessCount === 1) {
        preGuess.textContent = "Previous Guesses: "
        }
    preGuess.textContent += ` ${userGuess}`

    if (userGuess === randomNumber) {
        guessResult.textContent = "OMG! You kill it!";
        guessResult.textContent = "I am sorry baby for how I acted in the morning, ma binu simi Oko Mhi!";
        guessResult.style.backgroundColor = "green";
        gameOver()
    }else if (guessCount === 10) {
        guessResult.textContent = "!!! GAME OVER !!!"
        guessResult.style.backgroundColor = "red";
        gameOver()
    } else {
        guessResult.textContent = "WRONG!"
        guessResult.style.backgroundColor = "red";
        if (userGuess > randomNumber) {
            lastGuess.textContent = "The number you guess is high, bring it down baby!"
        }else if (userGuess < randomNumber) {
            lastGuess.textContent = "The number you guess is low, raise am raise am"
        }
    }

    guessCount++;
    inputNum.value = "";

}

function gameOver() {
    guessButton.disabled = true;
    inputNum.disabled = true;
    resetButton = document.createElement("button")
    resetButton.textContent = "Start a new game"
    document.querySelector(".guess").appendChild(resetButton);
    resetButton.addEventListener("click", resetGame)
}

function resetGame() {
    guessCount = 1;
    resetButton.remove()
    const resetParams = document.querySelectorAll(".resetParams p")
    for (let resetParam of resetParams){
        resetParam.textContent = ""
    }

    
 
    guessButton.disabled = false;
    inputNum.disabled = false;
    inputNum.value = ""
    inputNum.focus()
    // resetButton.style.display = 'none'

    randomNumber = Math.floor(Math.random()* 100) + 1;
}

guessButton.addEventListener("click", checkGuess)