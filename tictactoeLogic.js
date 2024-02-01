// Initiating the constant game variables
const rows = 3;
const columns = 3;
const board = [];
const players = {player1:'x', player2:'o'};  


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
    const placeValueInBoard = (x, y) => {
        // Start by checking if the value has already been filled
        if (board[x][y] === '') {
            // Place is empty can can be used
            board[x][y] = changePlayer();
            console.log(board[x][y]);

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


const gameRules = (function () {

    // Check of the player has won
    const checkWinner = (playerToCheck) => {
        if (board[0][0]===playerToCheck && board[0][1]===playerToCheck && board[0][2]===playerToCheck) {
            console.log(`top horizontal win for ${playerToCheck}` );
            return true

        } else if (board[1][0]===playerToCheck && board[1][1]===playerToCheck && board[1][2]===playerToCheck ) {
            console.log(`middle horizontal win for ${playerToCheck}` );
            return true

        } else if (board[2][0]===playerToCheck && board[2][1]===playerToCheck && board[2][2]===playerToCheck) {
            console.log(`bottom horizontal win for ${playerToCheck}`);
            return true

        } else if (board[0][0]===playerToCheck && board[1][0]===playerToCheck && board[2][0]===playerToCheck) {
            console.log(`left vertical win for ${playerToCheck}`);
            return true

        } else if (board[0][1]===playerToCheck && board[1][1]===playerToCheck && board[2][1]===playerToCheck) {
            console.log(`middle vertical win for ${playerToCheck}`);
            return true
        
        } else if (board[0][2]===playerToCheck && board[1][2]===playerToCheck && board[2][2]===playerToCheck) {
            console.log(`right vertical win for ${playerToCheck}`);
            return true

        } else if (board[2][0]===playerToCheck && board[1][1]===playerToCheck && board[0][2]===playerToCheck) {
            console.log(`right diagonal win for ${playerToCheck}`);
            return true

        }else if (board[2][2]===playerToCheck && board[1][1]===playerToCheck && board[0][0]===playerToCheck) {
            console.log(`left diagonal win for ${playerToCheck}`);
            return true

        } else {
            return false
        }
    }

    return {checkWinner}


})()


const gameLogic = (function () {

    console.log(`Player 1 start`);
    
    const requestInput = () => {
        let userInputColumn;
        let userInputRow;

        do {
            userInputRow = prompt('Please enter the row number (0, 1, 2): ');
        } while (!['0','1','2'].includes(userInputRow));
        
        do {
            userInputColumn = prompt('Please enter the placement in that row (0, 1, 2): ');
        } while (!['0','1','2'].includes(userInputColumn));
        console.log("while completed");
        return {userInputRow, userInputColumn}
    }

    return {requestInput}




})()


/*
gameBoard.createGameBoard();
console.log(board);
console.log(gameBoard.placeValueInBoard(0, 2), gameBoard.placeValueInBoard(0, 1),gameBoard.placeValueInBoard(1, 2), gameBoard.placeValueInBoard(0, 0), gameBoard.placeValueInBoard(2, 2));
console.log(board);
console.log(gameRules.checkWinner('x'));
*/


gameBoard.createGameBoard();
console.log(board);
while (!gameRules.checkWinner('x') && !gameRules.checkWinner('o')) {
    let coordinate = gameLogic.requestInput();
    console.log(coordinate);

    gameBoard.placeValueInBoard(Object.values(coordinate)[0], Object.values(coordinate)[1]);

    console.log(board);
}