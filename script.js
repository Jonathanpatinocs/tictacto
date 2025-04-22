const player1 =
{
    marker: 'X',
    score: 0,
    isTurn: true
}

const player2 =
{
    marker: 'O',
    score: 0,
    isTurn: false
}

const gameBoard =
{
    array: 
    ['a1', 'a2', 'a3',
    'b1', 'b2', 'b3',
    'c1', 'c2', 'c3'],
    win: false,
    
}
const controller = {
    checkWinner: () => {
        if (gameBoard.array[0] == gameBoard.array[1] && gameBoard.array[1] == gameBoard.array[2])
        {
            return gameBoard.array[0]
        }
        if (gameBoard.array[3] == gameBoard.array[4] && gameBoard.array[4] == gameBoard.array[5])
        {
            return gameBoard.array[3]
        }
        if (gameBoard.array[6] == gameBoard.array[7] && gameBoard.array[7] == gameBoard.array[8])
        {
            return gameBoard.array[6]
        }
        if (gameBoard.array[0] == gameBoard.array[3] && gameBoard.array[3] == gameBoard.array[6])
            {
                return gameBoard.array[0]
            }
        if (gameBoard.array[1] == gameBoard.array[4] && gameBoard.array[4] == gameBoard.array[7])
        {
            return gameBoard.array[1]
        }
        if (gameBoard.array[2] == gameBoard.array[5] && gameBoard.array[5] == gameBoard.array[8])
        {
            return gameBoard.array[2]
        }
        if (gameBoard.array[0] == gameBoard.array[4] && gameBoard.array[4] == gameBoard.array[8])
        {
            return gameBoard.array[0]
        }
        if (gameBoard.array[2] == gameBoard.array[4] && gameBoard.array[4] == gameBoard.array[6])
        {
            return gameBoard.array[2]
        }
        return 0
    }
}

const game = () => {
    setTimeout(1000)
    while(!gameBoard.win) {
        console.log(gameBoard.array);
        if (player1.isTurn)
        {
            let valid = false
            while (!valid) {
                let ans = prompt('player1: ')
                if (gameBoard.array.includes(ans))
                    {
                        valid = true
                        gameBoard.array[gameBoard.array.indexOf(ans)] = player1.marker;
                        player1.isTurn = false
                        player2.isTurn = true
                    }
                    else {
                        console.log("invalid, Try Again")
                }
            }
        }
        else if (player2.isTurn) {
            let valid = false
            while (!valid) {
                let ans = prompt('player2: ')
                if (gameBoard.array.includes(ans))
                    {
                        valid = true
                        gameBoard.array[gameBoard.array.indexOf(ans)] = player2.marker;
                        player2.isTurn = false
                        player1.isTurn = true
                    }
                    else {
                        console.log("invalid, Try Again")
                }
            }
        }
        if (controller.checkWinner() != 0)
        {
            gameBoard.win = true
            if (controller.checkWinner() == 'X') {
                console.log("player1 Wins")
            }
            else {
                console.log("player2 Wins")
            }
        }

        console.log(gameBoard.array);
        
    }
}
game()

