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

const salaryAmount = document.querySelectorAll('input')[0];
const incomeTitle = document.querySelectorAll('input')[1];
const incomeAmount = document.querySelectorAll('input')[2];
const additionalIncomeInput1 = document.querySelectorAll('input')[3];
const additionalIncomeInput2 = document.querySelectorAll('input')[4];
const expensesTitle = document.querySelectorAll('input')[5];
const expensesAmount = document.querySelectorAll('input')[6];
const additionalExpensesInput = document.querySelectorAll('input')[7];
const depositCheckboxInput = document.querySelectorAll('input')[8];
const depositAmount = document.querySelectorAll('input')[9];
const depositPercent = document.querySelectorAll('input')[10];
const targetAmount = document.querySelectorAll('input')[11];
const periodSelectRange = document.querySelectorAll('input')[12];