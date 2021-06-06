class King extends Piece {
  constructor(sprite, isWhite, size, square) {
    super(sprite, isWhite, size, square);
  }

  isValidMove(sq){
    if((-1 <= sq.getFile() - this.square.getFile() && sq.getFile() - this.square.getFile() <= 1) && (-1 <= sq.getRank() - this.square.getRank() && sq.getRank() - this.square.getRank() <= 1)){
        return true;
    }
    else {
      return false;
    }
  }
}
