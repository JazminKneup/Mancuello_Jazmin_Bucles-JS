//Imiprimir imapares del 1 al 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//Disminuir multiplos de 3
for (let i = 100; i >= 0; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
//Imprimir la secuencia 
const secuencia = [4, 2.5, 1, -0.5, -2, -3.5];
for (let i = 0; i < secuencia.length; i++) {
    console.log(secuencia[i]);
}
//SIGMA,escribir el codigo que sume todos los valores del 1 al 100 
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum); // tiene que imprimir 5050

//Factorial,escribir codigo que multiplique todos los valores del 1 al 12
let product = 1;
for (let i = 1; i <= 12; i++) {
    product *= i;
}
console.log(product); // tendria que imprimir 479001600
