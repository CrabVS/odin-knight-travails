import './reset.css';
import './style.css';
import Gameboard from './gameboard/gameboard';

const gameboard = new Gameboard();

gameboard.knightMoves([3, 4], [7, 1]);
