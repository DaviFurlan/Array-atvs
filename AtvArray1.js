var numeros = new Array(10);
for (var n = 0; n < 10; n++) {
    var numero = parseFloat(teclado("Digite o ".concat(n + 1, "\u00BA n\u00FAmero: ")));
    numeros[n] = numero;
}
console.log("Os 10 números digitados são:");
for (var n = 0; n < numeros.length; n++) {
    console.log(numeros[n]);
}
