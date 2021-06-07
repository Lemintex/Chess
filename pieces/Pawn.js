class Pawn extends Piece {
  constructor(sprite, isWhite, size, square) {
    super(sprite, isWhite, size, square);
  }

  isValidMove(sq){
    var f = this.square.getFile() - sq.getFile();
    var r = this.square.getRank() - sq.getRank();
    if (f == 0 && ((this.isWhite && r == 1) || (!this.isWhite && r == -1))){
      return true;
    }
    return false;
  }

}
