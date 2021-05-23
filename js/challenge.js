// As a user, I should see the timer increment every second once the page has loaded.

let start = document.querySelector("h1#counter");

function addToStopwatch() {
  start.innerText++
}

const stopwatchInterval = setInterval(addToStopwatch, 1000);

// As a user, I can manually increment and decrement the counter using the plus and minus buttons.

const minus = document.querySelector("button#minus");
const plus = document.querySelector("button#plus")

minus.addEventListener("click", function() {
  start.innerText--
})

plus.addEventListener("click", function() {
  start.innerText++
})

// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.

const heart = document.querySelector("button#heart");
const likes = document.querySelector("ul.likes");


heart.addEventListener("click", function() {
  let currentNumber = start.innerText;
  let likeForThisNumber = document.getElementById(`${start.innerText}`);

  if (likeForThisNumber === null) {
    newLi = document.createElement("li");
    newLi.setAttribute("id", `${currentNumber}`)
    likesForThisNumber = 1;
    newLi.innerText = `${currentNumber}) -- ${likesForThisNumber} like`
    likes.appendChild(newLi);
  } else {
    likesForThisNumber++
    likeForThisNumber.innerText = `${currentNumber}) -- ${likesForThisNumber} likes`
  }
})

// As a user, I can pause the counter, which should
// pause the counter


const pause = document.querySelector("button#pause");
let pauseState = true;

function pauseTimer() {
  clearInterval(stopwatchInterval);

  // disable all buttons except the pause button
  function disableElement(element) {
    element.disabled = true;
  }

  disableElement(heart);
  disableElement(plus);
  disableElement(minus);

  // the pause button should then show the text "resume."

  pause.innerText = "resume"
  pauseState = false;
}

function resumeTimer() {
  setInterval(addToStopwatch, 1000);

  // enable all buttons except the pause button
  function enableElement(element) {
    element.disabled = false;
  }

  enableElement(heart);
  enableElement(plus);
  enableElement(minus);

  // the resume button should then show the text "pause."

  pause.innerText = "pause"
  pauseState = true;
}

function togglePause() {
  pauseState ? pauseTimer() : resumeTimer();
}

pause.addEventListener("click", togglePause);









