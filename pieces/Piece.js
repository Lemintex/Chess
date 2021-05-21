class Piece {
  constructor(sprite, file, rank, isWhite, pieceSize, square) {
    this.pieceSize = pieceSize;
    if (isWhite) {
      this.sprite = sprite[0];
    }
    else {
      this.sprite = sprite[1];
    }
    this.square = square;
    this.pos = {
      file: file,
      rank: rank
    };
    this.isWhite = isWhite;
    this.isHeld = false;
    this.square.setPiece(this);
  }

  drawPiece(){
    image(this.sprite, (this.pos.file-1)*this.pieceSize, (this.pos.rank-1)*this.pieceSize, this.pieceSize, this.pieceSize);
  }
}
