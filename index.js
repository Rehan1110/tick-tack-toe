const gameboard = (() => {
  let gameboard = [ "", "", "", "", "", "", "", "", ""];

  const render = () =>{
    let boardHTML = "";
    gameboard.forEach((square, index) => {
     boardHTML += `<div class="square" id=square-${index}>${index}</div>`
    })
  }
    document.querySelector("#gameboard").innerHTML = boardHTML;
    return {
      render,
    }
})();

const createPlayer = (name, marker) =>{
return {name, marker};
}

const Game = () =>{
  let players = [];
  let currentPlayerIndex;
  let gameOver = false;

  const start = () =>{
 players = [
  createPlayer(document.querySelector("#player1").value, "X"),
  createPlayer(document.querySelector("player2").value, "0")
 ]
  }
}

let startButton = document.querySelector("#start-button");
startButton.addEventListener("click",()=>{
})