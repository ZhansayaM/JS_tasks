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

let incomeItem = document.querySelectorAll(".income-items");
let expensesItems = document.querySelectorAll(".expenses-items");

let salaryAmount = document.querySelector(".salary-amount");
let incomeTitle = document.querySelector(".income-title");
let incomeAmount = document.querySelector(".income-amount");
let additionalIncomeInput1 = document.querySelectorAll(".additional_income-item")[0];
let additionalIncomeInput2 = document.querySelectorAll(".additional_income-item")[1];
let expensesTitle = document.querySelector(".expenses-title");
let expensesAmount = document.querySelector(".expenses-amount");
let additionalExpensesInput = document.querySelector(
  ".additional_expenses-item"
);
let targetAmount = document.querySelector(".target-amount");

let depositCheckboxInput = document.querySelector("#deposit-check");
let depositAmount = document.querySelector(".deposit-amount");
let depositPercent = document.querySelector(".deposit-percent");
let periodSelectRange = document.querySelector(".period-select");
let periodAmount = document.querySelector(".period-amount");

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
    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.showResult();
    console.log(this);
    this.hide();
  },
  hide: function () {
    let textInputs = document.querySelectorAll('[type="text"]');
    textInputs.forEach(function(item){
      item.disabled = true;
    });
    countBtn.textContent = 'Сбросить';
    countBtn.addEventListener('click', this.reset);
  },
  reset: function(){
    console.log('reset');
    let inputs = document.querySelectorAll('input');
    inputs.forEach(function(item){
      if (item === periodSelectRange){
        item.value = 1;
      } else{
        item.value = '';
        item.disabled = false;
      }
    })

  },
  showResult: function () {
    budgetMonthVal.value = this.budgetMonth;
    budgetDayVal.value = this.budgetDay;
    expensesMonthVal.value = this.expensesMonth;
    additionalExpensesVal.value = this.addExpenses.join(", ");
    additionalIncomeVal.value = this.addIncome.join(", ");
    targetMonthVal.value = this.getTargetMonth();
    incomePeriodVal.value = this.calcPeriod();
    periodSelectRange.addEventListener("input", function () {
      incomePeriodVal.value = this.calcPeriod();
    });
  },
  addExpensesBlock: function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plusExpenseBtn);
    expensesItems = document.querySelectorAll(".expenses-items");
    if (expensesItems.length === 3) {
      plusExpenseBtn.style.display = "none";
    }
  },
  addIncomeBlock: function () {
    let cloneIncomeItem = incomeItem[0].cloneNode(true);
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
        this.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  getIncome: function () {
    incomeItem.forEach(function (item) {
      let itemIncome = item.querySelector(".income-title").value;
      let cashIncome = item.querySelector(".income-amount").value;
      if (itemIncome !== "" && cashIncome !== "") {
        this.income[itemIncome] = cashIncome;
      }
    });

    for (let key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  },
  getAddExpenses: function () {
    let addExpenses = additionalExpensesInput.value.split(",");
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== "") {
        this.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function () {
    additionalIncomeInputs.forEach(function (item) {
      let itemValue = item.value.trim();
      if (itemValue !== "") {
        this.addIncome.push(itemValue);
      }
    });
  },
  getExpensesMonth: function () {
    let sum = 0;
    for (let key in this.expenses) {
      sum += +this.expenses[key];
    }
    this.expensesMonth = sum;
  },
  getBudget: function () {
    this.budgetMonth =
      this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  },
  getTargetMonth: function () {
    return Math.ceil(targetAmount.value / this.budgetMonth);
  },
  getStatusIncome: function () {
    if (this.budget > 1200) {
      return "У вас высокий уровень дохода";
    } else if (this.budget > 600 && this.budget <= 1200) {
      return "У вас средний уровень дохода";
    } else if (this.budget <= 600 && this.budget > 0) {
      return "К сожалению у вас уровень дохода ниже среднего";
    } else if (this.budget < 0) {
      return "Что то пошло не так";
    }
  },
  getInfoDeposit: function () {
    this.deposit = confirm("Есть ли у вас депозит в банке?");
    if (this.deposit) {
      do {
        this.percentDeposit = prompt("Какой годовой процент?");
      } while (!isNumber(this.percentDeposit));
      do {
        this.moneyDeposit = prompt("Какая сумма заложена?");
      } while (!isNumber(this.moneyDeposit));
    }
  },
  calcPeriod: function () {
    return this.budgetMonth * periodSelectRange.value;
  },
};
salaryAmount.addEventListener("input", function () {
  if (salaryAmount.value !== "") {
    countBtn.disabled = false;
  } else {
    countBtn.disabled = true;
  }
});

countBtn.addEventListener("click", appData.start.bind(appData));
plusExpenseBtn.addEventListener(
  "click",
  appData.addExpensesBlock.bind(appData)
);
plusIncomeBtn.addEventListener("click", appData.addIncomeBlock.bind(appData));
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
