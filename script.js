"use strict";

let isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

let money,
  start = function () {
    do {
      money = prompt("Ваш месячный доход?");
    } while (!isNumber(money));
  };
start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  period: 3,
  asking: function () {
    let amount, expense;
    let addExpenses = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую"
    );
    appData.addExpenses = addExpenses.toLowerCase().split(",");
    appData.deposit = confirm("Есть ли у вас депозит в банке?");
    for (let i = 0; i < 2; i++) {
      expense = prompt("Введите обязательную статью расходов?");
      do {
        amount = prompt("Во сколько это обойдется?");
      } while (!isNumber(amount));
      appData.expenses[expense] = +amount;
    }
  },
  getExpensesMonth: function () {
    let sum = 0;
    for (let key in appData.expenses) {
      sum += appData.expenses[key];
    }
    return sum;
  },
  getBudget: function () {
    return appData.budget - appData.expensesMonth;
  },
  getTargetMonth: function () {
    return Math.ceil(appData.mission / appData.budgetMonth);
  },
  getStatusIncome: function () {
    if (appData.budget > 1200) {
      return "У вас высокий уровень дохода";
    } else if (appData.budget > 600 && appData.budget <= 1200) {
      return "У вас средний уровень дохода";
    } else if (appData.budget <= 600 && appData.budget > 0) {
      return "К сожалению у вас уровень дохода ниже среднего";
    } else if (appData.budget < 0) {
      return "Что то пошло не так";
    }
  },
};

appData.asking();

appData.expensesMonth = appData.getExpensesMonth();
console.log("Расходы за месяц: " + appData.expensesMonth);

appData.budgetMonth = appData.getBudget();
appData.budgetDay = Math.floor(appData.budgetMonth / 30);

appData.period = appData.getTargetMonth();
if (appData.period < 0) {
  console.log("Цель не будет достигнута");
} else {
  console.log(
    "Цель будет достигнута.\nВам потребуется " + appData.period + " месяцев."
  );
}

console.log(appData.getStatusIncome());

console.log("Наша программа включает в себя данные: ");
for (let key in appData) {
  console.log(key + "\t" + appData[key]);
}
