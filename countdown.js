import { getActTime } from './clock.js';

// all the html structures that we will manipulate
const daysFullText = document.querySelector(".counter");
const daysHolder = document.querySelector(".days");
const titleHolder = document.querySelector(".event_title");

//here our current event for the countdown will be stored
// we will store two properties a title (a string inputed by user)
// and the time, that will be stored as unix miliseconds
//the zero  time at unix datetime is based on january 01, 1970 00:00:00 UTC
const event = {}

// store the event
export function createEvent(eventData) {
  //get the data inputed
  let title = document.querySelector(".eventTitle");
  let date = document.querySelector(".eventDate");
  let time = document.querySelector(".eventTime");
  
  //set the event title
  event.title = title.value;

  //sum the date and time unix like (miliseconds) and set the time
  event.time = date.valueAsNumber + time.valueAsNumber;
  eventData.preventDefault();
}

// update the counter (called at app,js on updatePage main)
export function updateCounter() {
  //get the difference of miliseconds between event and today
  var timeDifference = getTimeDifference();

  // if the difference is equal or less  than 0 it is now or already occurred
  if (timeDifference <= 0) {
    // we just set the counter to "it's now" and set the event title
    daysFullText.innerHTML = "<strong class='now'>É AGORA!</strong>";
    titleHolder.textContent = event.title;

    //stop the function, the application gets faster preventing delays what is very important to a clock
    return;
  }

  // convert the miliseconds to days
  let daysDifference = Math.floor(timeDifference / 8.64e+7);

  //if days is at least 1:
  if (daysDifference > 0) {
    //show the days difference, title and stop the function
    daysHolder.textContent = `${daysDifference} dias`;
    titleHolder.textContent = event.title;
    return;
  }

  //convert the miliseconds to minutes:
  let minutesDifference = Math.floor(timeDifference / 60000);

  // verify if it already rest some minutes
  if (minutesDifference > 0) {
    //  show the minutes difference, the title and break the function
    daysHolder.textContent = `${minutesDifference + 1} minutos`;
    titleHolder.textContent = event.title;
    return;
  }

  //convert miliseconds to seconds
  let secondsDifference = Math.floor(timeDifference / 1000);

  // that verification is just display the standart event if event does not exist
  // if already have some seconds 
  if (secondsDifference > 0) {
    //show seconds differece and title
    daysHolder.textContent = `${secondsDifference} segundos`;
    titleHolder.textContent = event.title;
  }
}

// get the difference of miliseconds between the event time and actuao time
export function getTimeDifference () {
  // get the current time in miliseconds
  let dateMs = getActTime().getTime();

  //return event time - current time
  return event.time - dateMs;
}
