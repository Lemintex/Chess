const FIELDS = {
  POSITION: 0,
  TURN_TO_MOVE: 1,
  CASTLING_RIGHTS: 2,
  EN_PASSANT: 3,
  HALFMOVE_CLOCK: 4,
  MOVE_COUNT: 5
};
class PositionFromFEN {
  constructor(fen, files, ranks, pieceController) {
    this.fenString = fen;
    this.files = files;
    this.ranks = ranks;
    this.controller = pieceController;
    this.generatePosition();
  }

  generatePosition(){
    this.f = 0;
    this.r = 0;
    var part =  FIELDS.POSITION;
    for (let c of this.fenString) {
      if (c === ' ') {
        part++;
        continue;
      }

      switch (part) {
        case FIELDS.POSITION:
          this.piecePosition(c);
          break;

        case FIELDS.TURN_TO_MOVE:
          ///TODO: set controller
          this.isWhiteToMove(c);
          break;

        case FIELDS.CASTLING_RIGHTS:
          this.getCastlingRights(c);
          break;

        case FIELDS.EN_PASSANT:
          break;

        case FIELDS.HALFMOVE_CLOCK:
          break;

        case FIELDS.MOVE_COUNT:
          this.controller.moveCount = parseInt(c);
          break;

        default:

      }

    }
  }

  piecePosition(c){
    if (!isNaN(parseInt(c))) {
      if (parseInt(c) + this.f <= 8) {
        this.f += parseInt(c);
        // console.log("Skipping " + char + " files on Rank " + this.r);
      }
    }
    else if (this.isEndOfRank(c)) {
      this.r++;
      this.f = 0;
    }
    else {
      var isWhite = this.isWhite(c);
      this.generatePiece(c, this.f, this.r, isWhite);
      // console.log("Adding Piece: "+ char + " to Rank " + this.r + ", File: " + this.f);
      this.f++;
    }
  }

  isWhiteToMove(c){
    this.controller.iswhiteToMove = (c === 'w');
  }

  getCastlingRights(c){
    if (c === 'k') this.controller.castlingRights.white.kingside = true;
    else if (c === 'q') this.controller.castlingRights.white.queenside = true;
    else if (c === 'K') this.controller.castlingRights.black.kingside = true;
    else if (c === 'Q') this.controller.castlingRights.black.queenside = true;
  }

  getEnPassantTarget(c){
    //TODO detect en passant target
  }

  getHalfMoveClock(c){
    //TODO detect 50 move rule moves
  }
  
  getMoveCount(c){
    //TODO move count
  }

  isEndOfRank(c){
    return c == '/';
  }

  isWhite(c){
    return c === c.toUpperCase();
  }

  generatePiece(c, f, r, isWhite){
    switch (c.toLowerCase()) {
      case 'k':
        this.controller.generateKing(f, r, isWhite);
        break;

      case 'q':
        this.controller.generateQueen(f, r, isWhite);
        break;

      case 'b':
        this.controller.generateBishop(f, r, isWhite);
        break;
        
      case 'n':
        this.controller.generateKnight(f, r, isWhite);
        break;

      case 'r':
        this.controller.generateRook(f, r, isWhite);
        break;

      case 'p':
        this.controller.generatePawn(f, r, isWhite);
        break;

      default:
        break;
    }
  }
}
