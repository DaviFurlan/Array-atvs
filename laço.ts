const teclado = require (`prompt-sync`)();
let numeros = new Array(10);


for (let n = 0; n < 10; n++) {
    
    let numero = parseFloat(teclado(`Digite o ${n + 1}º número: `));
    
    
    numeros[n] = numero;
}


console.log("Os 10 números digitados são:");
for (let n = 0; n < numeros.length; n++) {
    console.log(numeros[n]);
}
