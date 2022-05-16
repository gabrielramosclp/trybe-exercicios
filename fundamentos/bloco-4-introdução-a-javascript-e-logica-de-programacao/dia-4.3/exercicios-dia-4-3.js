/* 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
 */

let number = 10
let resultado = number

for(index = 10; index > 1; index -= 1) {
    resultado *= index
}
    console.log(resultado);
    
    