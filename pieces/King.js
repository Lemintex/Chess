class King extends Piece {
  constructor(sprite, isWhite, size, square) {
    super(sprite, isWhite, size, square);
  }

  isValidMove(sq){
    if(Math.abs(sq.getFile() - this.square.getFile())<= 1 && Math.abs(sq.getRank() - this.square.getRank()) <=1){
        return true;
    }
    return false;
  }
}
