const secund = document.querySelector(".secund");
const minute = document.querySelector(".minute");
const hours = document.querySelector(".hours");

let id = setInterval(() => {
  const clockDate = new Date();

  const clockSecund = clockDate.getSeconds();
  const clockMinute = clockDate.getMinutes();
  const clockHour = clockDate.getHours();
  
  const newHours = clockHour * 30 + clockMinute * 0.5;
  
  secund.style.transform = `rotate(${clockSecund * 6}deg)`;
  minute.style.transform = `rotate(${clockMinute * 6}deg)`;
  hours.style.transform = `rotate(${newHours}deg)`;
}, 1000);