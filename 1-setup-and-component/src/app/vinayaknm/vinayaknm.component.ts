import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vinayaknm',
  templateUrl: './vinayaknm.component.html',
  styleUrls: ['./vinayaknm.component.css']
})
export class VinayaknmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  currentPlayer = 'X';
  winner = null;
  winningCombination = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

  handleClick(row: number, col: number) {
    if (this.winner || this.board[row][col]) {
      return;
    }
    this.board[row][col] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    this.winner = this.checkForWin();
  }

  checkForWin() {
    // check for horizontal win
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2]) {
        return this.board[i][0];
      }
    }

    // check for vertical win
    for (let i = 0; i < 3; i++) {
      if (this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i]) {
        return this.board[0][i];
      }
    }

    // check for diagonal win
    if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
      return this.board[0][0];
    }
    if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
      return this.board[0][2];
    }

    return null;
  }
  
  reset() {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    this.currentPlayer = 'X';
    this.winner = null;
  }

}




