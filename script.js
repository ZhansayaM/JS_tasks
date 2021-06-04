let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (let item of week){
  let bold = 0, italics = 0, day = new Date().getDay();
  if (item === week[day-1]) bold = 1;
  if (item === 'Saturday' || item === 'Sunday') italics = 1;
  if (bold === 1) item = item.bold();
  if (italics === 1) item = item.italics();
  document.write(item + '<br>');
  console.log(item);
}