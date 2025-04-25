function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let score = JSON.parse(localStorage.getItem("score")) || {
    win: 0,
    loose: 0,
    tie: 0,
  };
  
  updateScore();
  
  document.querySelector(".js-rock").addEventListener("click", () => {
    playGame("rock");
  });
  
  document.querySelector(".js-paper").addEventListener("click", () => {
    playGame("paper");
  });
  
  document.querySelector(".js-scissor").addEventListener("click", () => {
    playGame("scissors");
  });
  
  document.querySelector(".js-reset").addEventListener("click", () => {
    score.win = 0;
    score.loose = 0;
    score.tie = 0;
    localStorage.setItem("score", JSON.stringify(score));
    updateScore();
    document.querySelector(".js-res").innerHTML = "";
  });
  
  function updateScore() {
    document.querySelector(
      ".js-score"
    ).innerHTML = `Win: ${score.win} | Lose: ${score.loose} | Tie: ${score.tie}`;
  }
  
  function playGame(playerMove) {
    const randomNumber = getRandomNumber(0, 2);
    const moves = ["rock", "paper", "scissors"];
    const computerMove = moves[randomNumber];
  
    let result = "";
  
    if (playerMove === computerMove) {
      result = "Match Tie";
      score.tie++;
    } else if (
      (playerMove === "rock" && computerMove === "scissors") ||
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "scissors" && computerMove === "paper")
    ) {
      result = "You Won";
      score.win++;
    } else {
      result = "You Lost";
      score.loose++;
    }

    function autoplay(){
        setTimeout(function(){
            
        })
    }
  
    localStorage.setItem("score", JSON.stringify(score));
    updateScore();
  
    document.querySelector(
      ".js-res"
    ).innerHTML = `<h1>${result}</h1> You: <img src="./images/${playerMove}-emoji.png" class="res-img"> Computer: <img src="./images/${computerMove}-emoji.png" class="res-img">`;
  }
  