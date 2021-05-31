"use strict";

let lang = prompt('Please, enter the language code (en).\nПожалуйста, введите код языка (ru).');

if (lang === 'ru'){
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang === 'en'){
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else {
    console.log('Incorrect code! Неправильный код!');
}

switch(lang) {
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    default:
        console.log('Incorrect code! Неправильный код!');
}

let days = [['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'], ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']];
if (lang === 'ru'){
    console.log(String(days[0]));
} else if (lang === 'en'){
    console.log(String(days[1]));
}

let namePerson = prompt('Write the name of the person');
let who = namePerson === 'Артем' ? console.log('директор') : namePerson === 'Максим' ? console.log('преподаватель') : console.log('студент');