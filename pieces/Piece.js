class Piece {
  constructor(sprite, file, rank, colour, pieceSize) {
    this.pieceSize = pieceSize;
    this.sprite = sprite;
    this.pos = {
      file: file,
      rank: rank
    };
    this.isWhite = colour;
  }

  drawPiece(){
    image(this.sprite, (this.pos.rank-1)*this.pieceSize, (this.pos.file-1)*this.pieceSize, this.pieceSize, this.pieceSize);
  }
}
