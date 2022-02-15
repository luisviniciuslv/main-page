var d = new Date();
var mouth = new Date(d).getMonth() + 1
const date = d.toDateString()
const date2 = d.getDate()+'/'+mouth +'/'+d.getFullYear()
let body = document.getElementById('body');
meuStorage = localStorage;
document.getElementById('date').innerHTML = date2

meuStorage.getItem('reso') ? height = parseInt(meuStorage.getItem('reso')) : height = 100
body.style.height = height + 'vh';
function downFunction(){
  height -= 3
  body.style.height = height + 'vh';
  localStorage.setItem('reso', height);  
 }
function upFunction(){
  height += 3
  body.style.height = height + 'vh';
  localStorage.setItem('reso', height);  
}
