//Game bot 'Загадывание случайного числа от 1 до 100'
function userNumber() {
    let count = 10;
    let randNumber = Math.floor(Math.random() * 100 + 1);
    console.log(randNumber);
    function inner() {
      let userInput = prompt("Угадай число от 1 до 100");
      if (count <= 1) {
        if (confirm("Попытки закончились, хотите сыграть еще?")) userNumber();
      } else if (userInput === null) {
        alert("Игра окончена");
      } else if (Number.isNaN(+userInput) || userInput.length === 0) {
        alert("Введи число!");
        inner();
      } else if (+userInput > randNumber) {
        count--;
        alert("Загаданное число меньше, осталось попыток " + count);
        inner();
      } else if (+userInput < randNumber) {
        count--;
        alert("Загаданное число больше, осталось попыток " + count);
        inner();
      } else if (+userInput === randNumber) {
        if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) userNumber();
      }
    }
    return inner;
  }
  
  let getResult = userNumber();
  getResult();
  console.dir(getResult);