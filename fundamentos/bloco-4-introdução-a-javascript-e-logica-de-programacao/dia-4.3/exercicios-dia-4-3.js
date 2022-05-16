/* 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
 */

let number = 10
let resultado = number

for(index = 10; index > 1; index -= 1) {
    resultado *= index
}
    console.log(resultado);
    
/* 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. */

let word = 'tryber'
let reverse = ''
let stringReverse = []

for (index = word.length-1; index >= 0; index -= 1) {
    reverse = word[index]
    stringReverse.push(reverse)
}
console.log(stringReverse);    