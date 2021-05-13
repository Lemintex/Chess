class ChessBoard{
  constructor(squareSize) {
    this.rowNum = 8;
    this.colNum = 8;
    this.squareSize = squareSize;
    this.board = new Array(this.rowNum);
    for (var c = 0; c < this.colNum; c++) {
      this.board[c] = new Array(this.colNum);
      for (var r = 0; r < this.rowNum; r++) {
        this.board[c][r] = new Square(c*this.squareSize, r*this.squareSize, (r+c)%2==0, this.squareSize);
      }
    }
  }

  drawBoard(){
    for (var c = 0; c < this.colNum; c++) {
      for (var r = 0; r < this.rowNum; r++) {
        this.board[c][r].drawSquare();
      }
    }
  }
}
