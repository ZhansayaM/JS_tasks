let money, amount1, amount2;

while (1) {
  money = +prompt("Ваш месячный доход?");
  if (!Number.isNaN(money)) break;
}

let addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);

let deposit = confirm("Есть ли у вас депозит в банке?");

let expenses1 = prompt("Введите обязательную статью расходов?");
while (1) {
  amount1 = +prompt("Во сколько это обойдется?");
  if (!Number.isNaN(amount1)) break;
}

let expenses2 = prompt("Введите обязательную статью расходов?");
while (1) {
  amount2 = +prompt("Во сколько это обойдется?");
  if (!Number.isNaN(amount2)) break;
}

let income = "freelance";
let mission = 5e10;

let showTypeOf = function (data) {
  console.log(data, typeof data);
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// console.log(addExpenses.length);
// console.log(
//   "Период равен " + period + " месяцев.\nЦель заработать " + mission + " рублей"
// );
// addExpenses.toLowerCase();
console.log(addExpenses.toLowerCase().split(", "));

//////////////////////////////////////////////////// 

function getExpensesMonth(a, b) {  //task 1, expenses
  return a + b;
}

function getAccumulatedMonth(c) {  //task2, income - expenses
  return c - getExpensesMonth(amount1, amount2);
}

let accumulatedMonth = getAccumulatedMonth(money); //task3

function getTargetMonth() {  //task4
  return Math.ceil(mission / accumulatedMonth);
}

console.log("Вам потребуется " + getTargetMonth() + " месяцев.");

let budgetDay = Math.floor(accumulatedMonth / 30);  //task6
console.log("Ваш бюджет на день составляет " + budgetDay + " рублей.");

let getStatusIncome = function (budget) {
  if (budget > 1200) {
    return "У вас высокий уровень дохода";
  } else if (budget > 600 && budget <= 1200) {
    return "У вас средний уровень дохода";
  } else if (budget <= 600 && budget > 0) {
    return "К сожалению у вас уровень дохода ниже среднего";
  } else if (budget < 0) {
    return "Что то пошло не так";
  }
};
console.log(getStatusIncome(budgetDay));