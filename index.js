"use strict";

let countBtn = document.getElementById("start");
countBtn.style.opacity = "1";
countBtn.disabled = true;

let plusIncomeBtn = document.getElementsByTagName("button")[0];
let plusExpenseBtn = document.getElementsByTagName("button")[1];
let depositCheckbox = document.querySelector("#deposit-check");
let additionalIncomeInputs = document.querySelectorAll(
  ".additional_income-item"
);

let budgetMonthVal = document.getElementsByClassName("budget_month-value")[0];
let budgetDayVal = document.getElementsByClassName("budget_day-value")[0];
let expensesMonthVal = document.getElementsByClassName(
  "expenses_month-value"
)[0];
let additionalIncomeVal = document.getElementsByClassName(
  "additional_income-value"
)[0];
let additionalExpensesVal = document.getElementsByClassName(
  "additional_expenses-value"
)[0];
let incomePeriodVal = document.getElementsByClassName("income_period-value")[0];
let targetMonthVal = document.getElementsByClassName("target_month-value")[0];

let salaryAmount = document.querySelector(".salary-amount");
let incomeTitle = document.querySelector(".income-title");
let incomeAmount = document.querySelector(".income-amount");
let incomeItem = document.querySelectorAll(".income-items");
let additionalIncomeInput1 = document.querySelector(".additional_income-item");
let additionalIncomeInput2 = document.querySelector(".additional_income-item");
let expensesTitle = document.querySelector(".expenses-title");
let expensesItems = document.querySelectorAll(".expenses-items");
let additionalExpensesInput = document.querySelector(
  ".additional_expenses-item"
);
let depositCheckboxInput = document.querySelector("#deposit-check");
let depositAmount = document.querySelector(".deposit-amount");
let depositPercent = document.querySelector(".deposit-percent");
let targetAmount = document.querySelector(".target-amount");
let periodSelectRange = document.querySelector(".period-select");
let periodAmount = document.querySelector(".period-amount");
let names = document.querySelectorAll('[placeholder="Наименование"]');
let amounts = document.querySelectorAll('[placeholder="Сумма"]');
let russianAlphabet = [
  "Ё",
  "Й",
  "Ц",
  "У",
  "К",
  "Е",
  "Н",
  "Г",
  "Ш",
  "Щ",
  "З",
  "Х",
  "Ъ",
  "Э",
  "Ж",
  "Д",
  "Л",
  "О",
  "Р",
  "П",
  "А",
  "В",
  "Ы",
  "Ф",
  "Я",
  "Ч",
  "С",
  "М",
  "И",
  "Т",
  "Ь",
  "Б",
  "Ю",
];

for (let i = 0; i < names.length; i++) {
  names[i].addEventListener("keypress", function (event) {
    if (
      event.which !== 32 &&
      !russianAlphabet.includes(event.key.toUpperCase()) &&
      event.key !== "." &&
      event.key !== "," &&
      event.key !== "!" &&
      event.key !== "." &&
      event.key !== "?" &&
      event.key !== ":" &&
      event.key !== ";" &&
      event.key !== "-" &&
      event.key !== "(" &&
      event.key !== ")" &&
      event.key !== '"'
    ) {
      event.preventDefault();
    }
  });
}

for (let i = 0; i < amounts.length; i++) {
  amounts[i].addEventListener("keypress", function (event) {
    if (
      event.key !== "0" &&
      event.key !== "1" &&
      event.key !== "2" &&
      event.key !== "3" &&
      event.key !== "4" &&
      event.key !== "5" &&
      event.key !== "6" &&
      event.key !== "7" &&
      event.key !== "8" &&
      event.key !== "9"
    ) {
      event.preventDefault();
    }
  });
}

let isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

let appData = {
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  start: function () {
    appData.budget = +salaryAmount.value;
    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();
    appData.showResult();
  },
  showResult: function () {
    budgetMonthVal.value = appData.budgetMonth;
    budgetDayVal.value = appData.budgetDay;
    expensesMonthVal.value = appData.expensesMonth;
    additionalExpensesVal.value = appData.addExpenses.join(", ");
    additionalIncomeVal.value = appData.addIncome.join(", ");
    targetMonthVal.value = appData.getTargetMonth();
    incomePeriodVal.value = appData.calcPeriod();
    periodSelectRange.addEventListener("input", function () {
      incomePeriodVal.value = appData.calcPeriod();
    });
  },
  addExpensesBlock: function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.querySelectorAll("input")[0].value = "";
    cloneExpensesItem.querySelectorAll("input")[1].value = "";
    console.log("cloneExpensesItem.value: ", cloneExpensesItem.value);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plusExpenseBtn);
    expensesItems = document.querySelectorAll(".expenses-items");
    if (expensesItems.length === 3) {
      plusExpenseBtn.style.display = "none";
    }
  },
  addIncomeBlock: function () {
    let cloneIncomeItem = incomeItem[0].cloneNode(true);
    cloneIncomeItem.querySelectorAll("input")[0].value = "";
    cloneIncomeItem.querySelectorAll("input")[1].value = "";
    incomeItem[0].parentNode.insertBefore(cloneIncomeItem, plusIncomeBtn);
    incomeItem = document.querySelectorAll(".income-items");
    if (incomeItem.length === 3) {
      plusIncomeBtn.style.display = "none";
    }
  },
  getExpenses: function () {
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector(".expenses-title").value;
      let cashExpenses = item.querySelector(".expenses-amount").value;
      if (itemExpenses !== "" && cashExpenses !== "") {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  getIncome: function () {
    incomeItem.forEach(function (item) {
      let itemIncome = item.querySelector(".income-title").value;
      let cashIncome = item.querySelector(".income-amount").value;
      if (itemIncome !== "" && cashIncome !== "") {
        appData.income[itemIncome] = cashIncome;
      }
    });

    for (let key in appData.income) {
      appData.incomeMonth += +appData.income[key];
    }
  },
  getAddExpenses: function () {
    let addExpenses = additionalExpensesInput.value.split(",");
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== "") {
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function () {
    additionalIncomeInputs.forEach(function (item) {
      let itemValue = item.value.trim();
      if (itemValue !== "") {
        appData.addIncome.push(itemValue);
      }
    });
  },
  getExpensesMonth: function () {
    let sum = 0;
    for (let key in appData.expenses) {
      sum += +appData.expenses[key];
    }
    appData.expensesMonth = sum;
  },
  getBudget: function () {
    appData.budgetMonth =
      appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function () {
    return Math.ceil(targetAmount.value / appData.budgetMonth);
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
  getInfoDeposit: function () {
    appData.deposit = confirm("Есть ли у вас депозит в банке?");
    if (appData.deposit) {
      do {
        appData.percentDeposit = prompt("Какой годовой процент?");
      } while (!isNumber(appData.percentDeposit));
      do {
        appData.moneyDeposit = prompt("Какая сумма заложена?");
      } while (!isNumber(appData.moneyDeposit));
    }
  },
  calcPeriod: function () {
    return appData.budgetMonth * periodSelectRange.value;
  },
};
salaryAmount.addEventListener("input", function () {
  if (salaryAmount.value !== "") {
    countBtn.disabled = false;
  } else {
    countBtn.disabled = true;
  }
});
countBtn.addEventListener("click", appData.start);
plusExpenseBtn.addEventListener("click", appData.addExpensesBlock);
plusIncomeBtn.addEventListener("click", appData.addIncomeBlock);
periodSelectRange.addEventListener("input", function () {
  periodAmount.textContent = periodSelectRange.value;
});

// appData.getInfoDeposit();

// if (appData.period < 0) {
//   console.log("Цель не будет достигнута");
// } else {
//   console.log(
//     "Цель будет достигнута.\nВам потребуется " + appData.period + " месяцев."
//   );
// }

// let concatExpenses =
//   appData.addExpenses[0].charAt(0).toUpperCase() +
//   appData.addExpenses[0].slice(1);
// for (let i = 1; i < appData.addExpenses.length; i++) {
//   concatExpenses = concatExpenses.concat(
//     ", ",
//     appData.addExpenses[i].charAt(0).toUpperCase() +
//       appData.addExpenses[i].slice(1)
//   );
// }
// console.log(concatExpenses);