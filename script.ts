let numPlayer1: number = 20;
let numPlayer2: number = 20;
let numeroEstratto: number = 20;

if(numPlayer1 === numeroEstratto && numPlayer2 === numeroEstratto) {
    console.log(`Entrambi hanno indovinato!`)
}
else if(numPlayer1 === numeroEstratto) {
    console.log(`Il giocatore n.1 ha indovinato il numero estratto: ${numeroEstratto}`)
} else if(numPlayer2 === numeroEstratto){
    console.log(`Il giocatore n.2 ha indovinato il numero estratto: ${numeroEstratto}`)
} else {
    let diffNumPlayer1: number = Math.abs(numPlayer1 - numeroEstratto);
    let diffNumPlayer2: number = Math.abs(numPlayer2 - numeroEstratto);
    console.log(diffNumPlayer1, diffNumPlayer2)

    if(diffNumPlayer1 < diffNumPlayer2){
        console.log(`Nessuno ha indovinato, però il giocatore n.1 si è avvicinato di più del giocatore n.2`)
    } else {
        console.log(`Nessuno ha indovinato, però il giocatore n.2 si è avvicinato di più del giocatore n.1`)
    }
} 

