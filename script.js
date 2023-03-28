// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

function doDate() {
  var str = "";

  var days = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  var months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );

  var now = new Date();
  let hours = now.getHours();
  hours %= 12;
  hours = hours || 12;
  str +=
    days[now.getDay()] +
    ", " +
    now.getDate() +
    " " +
    months[now.getMonth()] +
    " " +
    now.getFullYear() +
    " " +
    "at" +
    " " +
    now.getHours() +
    ":" +
    now.getMinutes() +
    ":" +
    now.getSeconds();
    document.getElementById("currentDay").innerHTML = str;
}

setInterval(doDate, 1000);

const times = document.querySelectorAll(".description");
const btns = document.querySelectorAll(".saveBtn");
console.log(btns);
let time;
let btn;
let textareaValue;
for (let i = 0; i < times.length; i++) {
  time = times[i].value;
}








// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
// });
