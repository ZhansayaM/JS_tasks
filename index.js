const countBtn = document.getElementById('start');
const plusIncomeBtn = document.getElementsByTagName('button')[0];
const plusExpenseBtn = document.getElementsByTagName('button')[1];
const depositCheckbox = document.querySelector('#deposit-check');
const additionalIncomeInputs = document.querySelectorAll('.additional_income-item');

const budgetMonthVal = document.getElementsByClassName('budget_month-value')[0];
const budgetDayVal = document.getElementsByClassName('budget_day-value')[0];
const expensesMonthVal = document.getElementsByClassName('expenses_month-value')[0];
const additionalIncomeVal = document.getElementsByClassName('additional_income-value')[0];
const additionalExpensesVal = document.getElementsByClassName('additional_expenses-value')[0];
const incomePeriodVal = document.getElementsByClassName('income_period-value')[0];
const targetMonthVal = document.getElementsByClassName('target_month-value')[0];

const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-title');
const incomeAmount = document.querySelector('.income-amount');
const additionalIncomeInput1 = document.querySelector('.additional_income-item');
const additionalIncomeInput2 = document.querySelector('.additional_income-item');
const expensesTitle = document.querySelector('.expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');
const additionalExpensesInput = document.querySelector('.additional_expenses-item');
const depositCheckboxInput = document.querySelector('#deposit-check');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const targetAmount = document.querySelector('.target-amount');
const periodSelectRange = document.querySelector('.period-select');