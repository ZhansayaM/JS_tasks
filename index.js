const book1 = document.getElementsByClassName('book')[1];
const book2 = document.getElementsByClassName('book')[0];
const book3 = document.getElementsByClassName('book')[4];
const book4 = document.getElementsByClassName('book')[3];
const book6 = document.getElementsByClassName('book')[2];
const book5 = document.getElementsByClassName('book')[5];

book2.before(book1);
book6.before(book3);
book6.before(book4);
book6.before(book5);

document.body.style.backgroundImage = 'url(./image/url(./image/open_book.jpg))';

book3.querySelector('h2 > a').textContent = 'Книга 3. this и Прототипы Объектов';

document.querySelector('.adv').remove();

const book2_chapter1 = book2.querySelectorAll('ul > li')[3];
const book2_chapter2 = book2.querySelectorAll('ul > li')[6];
const book2_chapter3 = book2.querySelectorAll('ul > li')[8];
const book2_chapter4 = book2.querySelectorAll('ul > li')[4];
const book2_chapter5 = book2.querySelectorAll('ul > li')[5];
const book2_additionA = book2.querySelectorAll('ul > li')[7];
const book2_additionB = book2.querySelectorAll('ul > li')[9];
const book2_additionC = book2.querySelectorAll('ul > li')[2];
const book2_additionD = book2.querySelectorAll('ul > li')[10];

book2_additionC.before(book2_chapter1);
book2_additionC.before(book2_chapter2);
book2_additionC.before(book2_chapter3);
book2_additionC.before(book2_chapter4);
book2_additionC.before(book2_chapter5);
book2_additionC.before(book2_additionA);
book2_additionC.before(book2_additionB);

const book5_chapter1 = book5.querySelectorAll('ul > li')[9];
const book5_chapter2 = book5.querySelectorAll('ul > li')[3];
const book5_chapter3 = book5.querySelectorAll('ul > li')[4];
const book5_chapter4 = book5.querySelectorAll('ul > li')[2];
const book5_chapter5 = book5.querySelectorAll('ul > li')[6];
const book5_chapter6 = book5.querySelectorAll('ul > li')[7];
const book5_additionA = book5.querySelectorAll('ul > li')[5];
const book5_additionB = book5.querySelectorAll('ul > li')[8];
const book5_additionC = book5.querySelectorAll('ul > li')[10];

book5_chapter4.before(book5_chapter1);
book5_chapter4.before(book5_chapter2);
book5_chapter4.before(book5_chapter3);
book5_additionA.before(book5_chapter5);
book5_additionA.before(book5_chapter6);

const book6_chapter8 = document.createElement('li');
book6_chapter8.textContent = 'Глава 8: За пределами ES6';
book6.querySelector('ul').append(book6_chapter8);
const book6_additionA = book6.querySelectorAll('ul > li')[9];
book6_additionA.before(book6_chapter8);