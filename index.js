const Gameboard = (() => {
  let gameboard = [ "", "", "", "", "", "", "", "", ""];

  const render = () =>{
    let boardHTML = "";
    gameboard.forEach((square, index) => {
     boardHTML += `<div class="square" id=square-${index}>${square}</div>`
    });
    document.querySelector("#gameboard").innerHTML = boardHTML;
    const squares = document.querySelectorAll('.square');
 squares.forEach((square) => {
   square.addEventListener("click", Game.handleClick);
 })
  }

  const update = (index, value) => {
    gameboard[index] = value;
    render();
  }
   
    return {
      render,
      update
    }
})();

const createPlayer = (name, marker) =>{
return {name, marker};
}

const Game = (() =>{
  let players = [];
  let currentPlayerIndex;
  let gameOver;

  const start = () =>{
 players = [
  createPlayer(document.querySelector("#player-1").value, "X"),
  createPlayer(document.querySelector("#player-2").value, "0")
 ];
 currentPlayerIndex = 0;
 gameOver = false;
 Gameboard.render();
  }
  function handleClick(event) {
    let index = parseInt(event.target.id.split("-")[1]);
    Gameboard.update(index, players[currentPlayerIndex].marker);
  }
  return {start,handleClick};
})();

let startButton = document.querySelector("#start-button");
startButton.addEventListener("click",()=>{
  Game.start();
})