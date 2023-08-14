import Knight from './knight/knight';
import Square from './square/square';

class Gameboard {
  constructor() {
    this.squares = [];
    this.generateSquares();

    this.knight = new Knight([3, 3]);
    this.squares[3 + (3 * 8)].toggleKnight();
  }

  generateSquares() {
    for (let i = 0; i < 8; i += 1) {
      for (let n = 0; n < 8; n += 1) {
        this.squares.push(new Square([n, i]));
      }
    }
  }
}

export default Gameboard;
