var d = new Date();
var mouth = new Date(d).getMonth() + 1
const date = d.toDateString()
const date2 = d.getDate()+'/' + mouth + '/'+d.getFullYear()
 
 document.getElementById('date').innerHTML = date2

 