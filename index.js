setInterval(function () {
  let current_time = new Date();
  let month = [
    "января",
    "февраля",
    "мара",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ][current_time.getMonth()];
  let dayOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ][current_time.getDay()];

  //1a
  function hourName(hour) {
    hour = String(hour);
    if (
      hour === "0" ||
      hour === "11" ||
      hour === "12" ||
      hour === "13" ||
      hour === "14" ||
      hour === "15" ||
      hour === "16" ||
      hour === "17" ||
      hour === "18" ||
      hour === "19" ||
      hour === "20"
    ) {
      return "часов";
    }
    hour = hour.slice(-1);
    if (hour === "1") {
      return "час";
    } else if (hour === "2" || hour === "3" || hour === "4") {
      return "часа";
    } else {
      return "часов";
    }
  }

  function minuteName(minute) {
    minute = String(minute);
    if (
      minute === "0" ||
      minute === "11" ||
      minute === "12" ||
      minute === "13" ||
      minute === "14" ||
      minute === "15" ||
      minute === "16" ||
      minute === "17" ||
      minute === "18" ||
      minute === "19" ||
      minute === "20"
    ) {
      return "минут";
    }
    minute = minute.slice(-1);
    if (minute === "1") {
      return "минута";
    } else if (minute === "2" || minute === "3" || minute === "4") {
      return "минуты";
    } else {
      return "минут";
    }
  }

  function secondName(second) {
    second = String(second);
    if (
      second === "0" ||
      second === "11" ||
      second === "12" ||
      second === "13" ||
      second === "14" ||
      second === "15" ||
      second === "16" ||
      second === "17" ||
      second === "18" ||
      second === "19" ||
      second === "20"
    ) {
      return "секунд";
    }
    second = second.slice(-1);
    if (second === "1") {
      return "секунда";
    } else if (second === "2" || second === "3" || second === "4") {
      return "секунды";
    } else {
      return "секунд";
    }
  }

  let date =
    "Сегодня " +
    dayOfWeek +
    ", " +
    current_time.getDate() +
    " " +
    month +
    " " +
    current_time.getFullYear() +
    " года, " +
    current_time.getHours() +
    " " +
    hourName(current_time.getHours()) +
    " " +
    current_time.getMinutes() +
    " " +
    minuteName(current_time.getMinutes()) +
    " " +
    current_time.getSeconds() +
    " " +
    secondName(current_time.getSeconds());

  //////////////////////////////////////////////////////////////////////
  //1b
  function addZero(num) {
    let newNum;
    console.log(num);
    if (Math.floor(num / 10) === 0) {
      newNum = "0" + num;
      console.log(newNum);
    } else {
      return num;
    }
    return newNum;
  }

  let new_date =
    addZero(current_time.getDate()) +
    "." +
    addZero(current_time.getMonth() + 1) +
    "." +
    addZero(current_time.getFullYear()) +
    " - " +
    addZero(current_time.getHours()) +
    ":" +
    addZero(current_time.getMinutes()) +
    ":" +
    addZero(current_time.getSeconds());
  document.body.innerHTML = "";
  document.write(date);
  document.write("<br><br>");
  document.write(new_date);
}, 1000);
