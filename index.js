const gameboard =()=> {
  //define the board array
  const boardlayout = [];
  const wins =[];
  let countSet = 0;
  let playersTurn = 1;
  let gameOver = false;

  //determine the win possibilities
    wins[0] = [[0, 0], [1, 0], [2, 0]];
    wins[1] = [[0, 1], [1, 1], [2, 1]];
    wins[2] = [[0, 2], [1, 2], [2, 2]];
    wins[3] = [[0, 0], [1, 1], [2, 2]];
    wins[4] = [[0, 0], [0, 1], [0, 2]];
    wins[5] = [[1, 0], [1, 1], [1, 2]];
    wins[6] = [[2, 0], [2, 1], [2, 2]];
    wins[7] = [[0, 2], [1, 1], [2, 0]];
}