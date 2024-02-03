const rows = 3;
const columns = 3;
const board = []
const players = {player1:'x', player2:'o'};

// Fetch elements
const divGameBoard = document.querySelector(".gameboard");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const cells = document.querySelectorAll(".cell");

// add some event listeners
cells.forEach((element) => {
    element.addEventListener("click", function () {
        console.log(element.className.split(" ")[1])
        switch (element.className.split(" ")[1]) {
            case '1':
                gameBoard.placeValueInBoard('0', '0', element)
                break;
            case '2':
                gameBoard.placeValueInBoard('0', '1', element)
                break;
            case '3':
                gameBoard.placeValueInBoard('0', '2', element)
                break;
            case '4':
                gameBoard.placeValueInBoard('1', '0', element)
                break;
            case '5':
                gameBoard.placeValueInBoard('1', '1', element)
                break;
            case '6':
                gameBoard.placeValueInBoard('1', '2', element)
                break;
            case '7':
                gameBoard.placeValueInBoard('2', '0', element)
                break;
            case '8':
                gameBoard.placeValueInBoard('2', '1', element)
                break;
            case '9':
                gameBoard.placeValueInBoard('2', '2', element)
                break;
        }
        })
    })

const gameRules = (function () {

    // Check of the player has won
    const checkWinner = (playerToCheck) => {
        if (board[0][0]===playerToCheck && board[0][1]===playerToCheck && board[0][2]===playerToCheck) {
            return `top horizontal win for ${playerToCheck}`;

        } else if (board[1][0]===playerToCheck && board[1][1]===playerToCheck && board[1][2]===playerToCheck ) {
            return `middle horizontal win for ${playerToCheck}`;

        } else if (board[2][0]===playerToCheck && board[2][1]===playerToCheck && board[2][2]===playerToCheck) {
            return `bottom horizontal win for ${playerToCheck}`;

        } else if (board[0][0]===playerToCheck && board[1][0]===playerToCheck && board[2][0]===playerToCheck) {
            return `left vertical win for ${playerToCheck}`;

        } else if (board[0][1]===playerToCheck && board[1][1]===playerToCheck && board[2][1]===playerToCheck) {
            return `middle vertical win for ${playerToCheck}`;
        
        } else if (board[0][2]===playerToCheck && board[1][2]===playerToCheck && board[2][2]===playerToCheck) {
            return `right vertical win for ${playerToCheck}`;

        } else if (board[2][0]===playerToCheck && board[1][1]===playerToCheck && board[0][2]===playerToCheck) {
            return `right diagonal win for ${playerToCheck}`;

        }else if (board[2][2]===playerToCheck && board[1][1]===playerToCheck && board[0][0]===playerToCheck) {
            return `left diagonal win for ${playerToCheck}`;

        } else {
            return 'no winner'
        }
    }

    return {checkWinner}


})()

// Creating a function for initiating the board
const gameBoard = (function () {
    
    // Creating an empty gameboard
    const createGameBoard = () => {
        for (let i=0;i<rows;i++) {
            let tempArray = [];
            for (let x=0;x<columns;x++){
                tempArray.push(x);
            }
            board.push(fillBoard(tempArray));
        };
    }
    
    // Fills the board with empty values, initation
    const fillBoard = (number) => {
        let objectTemp = {};
        number.forEach((element) => 
            Object.assign(objectTemp, {[element]:""})
        );

        // changes the cells in the game
        cells.forEach((square) => { 
            square.textContent = ""
        });

        return objectTemp;
    };

    // value for checking player turn
    let playerTurn = '';
    // check and change player value
    const changePlayer = () => {

        console.log(playerTurn)
        if (playerTurn === '') {
            playerTurn = players.player1
        } else if (playerTurn === players.player1) {
            playerTurn = players.player2;
        } else {
            playerTurn = players.player1;
        }
        console.log(playerTurn);
        return playerTurn;
    }

    // Place value in board
    const placeValueInBoard = (x, y, value) => {
        // Start by checking if the value has already been filled
        if (board[x][y] === '') {
            // Place is empty can can be used
            board[x][y] = changePlayer();
            console.log(board[x][y]);
            value.textContent = board[x][y];
            let checkIfWin = gameRules.checkWinner(board[x][y])
            console.log(checkIfWin)

            if (checkIfWin === 'no winner') {

            } else {
                header.textContent = checkIfWin;
                gameBoard.createGameBoard()
            }

            return true;
        } else {
            console.log("Cannot")
            return false;
        }
    }

board[0]
    return {createGameBoard, changePlayer, placeValueInBoard}
})()

// IIMF funciton for game rules




gameBoard.createGameBoard()