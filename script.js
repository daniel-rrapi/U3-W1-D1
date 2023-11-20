var numPlayer1 = 20;
var numPlayer2 = 20;
var numeroEstratto = 20;
if (numPlayer1 === numeroEstratto && numPlayer2 === numeroEstratto) {
    console.log("Entrambi hanno indovinato!");
}
else if (numPlayer1 === numeroEstratto) {
    console.log("Il giocatore n.1 ha indovinato il numero estratto: ".concat(numeroEstratto));
}
else if (numPlayer2 === numeroEstratto) {
    console.log("Il giocatore n.2 ha indovinato il numero estratto: ".concat(numeroEstratto));
}
else {
    var diffNumPlayer1 = Math.abs(numPlayer1 - numeroEstratto);
    var diffNumPlayer2 = Math.abs(numPlayer2 - numeroEstratto);
    console.log(diffNumPlayer1, diffNumPlayer2);
    if (diffNumPlayer1 < diffNumPlayer2) {
        console.log("Nessuno ha indovinato, per\u00F2 il giocatore n.1 si \u00E8 avvicinato di pi\u00F9 del giocatore n.2");
    }
    else {
        console.log("Nessuno ha indovinato, per\u00F2 il giocatore n.2 si \u00E8 avvicinato di pi\u00F9 del giocatore n.1");
    }
}
