class Square{
  constructor(file, rank, light, squareSize) {
    this.size = squareSize;
    this.x = file * squareSize;
    this.y = rank * squareSize;
    this.file = file;
    this.rank = rank;
    this.isLight = light;
    this.pieceOnSquare;
  }

  drawSquare(){
    if (this.isLight){
      fill(120);
    }
    else{
      fill(40);
    }
    rect(this.x, this.y, this.size, this.size);
  }

  setPiece(piece){
    this.pieceOnSquare = piece;
    if (piece!=undefined){
      this.pieceOnSquare.setSquare(this);
    }
  }

  adjustPiece(piece){
      piece.setPos(this.x, this.y);
  }

  getPiece(){
    return this.pieceOnSquare;
  }

  getFile(){
    return this.file;
  }

  getRank(){
    return this.rank;
  }

}
