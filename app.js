import { sec, setDate, setTime, showTime, showWeekday } from './clock.js';
import { updateCounter, createEvent } from './countdown.js';

//create a event listener to the form add Event
const eventForm = document.querySelector(".eventAdder");
//execute the createEvent function into countdown module
eventForm.onsubmit = createEvent;

//fucntion that update all the page, clock and event countdown
function updatePage() {
  //header clock
  setDate();
  setTime();
  showTime();
  showWeekday();

  //countdown
  updateCounter();
}

//update page one time during render, this prevent the clock beeing paused in page start.
updatePage();

//infinite loop for updating the page every second
//the const sec is defined at top of clock js
setInterval(updatePage, sec)
