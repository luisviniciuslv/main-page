const gifsmorning = [
  "https://cdn.discordapp.com/attachments/916375412949528618/943541215549325342/O_Cotidiano_Japones_ilustrado_em_8-bits_-_por_Toyoi_Yuuta_1.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943541215910060032/9dZzeGS_1.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943541216421761034/56-569762_8-bit-gif.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943541216623067146/d45afe4c4a055997e4f9b570c8f598dd.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943541216946053170/d2519f97a780645b9b5335c3460ce25a.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943541217248051240/FQjMahg.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943541217805881354/gif-2.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943541218107850792/gif-15.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943541218476961842/MI721uZ.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943541298416201798/zQHqGlT.gif"
]

const gifsafternoon = [
  "https://cdn.discordapp.com/attachments/916375412949528618/943541914878218330/a81de3c3bfa8b6e8951d5d31f1f63aa4.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943542005374525530/93c094aea344ea0f12a4103044762ae5.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943542088803450951/Toyoi-8Bit-Odin-Sphere.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943542174514053120/X2mgz1R.gif",
]

const gifsnight = [
  "https://cdn.discordapp.com/attachments/916375412949528618/943332324311986246/053f8857542627a44b4788f18e4fb27c.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943332324756586516/76b4645640120014ba9c4fb26dbd40fd.gif", 
  "https://cdn.discordapp.com/attachments/916375412949528618/943332325175988264/16895b231b6da505e2e4acef02a3c1fe.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943332325616402523/adfccd6a72515359c1c283f912b67616.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943332326178422874/e4e11649ebd8e4acc7a0700d99cb90c9.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943332326513987604/f41bfffea7349d7a537c8a2c2ab28408.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943332327017316392/pX3dy3V.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943333889387159592/tumblr_o1bl5mipVV1trwxuqo1_1280.gif",
  "https://cdn.discordapp.com/attachments/916375412949528618/943332327344451664/tumblr_c0d8f2d80b022e197ceb75edc3fe2457_961d486f_1280.gif"
]

if (formatHour() >= parseInt(05) || formatHour() <= parseInt(12)){
  const numbersgifs = Math.floor(Math.random() * 10);
  gif = gifsmorning[parseInt(numbersgifs)];
  body.style.backgroundImage=`url(${gif})`
}

if (formatHour() >= parseInt(13) || formatHour() <= parseInt(18)){
  const numbersgifs = Math.floor(Math.random() * 4);
  gif = gifsafternoon[parseInt(numbersgifs)];
  body.style.backgroundImage=`url(${gif})`
}

if (formatHour() >= parseInt(19) || formatHour() <= parseInt(04)){
  const numbersgifs = Math.floor(Math.random() * 8);
  gif = gifsnight[parseInt(numbersgifs)];
  body.style.backgroundImage=`url(${gif})`
}

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
    return parseInt(hour)
}

//date and hour
function initTime(){
  setInterval(formatHour, 1000)
  setInterval(formatDate, 1000)
}

// Adjust background
// meuStorage = localStorage;
// meuStorage.getItem('reso') ? height = parseInt(meuStorage.getItem('reso')) : height = 85
// body.style.height = height + 'vh';

// function downFunction(){
//   height -= 2
//   body.style.height = height + 'vh';
//   localStorage.setItem('reso', height);  
//  }

// function upFunction(){
//   height += 2
//   body.style.height = height + 'vh';
//   localStorage.setItem('reso', height);  
// }
