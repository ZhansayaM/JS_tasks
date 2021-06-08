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
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 50000,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  period: 3,
  asking: function () {
    let cashIncome, itemIncome, amount, expense, addExpenses;

    if (confirm('Есть ли у вас дополнительный источник заработка?')) {
      do {
        itemIncome = prompt('Какой у вас дополнительный заработок?');
      } while (isNumber(itemIncome) || itemIncome === '');
      do {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?');
      } while (!isNumber(cashIncome));
      appData.income[itemIncome] = cashIncome;
    }

    do {
      addExpenses = prompt(
        "Перечислите возможные расходы за рассчитываемый период через запятую"
      );
    } while (isNumber(addExpenses)  || addExpenses === '');
    appData.addExpenses = addExpenses.toLowerCase().split(",");

    appData.deposit = confirm("Есть ли у вас депозит в банке?");

    for (let i = 0; i < 2; i++) {
      do {
        expense = prompt("Введите обязательную статью расходов?");
      } while (isNumber(expense) || expense === '');
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
  getInfoDeposit: function(){
    if(appData.deposit){
      do {
        appData.percentDeposit = prompt('Какой годовой процент?');
      } while (!isNumber(appData.percentDeposit));
      do {
        appData.moneyDeposit = prompt('Какая сумма заложена?');
      } while (!isNumber(appData.moneyDeposit));
    }
  },
  calcSavedMoney: function(){
    return appData.budgetMonth * appData.period;
  },
};

appData.asking();
appData.getInfoDeposit();

appData.expensesMonth = appData.getExpensesMonth();
console.log("Расходы за месяц: " + appData.expensesMonth);

appData.budgetMonth = appData.getBudget();
appData.budgetDay = Math.floor(appData.budgetMonth / 30);

appData.period = appData.getTargetMonth();
let savedMoney = appData.calcSavedMoney();
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

let concatExpenses = appData.addExpenses[0].charAt(0).toUpperCase() + appData.addExpenses[0].slice(1);
for (let i = 1; i < appData.addExpenses.length; i++){
  concatExpenses = concatExpenses.concat(', ', appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].slice(1));
}
console.log(concatExpenses);