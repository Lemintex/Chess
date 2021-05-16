class Piece {
  constructor(sprite, file, rank, colour, pieceSize, square) {
    this.pieceSize = pieceSize;
    this.sprite = sprite;
    this.square = square;
    this.pos = {
      file: file,
      rank: rank
    };
    this.isWhite = colour;
    this.isHeld = false;
    this.square.setPiece(this);
  }

  drawPiece(){
    image(this.sprite, (this.pos.file-1)*this.pieceSize, (this.pos.rank-1)*this.pieceSize, this.pieceSize, this.pieceSize);
  }
}
