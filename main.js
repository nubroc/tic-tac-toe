const divs = document.querySelectorAll('div');

const winningCombos = [
    ['.un', '.deux', '.trois'],
    ['.quatre', '.cinq', '.six'],
    ['.sept', '.huit', '.neuf'],
    ['.un', '.quatre', '.sept'],
    ['.deux', '.cinq', '.huit'],
    ['.trois', '.six', '.neuf'],
    ['.un', '.cinq', '.neuf'],
    ['.sept', '.cinq', '.trois']
];

let currentPlayer = 'j1';
let player1Wins = 0;
let player2Wins = 0;

divs.forEach(div => {
    div.addEventListener('click', function() {
        if (this.id !== 'j1' && this.id !== 'j2') {
            this.id = currentPlayer;
            currentPlayer = (currentPlayer === 'j1') ? 'j2' : 'j1';            
            for (const combo of winningCombos) {
                const [selector1, selector2, selector3] = combo;
                if (
                    document.querySelector(selector1).id === this.id &&
                    document.querySelector(selector2).id === this.id &&
                    document.querySelector(selector3).id === this.id
                ) {
                    if (currentPlayer === 'j1') {
                        player1Wins++;
                        document.querySelector('aside h2:nth-of-type(1) font').textContent = player1Wins;
                    } else {
                        player2Wins++;
                        document.querySelector('aside h2:nth-of-type(2) font').textContent = player2Wins;
                    }
                    divs.forEach(div => {
                        div.removeAttribute('id');
                    });
                    checkReset();
                    return;
                }
            }
            checkReset();
        }
    });
});

function checkReset() {
    let allDivsHaveId = true;
    divs.forEach(div => {
        if (!div.id) {
            allDivsHaveId = false;
        }
    });
    if (allDivsHaveId) {
        divs.forEach(div => {
            div.removeAttribute('id');
        });
        currentPlayer = 'j1';
    }
}
