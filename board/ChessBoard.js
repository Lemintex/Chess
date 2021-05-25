class ChessBoard{
  constructor(squareSize) {
    this.rankNum = 8;
    this.fileNum = 8;
    this.squareSize = squareSize;
    this.board = new Array(this.fileNum);
    for (var f = 0; f < this.fileNum; f++) {
      this.board[f] = new Array(this.rankNum);
      for (var r = 0; r < this.rankNum; r++) {
        this.board[f][r] = new Square(f, r, (r+f)%2==0, this.squareSize);
      }
    }
  }

  drawBoard(){
    for (var f = 0; f < this.fileNum; f++) {
      for (var r = 0; r < this.rankNum; r++) {
        this.board[f][r].drawSquare();
      }
    }
  }
}
