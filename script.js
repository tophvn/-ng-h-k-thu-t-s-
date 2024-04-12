//js for switch clock format
const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
  formatSwitchBtn.classList.toggle("active");

  let formatValue = formatSwitchBtn.getAttribute("date-format");

  if (formatValue === "12") {
    formatSwitchBtn.setAttribute("date-format", "24");
  }
  else {
    formatSwitchBtn.setAttribute("date-format", "12");
  }
});


//Get Current Time In Javascript
function clock() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let period = "AM";

  //set the time period
  if(hours >= 12) {
    period = "PM";
  }

  //set 12 hour clock format
  let formatValue = formatSwitchBtn.getAttribute("date-format");

  if (formatValue === "12") {
    hours = hours > 12 ? hours % 12 : hours;
  }

  //add 0 for the value lower than 10
  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }


  document.querySelector('.hours').innerHTML = hours;
  document.querySelector('.minutes').innerHTML = minutes;
  document.querySelector('.seconds').innerHTML = seconds;
  document.querySelector('.period').innerHTML = period;
}

let updateClock = setInterval(clock, 1000);

//get the date in javacript
const currentDate = new Date();

const monthName = currentDate.toLocaleString("default", {month: "short"});
const dayName = currentDate.toLocaleString("default", {weekday: "long"});
const dayNumber = currentDate.getDate();
const year = currentDate.getFullYear();

document.querySelector('.month-name').innerHTML = monthName;
document.querySelector('.day-name').innerHTML = dayName;
document.querySelector('.day-number').innerHTML = dayNumber;
document.querySelector('.year').innerHTML = year;


//js for dot menu toggle
const dotmenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");
dotmenuBtn.addEventListener("click", () => {
  dotMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (e.target.id !== "active-menu") {
    dotMenu.classList.remove("active");
  }
});

