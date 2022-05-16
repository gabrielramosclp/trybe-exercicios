/* exercício 1 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
    
}


/* exercício 2 */
let somaNumbers = [numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9]];

console.log(somaNumbers);


/* exercícios 3 e 4 */
let mediaAritmeticaNumbers = [somaNumbers / 10];

console.log(mediaAritmeticaNumbers);

if (mediaAritmeticaNumbers > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}


/* exercício 6 */
let impares = 0

for (let index = 0; index < numbers.length; index++) {
    
    if (numbers[index] %2 != 0) {
        console.log(impares++);
    }else {
        console.log('não tem números ímpares');
    }
    
}
    
