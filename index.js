'use strict';

let button = document.querySelector('button');
button.addEventListener('click', function(){
  let colorText = document.querySelector('#color');
  let hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random()*16)];
    console.log(color);
  }
  document.body.style.backgroundColor = color;
  colorText.textContent = color;
})