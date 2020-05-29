const sec = 1000;

//store complete datetime without formatation
var today;

//store date
let date = {}

//store time
let time = {}

// array that stores the weekdays, act  like a dictionary
const daysList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//store the html structures that we will manipulate
const week_html = document.querySelector(".weekday");
const date_html = document.querySelector(".date");
const time_html = document.querySelector(".time");

// set and show the actual date at page header
function setDate() {
  //get the actual date and store  it
  today = getActTime();
  
  date.day = today.getDate(); 
  date.month = today.getMonth();
  date.year = today.getFullYear();
  
  //format and show date
  date_html.innerHTML = date.day + "/" + date.month + "/" + date.year;
}

//create a datetime instance
function getActTime() {
 let actDate = new Date();
 return actDate;
}

//stores the actual time  at time  object
function setTime() {
  time.hour = today.getHours();
  time.minutes = today.getMinutes();
  time.seconds = today.getSeconds();
}

//show the current time on page header
function showTime() {
  let hour = time.hour;
  let minutes = time.minutes;
  let seconds = time.seconds;
  
  //add left zero if doe's not exist
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  
  //format and show time
  time_html.innerHTML = hour + ":" + minutes + ":" + seconds
}

//get the week day from today object and uses it like index for our dictionary
//show it on page header
const showWeekday = () => {
  week_html.innerHTML = daysList[today.getDay()];
}

//export all functions and the const
export { sec, setDate, getActTime, setTime, showTime, showWeekday };