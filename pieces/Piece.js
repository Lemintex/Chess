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
    this.x = (this.pos.file-1)*this.pieceSize;
    this.y = (this.pos.rank-1)*this.pieceSize;
    this.isWhite = isWhite;
    this.isHeld = false;
    this.square.setPiece(this);
  }

  drawPiece(){
    image(this.sprite, this.x, this.y, this.pieceSize, this.pieceSize);
  }

  setPos(x, y){
    this.x = x;
    this.y = y;
  }

  setSquare(sq){
    this.square = sq;
  }
}
