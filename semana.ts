let meuArrayUm: number [] = [12, 24, 20, 16];


let meuArrayDois: string [] = [`segunda-feira`,`terça-feira`,`quarta-feira`];


let meuArrayTres: number [] = new Array(3);

console.clear();
const teclado= require(`prompt-sync`)();
let cont: number = 0;

do {
    meuArrayTres[cont] = parseInt(teclado(`Digite o número do índice: `));
    cont ++;
} while (cont < 4);
do {
    cont --;
    let total: number =+ meuArrayTres[cont];
} while (cont >- 0);
