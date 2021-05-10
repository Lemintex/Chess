class ChessBoard{
  constructor() {
    this.rowNum = 8;
    this.colNum = 8;
    this.board = new Array(this.rowNum);
    for (var c = 0; c < this.colNum; c++) {
      this.board[c] = new Array(this.colNum);
      for (var r = 0; r < this.rowNum; r++) {
        this.board[c][r] = new Square(c*50, r*50, (r+c)%2==0);
      }
    }
  }

  drawBoard(){
    for (var c = 0; c < this.colNum; c++) {
      for (var r = this.rowNum-1; r >= 0; r--) {
        this.board[c][r].drawSquare();
        console.log("square");
      }
    }
  }
}
