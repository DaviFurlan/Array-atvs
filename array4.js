console.clear();
var teclado = require("prompt-sync")();
var numeros = new Array(10);
var numerosInvert = new Array(10);
for (var n = 0; n < 10; n++) {
    var numero = parseInt(teclado("Digite um numero: "));
    numeros[n] = numero;
}
for (var n = 0, j = 9; n < 10; n++, j--) {
    numerosInvert[j] = numeros[n];
}
for (var n = 0; n < 10; n++) {
    console.log(numerosInvert[n]);
}
