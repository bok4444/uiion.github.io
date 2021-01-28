// let R = 300 / 2;
// for(let d = 0; d < 60; ++d) {
//     let angle = (d / 60) * (2 * Math.PI);
//     let pX = Math.cos(angle) * R;
//     let pY = -Math.sin(angle) * R
//     let qX = 0.9 * pX;
//     let qY = 0.9 * pY
//     pX += R; pY += R;
//     qX += R; qY += R;
// }
window.onload = function(){
    window.setInterval(function(){
         var now = new Date();
          var clock = document.getElementById("clock");
        clock.innerHTML = now.toLocaleTimeString();
    }, 1000);
   };
function getRandom(number){
    return Math.round(number * Math.random());
};

 function getRandomColor(){

    var red = getRandom(255);
   var green = getRandom(255);
 var blue = getRandom(255);

  var color = "rgb(" + red + "," + green + "," + blue + ")";

  return color;
};

function clock_3(){

  var date    = new Date();
   var hours   = date.getHours();
  var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var clockHours   = document.getElementById("clockHours");
 var clockMinutes = document.getElementById("clockMinutes");
   var clockSeconds = document.getElementById("clockSeconds");

   if(hours < 10)
       hours = "0" + hours;
  if(minutes < 10)
     minutes = "0" + minutes;
  if(seconds < 10)
     seconds = "0" + seconds;
  
    clockHours.innerHTML    = hours;
    clockMinutes.innerHTML  = minutes;
  clockSeconds.innerHTML  = seconds;
  
    clockHours.style.color   = getRandomColor();
    clockMinutes.style.color = getRandomColor();
    clockSeconds.style.color = getRandomColor();

    setTimeout("clock_3()", 1000);
};