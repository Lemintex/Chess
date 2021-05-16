class Piece {
  constructor(sprite, file, rank, colour, pieceSize) {
    this.pieceSize = pieceSize;
    this.sprite = sprite;
    this.pos = {
      file: file,
      rank: rank
    };
    this.isWhite = colour;
    this.isHeld = false;
  }

  drawPiece(){
    image(this.sprite, (this.pos.rank-1)*this.pieceSize, (this.pos.file-1)*this.pieceSize, this.pieceSize, this.pieceSize);
  }

  calculatePiecePickedUp(mouseX, mouseY){
    var collisionX = true;
    var collisionY = true;
    if (mouseX < (this.pos.rank-1) * this.pieceSize || mouseX >= this.pos.rank * this.pieceSize) {
      collisionX = false;
    }
    else if (mouseY < (this.pos.file-1) * this.pieceSize || mouseY >= this.pos.file * this.pieceSize) {
      collisionY = false;
    }
    if (collisionX && collisionY) {
      // this.isHeld = true;
      console.log("Picked");
      return true;
    }
    return false;
  }
}
