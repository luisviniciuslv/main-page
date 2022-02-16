const gifsmorning = [
  "https://i1.wp.com/www.artescetera.com.br/wp-content/uploads/2017/10/gif-2.gif?resize=500%2C288",
  "https://i.pinimg.com/originals/d2/51/9f/d2519f97a780645b9b5335c3460ce25a.gif",
  "https://i.pinimg.com/originals/d4/5a/fe/d45afe4c4a055997e4f9b570c8f598dd.gif",
  "https://www.teahub.io/photos/full/56-569762_8-bit-gif.gif",
  "https://i0.wp.com/www.artescetera.com.br/wp-content/uploads/2017/10/gif-15.gif?resize=500%2C288",
  "https://forum.politz.com.br/proxy.php?image=https%3A%2F%2Fi.imgur.com%2FFQjMahg.gif&hash=72ff9b44ea1d48bf27d391cb4e244781",
  "https://3.bp.blogspot.com/-NLeOL1ZUgEg/WiAzRHeS1mI/AAAAAAAAXV0/FxYZyh8y-eojfI0pvDrNXvKX7CUTpuBvgCLcBGAs/s640/O%2BCotidiano%2BJapon%25C3%25AAs%2Bilustrado%2Bem%2B8-bits%2B-%2Bpor%2BToyoi%2BYuuta%2B%25281%2529.gif",
  "https://forum.politz.com.br/proxy.php?image=https%3A%2F%2Fi.imgur.com%2FzQHqGlT.gif&hash=c5ad00eae892a95a2ef7f500f9900b41",
  "https://forum.politz.com.br/proxy.php?image=https%3A%2F%2Fi.imgur.com%2F9dZzeGS.gif&hash=83ea4db7f7e988887ecb39b59bb909dc",
  "https://forum.politz.com.br/proxy.php?image=https%3A%2F%2Fi.imgur.com%2FMI721uZ.gif&hash=1127c0fe1655fb27232b8f176c20dae7"
]

const gifsafternoon = [
  "https://i.pinimg.com/originals/a8/1d/e3/a81de3c3bfa8b6e8951d5d31f1f63aa4.gif", //0
  "https://i.pinimg.com/originals/93/c0/94/93c094aea344ea0f12a4103044762ae5.gif", //1
  "https://personacentral.com/wp-content/uploads/2016/01/Toyoi-8Bit-Odin-Sphere.gif", //2
  "https://forum.politz.com.br/proxy.php?image=https%3A%2F%2Fi.imgur.com%2FX2mgz1R.gif&hash=9057beb37af6298587ae5931a72939fc", //3
  "https://forum.politz.com.br/proxy.php?image=https%3A%2F%2Fi.imgur.com%2FyL0TVGk.gif&hash=67cdcc0f4fa97332d3ca939d8e8801f7" //4
]

const gifsnight = [
  "https://cdn.discordapp.com/attachments/916375412949528618/943332324311986246/053f8857542627a44b4788f18e4fb27c.gif", //0
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
  const numbersgifs = Math.floor(Math.random() * 5);
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

//Adjust background
meuStorage = localStorage;
meuStorage.getItem('reso') ? height = parseInt(meuStorage.getItem('reso')) : height = 85
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
