function vishnu() {
  // means timer close hai.
  let timerClosed = true;
  function startTimer() {
    let sec = 60;
    let timer = setInterval(function () {
      document.getElementsByClassName("timerRunning")[0].innerHTML =
        "00:" + sec;
      sec--;
      if (sec < 0) {
        clearInterval(timer);

        document
          .getElementsByClassName("btnStartAgain")[0]
          .classList.remove("hidden");
        document.getElementsByClassName("resultContainer")[0].innerHTML = "";
      }
    }, 1000);
  }

  let score = 0;
  let currentNumber = 0;
  function start() {
    document.getElementsByClassName("btnStart")[0].classList.add("hidden");
    document.getElementsByClassName("btnStartAgain")[0].classList.add("hidden");

    startTimer();
    timerClosed = false;
    document.getElementsByClassName("scoreRunning")[0].innerHTML = "0";
    score = 0;
    generateRandom();
  }

  // random no generate
  function generateRandom() {
    const firstNumber = Math.floor(Math.random() * 8 + 1);
    const secondNumber = Math.floor(Math.random() * (8 - firstNumber) + 1);
    let currentNumberStr = firstNumber + " + " + secondNumber;
    document.getElementsByClassName("resultContainer")[0].innerHTML =
      currentNumberStr;
    currentNumber = firstNumber + secondNumber;
  }
  document
    .getElementsByClassName("btnStart")[0]
    .addEventListener("click", function (e) {
      //start game
      start();
    });
  document
    .getElementsByClassName("btnStartAgain")[0]
    .addEventListener("click", function (e) {
      //start game again
      start();
    });
  const cells = document.getElementsByTagName("td");
  for (let i = 0, len = cells.length; i < len; i++) {
    cells[i].addEventListener("click", function () {
      if (timerClosed) {
        return;
      }
      if (parseInt(this.innerText) === currentNumber) {
        score++;
      } else {
        score--;
      }
      document.getElementsByClassName("scoreRunning")[0].innerHTML = score;
      generateRandom();
    });
  }
}
vishnu();
