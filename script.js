// var można dodać jako 1 ciąg, na początku słowo var później poszczególne zmienne oddzielane przecinkami
// np.
// var a = '',
//     b = {};
var computer = {
    name: 'computer',
    score: 0,
    pick: ''
    },
    player = {
    name: '',
    score: 0,
    pick: ''
    },
    round = 0,
    buttons = document.getElementsByClassName("pick-button"),
    displayBlocks = {
    playerName: document.getElementById('playerName'),
    computerPickBlock: document.getElementById('computerPick'),
    playerPickBlock: document.getElementById('playerPick'),
    gameResultBlock: document.getElementById('gameResult'),
    playerScoreBlock: document.getElementById('playerScore'),
    computerScoreBlock: document.getElementById('computerScore')
    };

function newGame() {

    //Reset
    computer.score = 0;
    computer.pick = "";
    player.score = 0;
    player.pick = "";
    round = 0;
    player.name = prompt("Jak się nazywasz?", "Jan Kowalski");

    displayBlocks.playerName.innerHTML = player.name;
    

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.visibility = 'visible';
    }
}

function playerPick(pick) {
    player.pick = pick; //Save player's pick
    computerPick(); //choose computer's pick
    checkResult(); //check result
}

function computerPick() {
    //random number between 0 and 3
    switch (Math.floor(Math.random()*3)) {
        case 0:
            computer.pick = "rock";
        break;
        case 1:
            computer.pick = "paper";
        break;
        case 2:
            computer.pick = "scissors";
        break;
    }
}

function checkResult() {
    //Check if there is a tie
    var gameResult;
    if (player.pick === computer.pick) {
        gameResult = "tie!";
    }
    else if (player.pick === "rock") {
    //if player chooses rock
        if (computer.pick === "scissors") {
            player.score++;
            gameResult = "Player wins!";
        }
        else if (computer.pick === "paper") {
            computer.score++;
            gameResult = "Computer wins!";
        }
    }
    else if (player.pick === "paper") {
    //if player chooses paper
        if (computer.pick === "rock") {
            player.score++;
            gameResult = "Player wins!";
        }
        else if (computer.pick === "scissors") {
            computer.score++;
            gameResult = "Computer wins!";
        }
    }
    else if (player.pick === "scissors") {
    //if player chooses scissors
        if (computer.pick === "paper") {
            player.score++;
            gameResult = "Player wins!";
        }
        else if (computer.pick === "rock") {
            computer.score++;
            gameResult = "Computer wins!";
        }

    }
    displayBlocks.computerPickBlock.innerHTML = computer.pick;
    displayBlocks.playerPickBlock.innerHTML = player.pick;
    displayBlocks.gameResultBlock.innerHTML = gameResult;
    displayBlocks.playerScoreBlock.innerHTML = player.score;
    displayBlocks.computerScoreBlock.innerHTML = computer.score;

    if ((player.score >= 10) || (computer.score >= 10)) {
    //log the result
        if (player.score > computer.score) {
            document.getElementById("roundResult").innerHTML = "player wins the game!";
        } else {
            document.getElementById("roundResult").innerHTML = "computer wins the game!";
        }

        //hide buttons

        for(var i=0; i < buttons.length; i++) {
            buttons[i].style.visibility = 'hidden';
        }
    }
}
