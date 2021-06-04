let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (let item of week){
  if (item === 'Saturday' || item === 'Sunday') item = item.italics();
  let day = new Date().getDay();
  if (item === week[day-1]) item = item.bold();
  console.log(item);
}