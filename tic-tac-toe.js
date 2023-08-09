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
        setBoardHoverClass();
        winningMessageElement.classList.remove('show');
    }

    function computerPlay() {
        isPlayerTurn = false;
        const emptyCells = [...cellElements].filter(cell => !cell.classList.contains(PLAYER_X_CLASS) && !cell.classList.contains(PLAYER_O_CLASS));
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const selectedCell = emptyCells[randomIndex];

        setTimeout(() => {
            placeMark(selectedCell, PLAYER_O_CLASS);

            if(checkWin(PLAYER_O_CLASS)) {
                endGame(false);
            } else if(isDraw()) {
                endGame(true);
            } else {
                isPlayerTurn = true;
                setBoardHoverClass();
            }
        }, Math.random() * 500 + 600);
    }

    function handleCellClick(e) {
        const cell = e.target;
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
                computerPlay();
            }
        }
    }

    function endGame(draw) {
        if(draw) {
            winningMessageTextElement.innerText = "It's a draw!";
        } else {
            if(isPlayerTurn) {
                winningMessageTextElement.innerText = 'You win!';
                startConfetti();
            } else {
                winningMessageTextElement.innerText = 'The computer wins!';
            }
        }
        winningMessageElement.classList.add('show');
    }

    function isDraw() {
        return [...cellElements].every(cell => {
            return cell.classList.contains(PLAYER_X_CLASS) || cell.classList.contains(PLAYER_O_CLASS);
        })
    }

    function placeMark(cell, currentClass) {
        cell.classList.add(currentClass);
    }

    function setBoardHoverClass() {
        boardElement.classList.remove(PLAYER_X_CLASS);
        boardElement.classList.remove(PLAYER_O_CLASS);
        if (isPlayerTurn) {
            boardElement.classList.add(PLAYER_X_CLASS);
        } else {
            boardElement.classList.add(PLAYER_O_CLASS);
        }
    }

    function checkWin(currentClass) {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => {
                return cellElements[index].classList.contains(currentClass);
            })
        })
    }

    // Initialize confetti-js
    const confettiSettings = {
        target: 'confetti-canvas', // Set to 'body' to make confetti fall from the whole screen
        max: '150',
        size: '1',
        animate: true,
        start_from_edge: false, // Set to false to make confetti fall from a fixed position
        props: ['circle', 'square', 'triangle', 'line'],
        colors: [[255, 165, 0], [255, 0, 0], [255, 255, 0], [0, 255, 0]]
    };

    function startConfetti() {
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    
        // Stop confetti after a few seconds
        setTimeout(() => {
            confetti.clear();
        }, 5000); // Adjust the duration as needed
    }
});
