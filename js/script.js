const tabuleiro = [
    "000000",
    "000000",
    "000000",
    "000000",
    "000000",
    "000000",
    "000000",
]

const boxJogo = document.getElementById('container');

const criarTabuleiro = () => {

    for(let i = 0; i < tabuleiro.length; i++){
        const coluna = document.createElement('div');
        coluna.classList.add('coluna')
        coluna.id = `${[i]}`;

        for(let j = 0; j < tabuleiro[i].length; j++){
            const celula = document.createElement('div');
            celula.classList.add('celula')
            celula.id = `${[j]}`;
            coluna.appendChild(celula);
        }
        boxJogo.appendChild(coluna);
    }
}
criarTabuleiro();