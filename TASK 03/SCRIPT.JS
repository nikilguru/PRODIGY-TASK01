const cells = document.querySelectorAll('[data-cell]');
const board = document.querySelector('.board');
const winningMessageElement = document.getElementById('winningMessage');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
const restartButton = document.getElementById('restartButton');
let circleTurn;

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

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    circleTurn = false;
    cells.forEach(cell => {
        cell.classList.remove('x');
        cell.classList.remove('circle');
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? 'circle' : 'x';
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!';
    } else {
        winningMessageTextElement.innerText = ${circleTurn ? "O's" : "X's"} Wins!;
    }
    winningMessageElement.classList.add('show');
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.classList.contains('x') || cell.classList.contains('circle');
    });
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    circleTurn = !circleTurn;
}

function setBoardHoverClass() {
    board.classList.remove('x');
    board.classList.remove('circle');
    if (circleTurn) {
        board.classList.add('circle');
    } else {
        board.classList.add('x');
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentClass);
        });
    });
}
