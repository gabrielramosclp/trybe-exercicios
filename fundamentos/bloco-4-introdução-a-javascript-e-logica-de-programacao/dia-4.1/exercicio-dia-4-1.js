/* exercício 1 */
const a = 10
const b = 20

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)


/* exercício 2 */
const number1 = 20
const number2 = 30
const number3 = 40

if (number1 > number2) {
    console.log(number1);
}else{
    console.log(number2);
}


/* exercício 3 */
if (number1 > number2 && number1 > number3) {
    console.log(number1);
} else if (number2 > number1 && number2 > number3) {
    console.log(number2);
}else {
    console.log(number3);
}


/* exercício 4 */
const negativo = -20

if (negativo > 0) {
    console.log('positive');
}else if (negativo < 0) {
    console.log('negative');
}else {
console.log('zero');
}


/* exercício 5 */
const angulo1 = 60
const angulo2 = 30
const angulo3 = 90

if (angulo1 + angulo2 + angulo3 === 180) {
    console.log(true);
} else if (angulo1 + angulo2 + angulo3 != 180){
    console.log(false);
}else {
    console.log('erro');
}


/* exercício 6 */
const pecaXadrez = 'bishop'

if (pecaXadrez === 'bishop') {
    console.log('diagonals');
} else {
    console.log('erro');
}


/* exercício 8 */
const par1 = 10
const par2 = 50
const impar = 23

if (par1 %2 === 0 | par2 %2 === 0 | impar %2 === 0) {
    console.log(true);
} else {
    console.log(false);
}