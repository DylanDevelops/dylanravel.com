document.addEventListener('DOMContentLoaded', () => {
    const PLAYER_X_CLASS = 'x';
    const PLAYER_O_CLASS = 'circle';
    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const cellElements = document.querySelectorAll('[data-cell]');
    const boardElement = document.getElementById('board');
    const winningMessageElement = document.getElementById('winningMessage');
    const restartButton = document.getElementById('restartButton');
    const winningMessageTextElement = document.getElementById('winningMessageText');
    const boardOverlay = document.getElementById('overlay');
    const scribbleSound = document.getElementById('scribbleAudio');;

    let isPlayerTurn = true;

    startGame();

    restartButton.addEventListener('click', startGame);

    function startGame() {
        isPlayerTurn = true;
        cellElements.forEach(cell => {
            cell.classList.remove(PLAYER_X_CLASS);
            cell.classList.remove(PLAYER_O_CLASS);
            cell.removeEventListener('click', handleCellClick);
            cell.addEventListener('click', handleCellClick, { once: true });
        });
        winningMessageElement.classList.remove('show');

        setBoardHoverClass();
    }

    function computerPlay() {
        isPlayerTurn = false;

        boardOverlay.style.display = 'block';

        const emptyCells = [...cellElements].filter(cell => !cell.classList.contains(PLAYER_X_CLASS) && !cell.classList.contains(PLAYER_O_CLASS));

        if (Math.random() < 0.5) {
            // * 50% chance of making a random move
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            const selectedCell = emptyCells[randomIndex];

            setTimeout(() => {
                placeMark(selectedCell, PLAYER_O_CLASS);
                endTurn();

                boardOverlay.style.display = 'none';
            }, Math.random() * 500 + 600);
        } else {
            // * 50% chance of making a strategic move
            const strategicMove = getStrategicMove(emptyCells);
            if (strategicMove !== null) {
                setTimeout(() => {
                    placeMark(strategicMove, PLAYER_O_CLASS);
                    endTurn();

                    boardOverlay.style.display = 'none';
                }, Math.random() * 500 + 600);
            } else {
                // If no strategic move available, make a random move
                const randomIndex = Math.floor(Math.random() * emptyCells.length);
                const selectedCell = emptyCells[randomIndex];

                setTimeout(() => {
                    placeMark(selectedCell, PLAYER_O_CLASS);
                    endTurn();

                    boardOverlay.style.display = 'none';
                }, Math.random() * 500 + 600);
            }
        }
    }

    function getStrategicMove(emptyCells) {
        for (const cell of emptyCells) {
            cell.classList.add(PLAYER_O_CLASS);
    
            // * Check if AI can win in the next move
            if (checkWin(PLAYER_O_CLASS)) {
                cell.classList.remove(PLAYER_O_CLASS);
                return cell;
            }
            
            cell.classList.remove(PLAYER_O_CLASS);
        }
    
        for (const cell of emptyCells) {
            cell.classList.add(PLAYER_X_CLASS);
    
            // * Check if player can win in the next move and block it
            if (checkWin(PLAYER_X_CLASS)) {
                cell.classList.remove(PLAYER_X_CLASS);
                return cell;
            }
    
            cell.classList.remove(PLAYER_X_CLASS);
        }
    
        // * If no winning or blocking moves, prioritize center, corners, then edges
        const centerCell = cellElements[4];
        if (emptyCells.includes(centerCell)) {
            return centerCell;
        }
    
        const corners = [cellElements[0], cellElements[2], cellElements[6], cellElements[8]];
        const emptyCorners = corners.filter(corner => emptyCells.includes(corner));
        if (emptyCorners.length > 0) {
            return emptyCorners[Math.floor(Math.random() * emptyCorners.length)];
        }
    
        const edges = [cellElements[1], cellElements[3], cellElements[5], cellElements[7]];
        const emptyEdges = edges.filter(edge => emptyCells.includes(edge));
        if (emptyEdges.length > 0) {
            return emptyEdges[Math.floor(Math.random() * emptyEdges.length)];
        }
    
        return null; // ! No strategic moves available
    }
    

    function endTurn() {
        if (checkWin(PLAYER_O_CLASS)) {
            endGame(false);
        } else if (isDraw()) {
            endGame(true);
        } else {
            isPlayerTurn = true;
            setBoardHoverClass();
            if (!isPlayerTurn) {
                setTimeout(computerPlay, 300);
            }
        }
    }

    function handleCellClick(e) {
        const cell = e.target;

        if (!isPlayerTurn || cell.classList.contains(PLAYER_X_CLASS) || cell.classList.contains(PLAYER_O_CLASS)) {
            return;
        }

        if (isPlayerTurn && !cell.classList.contains(PLAYER_X_CLASS) && !cell.classList.contains(PLAYER_O_CLASS)) {
            const currentClass = PLAYER_X_CLASS;
            
            placeMark(cell, currentClass);
            if (checkWin(currentClass)) {
                endGame(false);
            } else if (isDraw()) {
                endGame(true);
            } else {
                isPlayerTurn = false;
                setBoardHoverClass();
                setTimeout(computerPlay, 300);
            }
        }
    }

    function endGame(draw) {
        if (draw) {
            winningMessageTextElement.innerText = "It's a draw!";
            boardOverlay.style.display = 'none';
        } else {
            if (isPlayerTurn) {
                winningMessageTextElement.innerText = 'You win!';
                boardOverlay.style.display = 'none';
            } else {
                winningMessageTextElement.innerText = 'The computer wins!';
                boardOverlay.style.display = 'none';
            }
        }
        winningMessageElement.classList.add('show');
        setBoardHoverClass();
    }

    function isDraw() {
        return [...cellElements].every(cell => {
            return cell.classList.contains(PLAYER_X_CLASS) || cell.classList.contains(PLAYER_O_CLASS);
        });
    }

    function placeMark(cell, currentClass) {
        // play the scribble sound
        scribbleSound.currentTime = 0;
        scribbleSound.play();
        
        cell.classList.add(currentClass);
    }

    function setBoardHoverClass() {
            boardElement.classList.remove(PLAYER_X_CLASS);
            boardElement.classList.remove(PLAYER_O_CLASS);
            boardElement.classList.add(PLAYER_X_CLASS);
    }

    function checkWin(currentClass) {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => {
                return cellElements[index].classList.contains(currentClass);
            });
        });
    }
});
