console.log('Running my junk')

const board = [];

function play(clickedId){
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)

    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }
    console.log(board);



    const topLeft = board[0];
    const topMiddle = board[1];
    const topRight = board[2];
    const centerLeft = board[3];
    const centerMiddle = board[4];
    const centerRight = board[5];
    const bottomLeft = board[6];
    const bottomMiddle = board[7];
    const bottomRight = board[8];

    if(topLeft !== undefined && topLeft === topMiddle && topLeft === topRight){
        alert(`${topLeft} is the winner`)
        return;
    }
    if(centerLeft !== undefined && centerLeft === centerMiddle && centerLeft === centerRight){
        alert(`${centerLeft} is the winner`)
        return;
    }
    if(bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight){
        alert(`${bottomLeft} is the winner`)
        return;
    }
    if(topLeft !== undefined && topLeft === centerLeft && topLeft === bottomLeft){
        alert(`${topLeft} is the winner`)
        return;
    }
    if(topMiddle !== undefined && topMiddle === centerMiddle && topMiddle === bottomMiddle){
        alert(`${topMiddle} is the winner`)
        return;
    }
    if(topRight !== undefined && topRight === centerRight && topRight === bottomRight){
        alert(`${topRight} is the winner`)
        return;
    }
    if(topLeft !== undefined && topLeft === centerMiddle && topLeft === bottomRight){
        alert(`${topLeft} is the winner`)
        return;
    }
    if(topRight !== undefined && topRight === centerMiddle && topRight === bottomLeft){
        alert(`${topRight} is the winner`)
        return;
    }

    let boardFull = true;
    for(let i = 0; i < 8; i++){
        if(board[i] === undefined){
            boardFull = false;
        }
    }
    if(boardFull === true){
        alert("Cat's game, there was no winner.")
    }

}


/// Black diomond, bonus portion.



