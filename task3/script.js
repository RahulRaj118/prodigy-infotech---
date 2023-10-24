const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameActive = true;

function handleCellClick(event)
 {
    const cell = event.target;
    const currentCellValue = cell.getAttribute('data-cell');

    if (!currentCellValue  && gameActive)
    {
        cell.setAttribute('data-cell',currentPlayer);
        cell.textContent = currentPlayer;
        checkWinner();
        togglePlayer();
    }
}
function togglePlayer()
{
    currentPlayer = currentPlayer === 'X' ? '0' : 'X';
} 
function checkWinner()
{
const winningCombination = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];

for(const combination of winningCombination)
 {
    const [a, b, c] = combination;
    if(
        cells[a].getAttribute('data-cell') &&
        cells[a].getAttribute('data-cell') === cells[b].getAttribute('data-cell') &&
        cells[a].getAttribute('data-cell') === cells[c].getAttribute('data-cell')

    )
    {
        cells[a].style.backgroundColor = '#00cc00';
        cells[b].style.backgroundColor = '#00cc00';
        cells[c].style.backgroundColor = '#00cc00';
        gameActive = false;

    }
}
}

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});
