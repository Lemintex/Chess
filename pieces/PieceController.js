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

  // generateKing(){
  //     var k = new King(this.pieceSprites[0], 5, 5, false, this.squareSize);
  //     this.pieceArray.push(k);
  // }
  //
  // generateQueen(){
  //   var q = new Queen
  // }
  //
  // generateBishop(){
  //   var b = new Bishop
  // }
  //
  // generateKnight(){
  //   var n = new Knight(this.pieceSprites[3], 5, 5, false, this.squareSize);
  // }
  //
  // generateRook(){
  //   var r = new Rook(this.pieceSprites[4], 6, 6, true, this.squareSize);
  // }
  //
  // generatePawn(){
  //   var p = new Pawn(this.pieceSprites[5], 7, 7, false, this.squareSize);
  // }

  mousePressed(mouseX, mouseY){
    var f = Math.floor(mouseX/this.squareSize);
    var r = Math.floor(mouseY/this.squareSize);

    var pieceOnSquare = this.chessBoard.board[f][r].getPiece();
    // if (pieceOnSquare == null) {
    //   return;
    // }
    //PIECE PICKED up
    console.log(pieceOnSquare);
  }

  drawPieces(){
    for (var i = 0; i < this.pieceArray.length; i++) {
      this.pieceArray[i].drawPiece();
    }
  }
}
