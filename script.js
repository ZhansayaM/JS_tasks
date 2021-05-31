"use strict";

let lang = prompt('Please, enter the language code (en).\nПожалуйста, введите код языка (ru).');

//task1.1
if (lang === 'ru'){
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang === 'en'){
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else {
    console.log('Incorrect code! Неправильный код!');
}

//task1.2
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

//task1.3
let obj = {
    'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
};
console.log(String(obj[lang]));

//task2
let namePerson = prompt('Write the name of the person');
namePerson === 'Артем' ? console.log('директор') : namePerson === 'Максим' ? console.log('преподаватель') : console.log('студент');