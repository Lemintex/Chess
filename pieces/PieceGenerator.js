class PieceGenerator {
  this.spriteSheet;
  this.pieceSprites;
  constructor() {
    this.spriteSheet = loadImage('pieces/pieces.png');
    this.pieceSprites = new Array(2);
    for (var i = 0; i < 2; i++) {
      this.pieceSprites[i] = [];
      this.spriteX = i*213;
      for (var j = 0; j < 6; j++) {
        this.spriteY = j*213;
        this.img = this.spriteSheet.get(this.spriteX, this.spriteY, 213, 213)
        this.pieceSprites[i].push(this.img);
      }
    }
  }

  drawPiece(){
      image(this.spriteSheet.get(213,0,213,213), 500, 0);
      image(this.pieceSprites[0][1], 0, 0);
  }
}
