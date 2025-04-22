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
        let tie = true;
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
        for (let i = 0; i < gameBoard.array.length; i++) {
            if (gameBoard.array[i] != 'X' && gameBoard.array[i] != 'O' ) {
                tie = false
            }
        }
        if (tie) {
            return "Tie"
        }
        return 0
    },
    displayResults: (winner) => {
        resultsText = document.getElementById('player')
        resultsText.innerText = winner
    }
}

const doms = {
    clickDivs: () => {
        
        divs = document.querySelectorAll(".box")
        divs.forEach(box => {
            box.addEventListener('click', ()=> {
                if (box.id != 'X' && box.id != 'O' && !box.classList.contains("Done")) {
                    if (player1.isTurn) {
                        box.innerText = "X"
                        gameBoard.array[gameBoard.array.indexOf(box.id)] = player1.marker;
                        box.id = "X"
                        player2.isTurn = true
                        player1.isTurn = false
                    }
                    else if (player2.isTurn){
                        box.innerText = "O"
                        gameBoard.array[gameBoard.array.indexOf(box.id)] = player2.marker;
                        box.id = "O"
                        player2.isTurn = false
                        player1.isTurn = true
                    }
                }
                if (controller.checkWinner() != 0)
                    {
                        gameBoard.win = true
                        if (controller.checkWinner() == 'X') {
                            console.log("player1 Wins")
                            controller.displayResults("Player1 Wins")

                        }
                        else if (controller.checkWinner() == 'O'){
                            console.log("player2 Wins")
                            controller.displayResults("Player2 Wins")
                        }
                        else {
                            console.log("TIE")
                            controller.displayResults("TIE")
                        }
                        divs.forEach(box => {
                            box.classList.add("Done")
                        })
                    }
            })
        });
    }
}

const game = () => {
    doms.clickDivs()
    
    
}
game()

