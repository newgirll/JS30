
function setTime(){
   const timeNow = new Date();
   const seconds = timeNow.getSeconds();
   const secondsHand = document.querySelector(".second-hand");
   const secondDegree = ((seconds / 60) * 360) + 90;
   secondsHand.style.transform = `rotate(${secondDegree}deg)`;

   const minutes = timeNow.getMinutes();
   const minuteDegree = ((minutes / 60) * 360) + 90;
   const minuteHand = document.querySelector('.min-hand');
   minuteHand.style.transform = `rotate(${minuteDegree}deg)`;


   const hour = timeNow.getHours();
   const hourDegree = ((hour / 12) * 360) + 90;
   const hourHand = document.querySelector(".hour-hand");
   hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval((setTime),1000);