class Square{
  constructor(X, Y, light, squareSize) {
    this.size = squareSize;
    this.x = X;
    this.y = Y;
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
  }

  getPiece(){
    return this.pieceOnSquare;
  }
}
