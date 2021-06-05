let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let day = new Date().getDay();

for (let item of week){
let bold = 0, italics = 0;
  if (item === week[day]) bold = 1;
  if (item === 'Saturday' || item === 'Sunday') italics = 1;
  if (bold === 1) item = '<b>' + item + '</b>';
  if (italics === 1) item = '<i>' + item + '</i>';
  document.write(item + '<br>');
}