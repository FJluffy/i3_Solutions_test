export class Connect4 {

  i: number;
  //initiate a two dimensions integer array to present this game.
  game: number[][];

  //initiate a false state to a boolean value and will be true if this game is finished.
  finish: boolean = false;

  constructor() {
    this.i = 1;
    this.game =
      [[0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]];
  }

  play(col: number): string {

    //if this game is finished, return 'Game has finished!' directly.
    if (this.finish) {
      return 'Game has finished!';
    }

    //check if this column is full
    if (this.game[0][col] !== 0) {
      this.i -= 1;
      console.log(this.game);
      return 'Column full!';
    }

    this.i += 1;

    //to put 1 or 2 in the array from bottom to top according to player number.
    for (let j: number = 5; j >= 0; j--) {
      if (this.game[j][col] === 0) {
        this.game[j][col] = this.i % 2 + 1;
        break;
      }
    }

    //check if player 1 or 2 wins
    for (let j: number = 5; j > 2; j--) {
      for (let k: number = 0; k < 4; k++) {
        //it's a huge condition to compare if continuous 4 numbers in a col or a row or diagonal line are equal.
        if ((this.game[j][k] !== 0 && this.game[j][k] === this.game[j - 1][k] && this.game[j][k] === this.game[j - 2][k] && this.game[j][k] === this.game[j - 3][k])
          || (this.game[j][k] !== 0 && this.game[j][k] === this.game[j][k + 1] && this.game[j][k] === this.game[j][k + 2] && this.game[j][k] === this.game[j][k + 3])
          || (this.game[j][k] !== 0 && this.game[j][k] === this.game[j - 1][k + 1] && this.game[j - 2][k] === this.game[j][k + 2] && this.game[j - 3][k] === this.game[j][k + 3])
          || (this.game[j - 3][k] !== 0 && this.game[j - 3][k] === this.game[j - 2][k + 1] && this.game[j - 3][k] === this.game[j - 1][k + 2] && this.game[j - 3][k] === this.game[j][k + 3])) {
          this.finish = true;
          console.log(this.game);
          return `Player ${this.i % 2 + 1} wins!`;
        }
      }
    }
    return `Player ${this.i % 2 + 1} has a turn`;
  }
}