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
  // Determines legal and illegal moves.
  rawMoves.forEach((move) => {
    if ((move[0] >= 0 && move[0] <= 7) && (move[1] >= 0 && move[1] <= 7)) legalMoves.push(move);
  });

  return legalMoves;
};

const getWinningSequence = function getWinningSequence(links, startPos, winningPos) {
  const winningSequence = [winningPos];

  // Loops through the links array until it cant find a connection
  for (let i = 0; i < links.length; i += 1) {
    if (links[i][1].toString() === winningSequence[winningSequence.length - 1].toString()) {
      winningSequence.push(links[i][0]);
      if (links[i][0].toString() !== startPos) i = 0;
    }
  }

  winningSequence.push(startPos);
  return winningSequence.reverse();
};

const getKnightMoves = function getKnightMoves(startPos, endPos) {
  let winningSequence = [];
  let queue = [startPos];
  const links = []; // an array of [parent, child] arrays to trace back endpos to startpos
  const seen = [];

  while (queue.length !== 0) {
    const legalMoves = getLegalMoves(queue[0]);

    for (let i = 0; i < legalMoves.length; i += 1) {
      if (!seen.includes(legalMoves[i].toString())) {
        links.push([queue[0], legalMoves[i]]);
        seen.push(legalMoves[i].toString());

        if (legalMoves[i].toString() === endPos.toString()) {
          winningSequence = getWinningSequence(links, startPos, endPos);
          queue = [];
          break;
        } else queue.push(legalMoves[i]);
      }
    }

    queue.shift();
  }

  return winningSequence;
};

export default getKnightMoves;
