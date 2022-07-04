// Time--------------------------------------------------------------------------------------------
var today = moment();
// This code posts current time on my HTML page.
$("#1a").text(today.format("MMM Do, YYYY HH:mm"));
// Moment functions--------------------------------------------------------------------------------
var format = 'HH:mm'
// var time is current time
var time = moment();
// Timeblock 1-----------------------------------------------------------------------------------
// Function to color code my timeblocks in relation to time: grey(#A9A9A9) = past, red(#CD5C5C) = present, green(#32CD32) = future.
function one () {
beforeTime = moment('09:00', format),
afterTime = moment('10:00', format);
if (time.isBetween(beforeTime, afterTime)) {
document.getElementById("one").style.backgroundColor = "#CD5C5C"
} else if (time.isBefore(beforeTime)) {
document.getElementById("one").style.backgroundColor = "#32CD32";
} else {
  document.getElementById("one").style.backgroundColor = "#A9A9A9" 
}
};
// Activating color-coding time function on page load.
one();
// Function to store input in local storage.
function userInput () {
  var input = document.querySelector("#user-input").value;
  localStorage.setItem("input", input);
  renderLastInput();
};
// Function to render input from local storage.
function renderLastInput() {
  var event1 = document.querySelector("#event1");
  var input = localStorage.getItem("input");
  event1.textContent = input;
};
// Activating function to render input from local storage on page load.
renderLastInput();
// Timeblock 2-----------------------------------------------------------------------------------
// Function to color code my timeblocks in relation to time: grey(#A9A9A9) = past, red(#CD5C5C) = present, green(#32CD32) = future.
function two () {
beforeTime = moment('10:00', format),
afterTime = moment('11:00', format);
if (time.isBetween(beforeTime, afterTime)) {
document.getElementById("two").style.backgroundColor = "#CD5C5C"
} else if (time.isBefore(beforeTime)) {
document.getElementById("two").style.backgroundColor = "#32CD32";
} else {
document.getElementById("two").style.backgroundColor = "#A9A9A9" 
}
};
// Activating color-coding time function on page load.
two();
// Function to store input in local storage.
function userInput2 () {
  var input = document.querySelector("#user-input2").value;
  localStorage.setItem("input2", input);
  renderLastInput2();
};
// Function to render input from local storage.
function renderLastInput2() {
  var event1 = document.querySelector("#event2");
  var input = localStorage.getItem("input2");
  event1.textContent = input;
};
// Activating function to render input from local storage on page load.
renderLastInput2();
// Timeblock 3-----------------------------------------------------------------------------------
// Function to color code my timeblocks in relation to time: grey(#A9A9A9) = past, red(#CD5C5C) = present, green(#32CD32) = future.
function three () {
beforeTime = moment('11:00', format),
afterTime = moment('12:00', format);
if (time.isBetween(beforeTime, afterTime)) {
document.getElementById("three").style.backgroundColor = "	#CD5C5C"
} else if (time.isBefore(beforeTime)) {
document.getElementById("three").style.backgroundColor = "#32CD32";
} else {
document.getElementById("three").style.backgroundColor = "#A9A9A9" 
}
};
// Activating color-coding time function on page load.
three();
// Function to store input in local storage.
function userInput3 () {
  var input = document.querySelector("#user-input3").value;
  localStorage.setItem("input3", input);
  renderLastInput3();
};
// Function to render input from local storage.
function renderLastInput3() {
  var event1 = document.querySelector("#event3");
  var input = localStorage.getItem("input3");
  event1.textContent = input;
};
// Activating function to render input from local storage on page load.
renderLastInput3();
// Timeblock 4-----------------------------------------------------------------------------------
// Function to color code my timeblocks in relation to time: grey(#A9A9A9) = past, red(#CD5C5C) = present, green(#32CD32) = future.
function four () {
beforeTime = moment('12:00', format),
afterTime = moment('13:00', format);
if (time.isBetween(beforeTime, afterTime)) {
document.getElementById("four").style.backgroundColor = "#CD5C5C"
} else if (time.isBefore(beforeTime)) {
document.getElementById("four").style.backgroundColor = "#32CD32";
} else {
document.getElementById("four").style.backgroundColor = "#A9A9A9" 
}
};
// Activating color-coding time function on page load.
four();
// Function to store input in local storage.
function userInput4 () {
  var input = document.querySelector("#user-input4").value;
  localStorage.setItem("input4", input);
  renderLastInput4();
};
// Function to render input from local storage.
function renderLastInput4 () {
  var event1 = document.querySelector("#event4");
  var input = localStorage.getItem("input4");
  event1.textContent = input;
};
// Activating function to render input from local storage on page load.
renderLastInput4();
// Timeblock 5-----------------------------------------------------------------------------------
// Function to color code my timeblocks in relation to time: grey(#A9A9A9) = past, red(#CD5C5C) = present, green(#32CD32) = future.
function five () {
beforeTime = moment('13:00', format),
afterTime = moment('14:00', format);
if (time.isBetween(beforeTime, afterTime)) {
document.getElementById("five").style.backgroundColor = "#CD5C5C"
} else if (time.isBefore(beforeTime)) {
document.getElementById("five").style.backgroundColor = "#32CD32";
} else {
document.getElementById("five").style.backgroundColor = "#A9A9A9" 
}
};
// Activating color-coding time function on page load.
five();
// Function to store input in local storage.
function userInput5 () {
  var input = document.querySelector("#user-input5").value;
  localStorage.setItem("input5", input);
  renderLastInput5();
};
// Function to render input from local storage.
function renderLastInput5 () {
  var event1 = document.querySelector("#event5");
  var input = localStorage.getItem("input5");
  event1.textContent = input;
};
// Activating function to render input from local storage on page load.
renderLastInput5();
// Timeblock 6-----------------------------------------------------------------------------------
// Function to color code my timeblocks in relation to time: grey(#A9A9A9) = past, red(#CD5C5C) = present, green(#32CD32) = future.
function six () {
beforeTime = moment('14:00', format),
afterTime = moment('15:00', format);
if (time.isBetween(beforeTime, afterTime)) {
document.getElementById("six").style.backgroundColor = "#CD5C5C"
} else if (time.isBefore(beforeTime)) {
document.getElementById("six").style.backgroundColor = "#32CD32";
} else {
document.getElementById("six").style.backgroundColor = "#A9A9A9" 
}
};
// Activating color-coding time function on page load.
six();
// Function to store input in local storage.
function userInput6 () {
  var input = document.querySelector("#user-input6").value;
  localStorage.setItem("input6", input);
  renderLastInput6();
};
// Function to render input from local storage.
function renderLastInput6 () {
  var event1 = document.querySelector("#event6");
  var input = localStorage.getItem("input6");
  event1.textContent = input;
};
// Activating function to render input from local storage on page load.
renderLastInput6();
// Timeblock 7-----------------------------------------------------------------------------------
// Function to color code my timeblocks in relation to time: grey(#A9A9A9) = past, red(#CD5C5C) = present, green(#32CD32) = future.
function seven () {
beforeTime = moment('15:00', format),
afterTime = moment('16:00', format);
if (time.isBetween(beforeTime, afterTime)) {
document.getElementById("seven").style.backgroundColor = "#CD5C5C"
} else if (time.isBefore(beforeTime)) {
document.getElementById("seven").style.backgroundColor = "#32CD32";
} else {
document.getElementById("seven").style.backgroundColor = "#A9A9A9" 
}
};
// Activating color-coding time function on page load.
seven();
// Function to store input in local storage.
function userInput7 () {
  var input = document.querySelector("#user-input7").value;
  localStorage.setItem("input7", input);
  renderLastInput7();
};
// Function to render input from local storage.
function renderLastInput7() {
  var event1 = document.querySelector("#event7");
  var input = localStorage.getItem("input7");
  event1.textContent = input;
};
// Activating function to render input from local storage on page load.
renderLastInput7();
// Timeblock 8-----------------------------------------------------------------------------------
// Function to color code my timeblocks in relation to time: grey(#A9A9A9) = past, red(#CD5C5C) = present, green(#32CD32) = future.
function eight () {
beforeTime = moment('16:00', format),
afterTime = moment('17:00', format);
if (time.isBetween(beforeTime, afterTime)) {
document.getElementById("eight").style.backgroundColor = "#CD5C5C"
} else if (time.isBefore(beforeTime)) {
document.getElementById("eight").style.backgroundColor = "#32CD32";
} else {
document.getElementById("eight").style.backgroundColor = "#A9A9A9"
}
};
// Activating color-coding time function on page load.
eight();
// Function to store input in local storage.
function userInput8 () {
  var input = document.querySelector("#user-input8").value;
  localStorage.setItem("input8", input);
  renderLastInput8();
};
// Function to render input from local storage.
function renderLastInput8 () {
  var event1 = document.querySelector("#event8");
  var input = localStorage.getItem("input8");
  event1.textContent = input;
};
// Activating function to render input from local storage on page load.
renderLastInput8();
// Timeblock 9-----------------------------------------------------------------------------------
// Function to color code my timeblocks in relation to time: grey(#A9A9A9) = past, red(#CD5C5C) = present, green(#32CD32) = future.
function nine () {
beforeTime = moment('17:00', format),
afterTime = moment('18:00', format);
if (time.isBetween(beforeTime, afterTime)) {
document.getElementById("nine").style.backgroundColor = "#CD5C5C"
} else if (time.isBefore(beforeTime)) {
document.getElementById("nine").style.backgroundColor = "#32CD32";
} else {
document.getElementById("nine").style.backgroundColor = "#A9A9A9" 
}
};
// Activating color-coding time function on page load.
nine();
// Function to store input in local storage.
function userInput9 () {
  var input = document.querySelector("#user-input9").value;
  localStorage.setItem("input9", input);
  renderLastInput9();
};
// Function to render input from local storage.
function renderLastInput9 () {
  var event1 = document.querySelector("#event9");
  var input = localStorage.getItem("input9");
  event1.textContent = input;
};
// Activating function to render input from local storage on page load.
renderLastInput9();
// End---------------------------------------------------------------------------------------------

