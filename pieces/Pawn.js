class Pawn extends Piece {
  constructor(sprite, isWhite, size, square) {
    super(sprite, isWhite, size, square);
    this.firstMoveTwoSquares = true;
    this.enPassant = false; //holy hell
  }

  isValidMove(sq){
    var f = this.square.getFile() - sq.getFile();
    var r = this.square.getRank() - sq.getRank();
    if (f != 0) return false; // pawns cannot move sideways

    // TODO: check squares for pieces

    // TODO: figure out neater system for calculating legal moves
    if (this.firstMoveTwoSquares && (this.isWhite && r === 2) || (!this.isWhite && r === -2)) {
      this.firstMoveTwoSquares = false;
      return true;
    }
    if (f == 0 && ((this.isWhite && r == 1) || (!this.isWhite && r == -1))){
      return true;
    }
    return false;
  }

  isPathEmpty() {

  }

  isDoublePushValidMove() {

  }

  isSinglePushValidMove() {

  }

  isCaptureValidMove() {

  }

}
