//Game bot 'Загадывание случайного числа от 1 до 100'
function userNumber() {
  let randNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randNumber);
  function inner() {
    let userInput = prompt("Угадай число от 1 до 100");
    if (userInput === null) {
      alert("Игра окончена");
    } else if (Number.isNaN(+userInput) || userInput.length === 0) {
      alert("Введи число!");
      inner();
    } else if (+userInput > randNumber) {
      alert("Загаданное число меньше");
      inner();
    } else if (+userInput < randNumber) {
      alert("Загаданное число больше");
      inner();
    } else if (+userInput === randNumber) {
      alert("Поздравляю, Вы угадали!!!");
    }
  }
  return inner;
}

let getResult = userNumber();
getResult();
console.dir(getResult);