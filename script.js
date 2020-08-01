//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var zeusScore = 0;
var aphroditeScore = 0;
var athenaScore = 0;
var dionysusScore = 0;
var result = document.getElementById("result");
var restart = document.getElementById("redo");

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", athena);
q1a2.addEventListener("click", dionysus);
q1a3.addEventListener("click", aphrodite);
q1a4.addEventListener("click", zeus);

q2a1.addEventListener("click", dionysus);
q2a2.addEventListener("click", aphrodite);
q2a3.addEventListener("click", athena);
q2a4.addEventListener("click", zeus);

q3a1.addEventListener("click", aphrodite);
q3a2.addEventListener("click", zeus);
q3a3.addEventListener("click", athena);
q3a4.addEventListener("click", dionysus);

q4a1.addEventListener("click", zeus);
q4a2.addEventListener("click", athena);
q4a3.addEventListener("click", dionysus);
q4a4.addEventListener("click", aphrodite);

q5a1.addEventListener("click", zeus);
q5a2.addEventListener("click", athena);
q5a3.addEventListener("click", aphrodite);
q5a4.addEventListener("click", dionysus);

restart.addEventListener("click", again);

//#TODO: Define quiz functions here
function athena() {
  athenaScore = athenaScore + 1;
  questionCount = questionCount + 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

function dionysus() {
  dionysusScore = dionysusScore + 1;
  questionCount = questionCount + 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

function aphrodite() {
  aphroditeScore = aphroditeScore + 1;
  questionCount = questionCount + 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

function zeus() {
  zeusScore = zeusScore + 1;
  questionCount = questionCount + 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

//function to calculate results
function updateResult() {
  if (athenaScore >= 3) {
    result.innerHTML = "Your result is Athena!";
  } else if (aphroditeScore >= 3) {
    result.innerHTML = "Your result is Aphrodite!";
  } else if (dionysusScore >= 3) {
    result.innerHTML = "Your result is Dionysus!";
  } else if (zeusScore >= 3) {
    result.innerHTML = "Your result is Zeus!";
  } else {
    result.innerHTML =
      "Uh oh. Looks like you got multiple gods but I'm not going to tell you which ones. Try again later. :)";
  }
}

//function to restart the test
function again() {
  result.innerHTML = "Your result is ...";
  questionCount = 0;
  athenaScore = 0;
  dionysusScore = 0;
  zeusScore = 0;
  aphroditeScore = 0;
}