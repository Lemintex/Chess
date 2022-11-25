class Piece {
  constructor(sprite, isWhite, pieceSize, square) {
    this.pieceSize = pieceSize;
    if (isWhite) {
      this.sprite = sprite[0];
    }
    else {
      this.sprite = sprite[1];
    }
    this.square = square;
    this.pos = {
      file: this.square.getFile(),
      rank: this.square.getRank()
    };
    
    this.render = createVector(
      this.pos.file * this.pieceSize,
      this.pos.rank * this.pieceSize
    );
    this.isWhite = isWhite;
    this.isHeld = false;
    this.square.setPiece(this);
  }

  drawPiece(){
    image(this.sprite, this.render.x, this.render.y, this.pieceSize, this.pieceSize);
  }

  setPos(x, y){
    this.render.x = x;
    this.render.y = y;
  }

  setSquare(sq){
    this.square = sq;
  }
}
