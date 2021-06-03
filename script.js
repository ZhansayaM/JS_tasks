let isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

let money,
  amount,
  expense = [],
  income = "freelance",
  mission = 5e10;
  
//task1
let start = function () {
  do {
    money = prompt("Ваш месячный доход?");
  } while (!isNumber(money));
};
start();

let addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);

let deposit = confirm("Есть ли у вас депозит в банке?");

let showTypeOf = function (data) {
  console.log(data, typeof data);
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(addExpenses.toLowerCase().split(", "));

////////////////////////////////////////////////////

function getExpensesMonth() {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    expense[i] = prompt("Введите обязательную статью расходов?");
//task2
  do {
      amount = prompt("Во сколько это обойдется?");
    } while (!isNumber(amount));
    sum += +amount;
  }
  return sum;
}

let expensesAmount = getExpensesMonth();

function getAccumulatedMonth(incomeAmount) {
  return incomeAmount - expensesAmount;
}

let accumulatedMonth = getAccumulatedMonth(money);

function getTargetMonth() {
  return Math.ceil(mission / accumulatedMonth);
}

let period = getTargetMonth(); //task3
if (period < 0) {
  console.log("Цель не будет достигнута");
} else {
  console.log(
    "Цель будет достигнута.\nВам потребуется " + period + " месяцев."
  );
}

let budgetDay = Math.floor(accumulatedMonth / 30);
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
