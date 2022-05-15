const a = 10
const b = 20

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

const number1 = 20
const number2 = 30
const number3 = 40

if (number1 > number2) {
    console.log(number1);
}else{
    console.log(number2);
}

if (number1 > number2 && number1 > number3) {
    console.log(number1);
} else if (number2 > number1 && number2 > number3) {
    console.log(number2);
}else {
    console.log(number3);
}