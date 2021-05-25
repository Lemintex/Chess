class PieceController {
  constructor(spriteSheet, squareSize, chessBoard) {
    this.squareSize = squareSize;
    this.chessBoard = chessBoard;
    this.spriteSheet = spriteSheet;
    this.pieceSprites = [];
    this.pieceArray = [];
    for (var i = 0; i < 6; i++) {
      this.pieceSprites[i] = [];
      for (var j = 0; j < 2; j++) {
        this.pieceSprites[i].push(this.spriteSheet.get(i*213, j*213, 213, 213));
      }
    }
  }

  generatePieces(){
      var k = new King(this.pieceSprites[0][0], 4, 2, false, this.squareSize, this.chessBoard.board[3][1]);
      this.pieceArray.push(k);
      // var p = new Pawn(this.pieceSprites[5][1], 6, 6, true, this.squareSize);
      // this.pieceArray.push(p);
      // var p2 = new Pawn(this.pieceSprites[5][1], 6, 5, true, this.squareSize);
      // this.pieceArray.push(p2);
  }

  generateKing(file, rank, isWhite){
      var k = new King(this.pieceSprites[0], isWhite, this.squareSize, this.chessBoard.board[file-1][rank-1]);
      this.pieceArray.push(k);
  }
  //
  // generateQueen(){
  //   var q = new Queen
  // }
  //
  // generateBishop(){
  //   var b = new Bishop
  // }
  //
  generateKnight(file, rank, isWhite){
    var n = new Knight(this.pieceSprites[3], isWhite, this.squareSize, this.chessBoard.board[file-1][rank-1]);
    this.pieceArray.push(n);
  }

  generateRook(file, rank, isWhite){
    var r = new Rook(this.pieceSprites[4], isWhite, this.squareSize, this.chessBoard.board[file-1][rank-1]);
    this.pieceArray.push(r);
  }

  generatePawn(file, rank, isWhite){
    var p = new Pawn(this.pieceSprites[5], isWhite, this.squareSize, this.chessBoard.board[file-1][rank-1]);
    this.pieceArray.push(p);
  }

  mousePressed(mouseX, mouseY){
    var f = Math.floor(mouseX/this.squareSize);
    var r = Math.floor(mouseY/this.squareSize);

    var pieceOnSquare = this.chessBoard.board[f][r].getPiece();
    if (pieceOnSquare === undefined) {
      return;
    }
    //PIECE PICKED UP
    console.log(pieceOnSquare);
  }

  drawPieces(){
    for (var i = 0; i < this.pieceArray.length; i++) {
      this.pieceArray[i].drawPiece();
    }
  }
}
