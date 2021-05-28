let num = 266219;                                   //task1

function digitMultiplication(num) {
    let multiply = 1;
    while(Math.trunc(num) > 0) {
        mod = num % 10;
        num /= 10;
        num = Math.trunc(num);
        multiply *= mod;
    }
    return multiply;
}

console.log(digitMultiplication(num));              //task2

let exponential = digitMultiplication(num) ** 3;    //task3

function firstNDigits(num, n) {
    n = Math.pow(10, n);
    while (num > n) {
        num /= 10;
        num = Math.trunc(num);
    }
    return num;
}

console.log(firstNDigits(exponential, 2));          //task4