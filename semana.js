var meuArrayUm = [12, 24, 20, 16];
var meuArrayDois = ["segunda-feira", "ter\u00E7a-feira", "quarta-feira"];
var meuArrayTres = new Array(3);
console.clear();
var teclado = require("prompt-sync")();
var cont = 0;
do {
    meuArrayTres[cont] = parseInt(teclado("Digite o n\u00FAmero do \u00EDndice: "));
    cont++;
} while (cont < 4);
do {
    cont--;
    var total = +meuArrayTres[cont];
} while (cont > -0);
