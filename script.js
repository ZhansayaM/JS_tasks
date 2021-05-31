"use strict";

let money, amount1, amount2;

while (1) {
  money = +prompt("Ваш месячный доход?"); //task2
  if (!Number.isNaN(money)) break;
}

let addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
); //task3

let deposit = confirm("Есть ли у вас депозит в банке?"); //task4

let expenses1 = prompt("Введите обязательную статью расходов?"); //task5
while (1) {
  amount1 = +prompt("Во сколько это обойдется?"); //task5
  if (!Number.isNaN(amount1)) break;
}

let expenses2 = prompt("Введите обязательную статью расходов?");
while (1) {
  amount2 = +prompt("Во сколько это обойдется?");
  if (!Number.isNaN(amount2)) break;
}

let budgetMonth = money - amount1 - amount2; //task6

let income = "freelance";
let mission = 5e10;

let period = Math.ceil(mission / budgetMonth);
console.log("Вам потребуется " + period + " месяцев."); //task7

let budgetDay = Math.floor(budgetMonth / 30); //task8
console.log("Ваш бюджет на день составляет " + budgetDay + " рублей.");

if (budgetDay > 1200) {
  //task9
  console.log("У вас высокий уровень дохода");
} else if (budgetDay > 600 && budgetDay <= 1200) {
  console.log("У вас средний уровень дохода");
} else if (budgetDay <= 600 && budgetDay > 0) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
} else if (budgetDay < 0) {
  console.log("Что то пошло не так");
}

console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log(
  "Период равен " + period + " месяцев.\nЦель заработать " + mission + " рублей"
);
addExpenses.toLowerCase();
console.log(addExpenses.split(", "));
