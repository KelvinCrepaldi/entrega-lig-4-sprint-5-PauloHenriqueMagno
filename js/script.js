//variaveis globais
let table = [[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']
            ,[' ', ' ', ' ', ' ', ' ', ' ']];

let empate = 0;

//variaveis globais
//Kelvin
function compareLines(table, posX, posY){
    console.log(posX)
    console.log(posY)

    let horizontal = ""
    let vertical = ""
    let diagonal_x = ""
    let diagonal_y = ""
    let x = 0
    let y = 0
    
    //Trata horizontal
    horizontal = table[posX].join("")
    if(horizontal.includes("UUUU")){
        return [true, 'horizontal', 'U']
    }
    if(horizontal.includes("EEEE")){
        return [true, 'horizontal', 'E']
    }


    //Trata vertical
    for(let i = 0; i < 7; i++){
        vertical += table[i][posY]
    }
    if(vertical.includes("UUUU")){
        return [true, 'vertical', 'U']
    }
    if(vertical.includes("EEEE")){
        return [true, 'vertical', 'E']
    }


    //trata diagonal_x
    x = posX+3
    y = posY+3
    for(let i = 0; i <= 8; i++){
        if(x >= 0 && y >= 0 && x<6 && y<7){
            diagonal_x += table[x][y]
            
        }
        x--
        y--
    }
    if(diagonal_x.includes("UUUU")){
        return [true, 'diagonal_x', 'U']
    }
    if(diagonal_x.includes("EEEE")){
        return [true, 'diagonal_x', 'E']
    }

    //trata diagonal_y
    x = posX+3
    y = posY-3
    for(let i = 0; i <= 8; i++){
        if(x >= 0 && y >= 0 && x<6 && y<7){
            diagonal_y += table[x][y]

        }
        x--
        y++
    }

    if(diagonal_y.includes("UUUU")){
        return [true, 'diagonal_y', 'U']
    }
    if(diagonal_y.includes("EEEE")){
        return [true, 'diagonal_y', 'E']
    }

    //cria string diagonal_y
    return false
}

//Kelvin

//Manoela
const boxJogo = document.getElementById('container');

const criarTabuleiro = () => {

    for(let i = 0; i < 7; i++){
        const coluna = document.createElement('div');
        coluna.classList.add('coluna');
        coluna.id = `${'coluna'}${i}`;

        boxJogo.appendChild(coluna);
    }
}
criarTabuleiro();
//Manoela

/* roberto */

let actualPlayer = true;

const makeCheckers = () => {
    const checker = document.createElement('div');
    
    checker.classList.add('checker');
    checker.classList.add('checkerUSA');
    
    return checker;
}

let flag = "E"
const gamePlay = (e) => {
    
    console.log(e.target.id)
    let destino = document.getElementById(e.target.id);
    makeCheckers();
    destino.appendChild(makeCheckers());

    // atualiza tabuleiro
    table[e.target.id[6]][destino.childElementCount-1] = flag

    if(flag === "E"){
        flag = "U"
    }else{
        flag = "E"
    }

    // condição verifica ganhador
    let verifyedLines = compareLines(table, e.target.id[6], destino.childElementCount-1);
    if(verifyedLines[0] === true){
        
    }
    
}


boxJogo.addEventListener('click', gamePlay);



/* roberto */
