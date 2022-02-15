//Date
function formatDate(date = new Date()) {
  var day = date.getDate();
  var mouth = date.getMonth() + 1;
  var year = date.getFullYear();
  if(day.toString().length == 1) day = '0' + day;
  if(mouth.toString().length == 1) mouth = '0' + mouth;
  date = day+'/'+mouth+'/'+year
  document.getElementById('date').innerHTML = date;
}

//Hour
function formatHour(hours = new Date()) {
    var hour = hours.getHours()
    var minutes = hours.getMinutes()
    var seconds = hours.getSeconds()
    if(hour.toString().length == 1) hour = '0'+ hour
    if(minutes.toString().length == 1) minutes = '0'+ minutes
    if(seconds.toString().length == 1) seconds = '0'+ seconds
    var Hour = hour+':'+minutes+':'+seconds;
    document.getElementById('hour').innerHTML = Hour
}


//date and hour
function initTime(){
  setInterval(formatHour, 1000)
  setInterval(formatDate, 1000)
}


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
