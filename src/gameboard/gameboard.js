import Knight from './knight/knight';

const getLegalMoves = function getLegalMoves(startPos) {
  const rawMoves = [
    [startPos[0] + 1, startPos[1] - 2],
    [startPos[0] + 2, startPos[1] - 1],
    [startPos[0] + 2, startPos[1] + 1],
    [startPos[0] + 1, startPos[1] + 2],
    [startPos[0] - 1, startPos[1] + 2],
    [startPos[0] - 2, startPos[1] + 1],
    [startPos[0] - 2, startPos[1] - 1],
    [startPos[0] - 1, startPos[1] - 2],
  ];

  const legalMoves = [];
  rawMoves.forEach((move) => {
    if ((move[0] >= 0 && move[0] <= 7) && (move[1] >= 0 && move[1] <= 7)) legalMoves.push(move);
  });

  return legalMoves;
};

class Gameboard {
  constructor() {
    this.knight = new Knight();
  }

  // [3,4] and [7,1]
  knightMoves(startPos, endPos) {
    // const queue = [];
    // const seen = [];

    // while (queue.length !== 0) {
    //   // Get all possible first moves from start

    //   seen.push([queue.shift()]);
    // }
    console.log(getLegalMoves(startPos));
  }
}

export default Gameboard;
