// iniciar as variáveis

let board = ['', '', '','', '', '','', '', '']
let playerTime = 0
let symbols = ["o", 'x']

function handleMove (postion){

    if(board[postion] == ''){
        board[postion]= symbols[playerTime]

        if(playerTime == 0){
            playerTime = 1
        } else{
            playerTime = 0
        }
    }
}