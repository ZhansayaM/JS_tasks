let money = 1000000;
let income = 'freelance';
let addExpenses = 'room, wifi, food, taxi';
let deposit = true;
let mission = 5e10;
let period = 12;

console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев.\nЦель заработать ' + mission + ' долларов');
addExpenses.toLowerCase();
console.log(addExpenses.split(', '));

let budgetDay = money / 30;
console.log(budgetDay);
// alert("this is my first task!");

// console.log("This is a text for the console!");