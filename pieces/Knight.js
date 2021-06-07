class Knight extends Piece {
  constructor(sprite, isWhite, size, square) {
    super(sprite, isWhite, size, square);
  }

  isValidMove(sq){
    var f = Math.abs(this.square.getFile() - sq.getFile());
    var r = Math.abs(this.square.getRank() - sq.getRank());
    if(f >= 1 && r >=1 && f + r == 3){
        return true;
    }
    return false;
  }
}
