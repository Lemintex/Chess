class PieceController {
  constructor(spriteSheet, squareSize) {
    this.squareSize = squareSize;
    this.spriteSheet = spriteSheet;
    this.pieceSprites = new Array(2);
    this.pieceArray = [];
    for (var i = 0; i < 2; i++) {
      this.pieceSprites[i] = [];
      for (var j = 0; j < 6; j++) {
        this.pieceSprites[i].push(this.spriteSheet.get(j*213, i*213, 213, 213));
      }
    }
  }

  generatePieces(){
      var k = new King(this.pieceSprites[0][0], 4, 2, false, this.squareSize);
      this.pieceArray.push(k);
  }

  drawPieces(){
    for (var i = 0; i < this.pieceArray.length; i++) {
      this.pieceArray[i].drawPiece();
    }
  }
}
