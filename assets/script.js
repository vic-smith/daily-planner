var currentDay = $("#currentDay")
var momentDate = moment().format("MMM Do YYYY")
var hour = moment().hour(); // Number
var timeEl = "9 10 11 12 13 14 15 16 17";
var idList = timeEl.split(" ");
var button = document.querySelectorAll('button')

currentDay.text(momentDate);

function loadEv() {
  text = JSON.parse(localStorage.getItem("events"));
  document.querySelector("textarea").value = text;
  console.log(text)
}

let events = [];

function saveEvent() {
  let event = 
  document.querySelector("textarea").value;
  
  events.push(event);

  localStorage.setItem("events", JSON.stringify(events));
}




document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    saveEvent();
    console.log("click");
  })
})


function timeAdjust() {

  for (var i = 0; i < idList.length; i++) {
    time = document.getElementById(idList[i]);


    if (hour > idList[i]) {
      time.classList.add("past");
    }
    else if (hour < idList[i]) {
      time.classList.add("future");
    }
    else {
      time.classList.add("present");
    }

  }
  
};


setInterval(function () {
  timeAdjust();
  console.log("ran")
}, 1000 * 60);

timeAdjust();

loadEv();
