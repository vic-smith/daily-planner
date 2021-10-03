var currentDay = $("#currentDay")
var momentDate = moment().format("MMM Do YYYY")
var hour = moment().hour(); // Number
var timeEl = "9 10 11 12 13 14 15 16 17";
var idList = timeEl.split(" ");
var button = document.querySelectorAll('button')
//var text = document.getElementById("").value
currentDay.text(momentDate);


let events = {};

function saveEvent() {
  let event = 
  document.getElementById("9").value
  
  //events.push(event);

  localStorage.setItem("events", JSON.stringify(event));
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
   text = JSON.parse(localStorage.getItem("events"));
};


setInterval(function () {
  timeAdjust();
  console.log("ran")
}, 1000 * 60);

timeAdjust();





