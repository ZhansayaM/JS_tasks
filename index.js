const count = document.getElementById('start');
const plusIncome = document.getElementsByTagName('button')[0];
const plusExpense = document.getElementsByTagName('button')[1];
const depositCheck = document.querySelector('#deposit-check');
const additionalIncome = document.querySelectorAll('.additional_income-item');
const rightSideValues = document.querySelectorAll('[class$="-value"]');
const allInputs = document.querySelectorAll('input');
let inputs = [];
for (let i = 0; i < 13; i++){
    inputs[i] = allInputs[i];
}