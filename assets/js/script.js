var today = moment();
$("#1a").text(today.format("MMM Do, YYYY HH:mm"));
// Time-------------------------------------------------------

// Saving events---------------------------------------------
var submitButton1 = document.querySelector("#submit-button1");
var userInput = document.querySelector("#user-input");
var event1 = document.querySelector("#event1");

// var userInput = document.querySelector("#user-input2");
// var userInput = document.querySelector("#user-input3");
// var userInput = document.querySelector("#user-input4");
// var userInput = document.querySelector("#user-input5");
// var userInput = document.querySelector("#user-input6");
// var userInput = document.querySelector("#user-input7");
// var userInput = document.querySelector("#user-input8");
// var userInput = document.querySelector("#user-input9");
// "#user-input2","#user-input3","#user-input4","#user-input5","#user-input6","#user-input7","#user-input8","#user-input9"

// submitButton1.addEventListener("click", function(event) {
//   event.preventDefault();
//   var input = document.querySelector("#user-input").value;
//   localStorage.setItem("input", input);
//   renderLastInput();
// });

function test () {
  var input = document.querySelector("#user-input").value;
  localStorage.setItem("input", input);
  renderLastInput();
};

function renderLastInput() {
  var input = localStorage.getItem("input");
  event1.textContent = input;
};
renderLastInput();

// Saving Event done----------------------------------------------

// Moment functions----------------------------------------------
var format = 'HH:mm'
// var time is current time
var time = moment();

// beforeTime = moment('20:00', format),
// afterTime = moment('22:00', format);
// if (time.isBetween(beforeTime, afterTime)) {
// console.log('is between')
// alert("time")
// document.getElementById("test").style.backgroundColor = "red"
// } else {
// console.log('is not between')
// };

// Timeblock 1------------------------------------------------------
function one () {
beforeTime = moment('09:00', format),
afterTime = moment('10:00', format);
if (time.isBetween(beforeTime, afterTime)) {
document.getElementById("one").style.backgroundColor = "green"
} else if (time.isBefore(beforeTime)) {
document.getElementById("one").style.backgroundColor = "blue";
} else {
  document.getElementById("one").style.backgroundColor = "red" 
}
};
one();
// Timeblock 2------------------------------------------------------
function two () {
beforeTime = moment('10:00', format),
afterTime = moment('11:00', format);
if (time.isBetween(beforeTime, afterTime)) {
document.getElementById("two").style.backgroundColor = "green"
} else if (time.isBefore(beforeTime)) {
document.getElementById("two").style.backgroundColor = "blue";
} else {
document.getElementById("two").style.backgroundColor = "red" 
}
};
two();
// Timeblock 3------------------------------------------------------
function three () {
beforeTime = moment('11:00', format),
afterTime = moment('12:00', format);
if (time.isBetween(beforeTime, afterTime)) {
document.getElementById("three").style.backgroundColor = "green"
} else if (time.isBefore(beforeTime)) {
document.getElementById("three").style.backgroundColor = "blue";
} else {
document.getElementById("three").style.backgroundColor = "red" 
}
};
three();
// Timeblock 4------------------------------------------------------
function four () {
beforeTime = moment('12:00', format),
afterTime = moment('13:00', format);
if (time.isBetween(beforeTime, afterTime)) {
document.getElementById("four").style.backgroundColor = "green"
} else if (time.isBefore(beforeTime)) {
document.getElementById("four").style.backgroundColor = "blue";
} else {
document.getElementById("four").style.backgroundColor = "red" 
}
};
four();
// Timeblock 5------------------------------------------------------
function five () {
beforeTime = moment('13:00', format),
afterTime = moment('14:00', format);
if (time.isBetween(beforeTime, afterTime)) {
document.getElementById("five").style.backgroundColor = "green"
} else if (time.isBefore(beforeTime)) {
document.getElementById("five").style.backgroundColor = "blue";
} else {
document.getElementById("five").style.backgroundColor = "red" 
}
};
five();
// Timeblock 6------------------------------------------------------ 
function six () {
beforeTime = moment('14:00', format),
afterTime = moment('15:00', format);
if (time.isBetween(beforeTime, afterTime)) {
document.getElementById("six").style.backgroundColor = "green"
} else if (time.isBefore(beforeTime)) {
document.getElementById("six").style.backgroundColor = "blue";
} else {
document.getElementById("six").style.backgroundColor = "red" 
}
};
six();
// Timeblock 7------------------------------------------------------
function seven () {
beforeTime = moment('15:00', format),
afterTime = moment('16:00', format);
if (time.isBetween(beforeTime, afterTime)) {
document.getElementById("seven").style.backgroundColor = "green"
} else if (time.isBefore(beforeTime)) {
document.getElementById("seven").style.backgroundColor = "blue";
} else {
document.getElementById("seven").style.backgroundColor = "red" 
}
};
seven();
// Timeblock 8------------------------------------------------------
function eight () {
beforeTime = moment('16:00', format),
afterTime = moment('17:00', format);
if (time.isBetween(beforeTime, afterTime)) {
document.getElementById("eight").style.backgroundColor = "green"
} else if (time.isBefore(beforeTime)) {
document.getElementById("eight").style.backgroundColor = "blue";
} else {
document.getElementById("eight").style.backgroundColor = "red"
}
};
eight();
// Timeblock 9------------------------------------------------------
function nine () {
beforeTime = moment('17:00', format),
afterTime = moment('18:00', format);
if (time.isBetween(beforeTime, afterTime)) {
document.getElementById("nine").style.backgroundColor = "green"
} else if (time.isBefore(beforeTime)) {
document.getElementById("nine").style.backgroundColor = "blue";
} else {
document.getElementById("nine").style.backgroundColor = "red" 
}
};
nine();

