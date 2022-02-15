//Date
function formatDate(date = new Date()) {
  var day = date.getDate();
  var mouth = date.getMonth() + 1;
  var year = date.getFullYear();
  if(day.toString().length == 1) day = '0' + day;
  if(mouth.toString().length == 1) mouth = '0' + mouth;
  return day+'/'+mouth+'/'+year
}
document.getElementById('date').innerHTML = formatDate()
//Hour
function formatHour(hours = new Date()) {
  var hour = hours.getHours()
  var minutes = hours.getMinutes()

  if(hour.toString().length == 1) hour = '0'+ hour
  if(minutes.toString().length == 1) minutes = '0'+ minutes
  return hour+':'+minutes;
}
document.getElementById('hour').innerHTML = formatHour()

//Adjust background
meuStorage = localStorage;
meuStorage.getItem('reso') ? height = parseInt(meuStorage.getItem('reso')) : height = 100
body.style.height = height + 'vh';
function downFunction(){
  height -= 2
  body.style.height = height + 'vh';
  localStorage.setItem('reso', height);  
 }
function upFunction(){
  height += 2
  body.style.height = height + 'vh';
  localStorage.setItem('reso', height);  
}
