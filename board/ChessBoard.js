class ChessBoard{
  constructor(squareSize) {
    this.rankNum = 8;
    this.fileNum = 8;
    this.squareSize = squareSize;
    this.square = new Array(this.fileNum);
    for (var f = 0; f < this.fileNum; f++) {
      this.square[f] = new Array(this.rankNum);
      for (var r = 0; r < this.rankNum; r++) {
        this.square[f][r] = new Square(f, r, (r+f)%2==0, this.squareSize);
      }
    }
  }

  drawBoard(){
    for (var f = 0; f < this.fileNum; f++) {
      for (var r = 0; r < this.rankNum; r++) {
        this.square[f][r].drawSquare();
      }
    }
  }
}
