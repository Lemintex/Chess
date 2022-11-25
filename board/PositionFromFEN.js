class PositionFromFEN {
  constructor(fen, files, ranks, pieceController) {
    this.fenString = fen;
    this.files = files;
    this.ranks = ranks;
    this.pieceController = pieceController;
    this.generatePosition();
  }

  generatePosition(){
    this.f = 0;
    this.r = 0;
    var part = 1;
    for (let c of this.fenString) {
      // console.log(char);
      switch (part) {
        case 1:
          this.charFirstPart(c);
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          break;
        default:

      }

    }
  }

  charFirstPart(c){
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
    else{
      var isWhite = this.isWhite(c);
      this.generatePiece(c, this.f, this.r, isWhite);
      // console.log("Adding Piece: "+ char + " to Rank " + this.r + ", File: " + this.f);
      this.f++;
    }
  }

  charSecondPart(char){
    //TODO detect whose turn it is
  }

  charThirdPart(char){
    //TODO detect castling availability
  }

  charFourthPart(char){
    //TODO detect en passant target
  }

  charFifthPart(char){
    //TODO detect 50 move rule moves
  }
  
  charSixthPart(char){
    //TODO move count
  }

  isEndOfRank(char){
    return char == '/';
  }

  isWhite(char){
    return char === char.toUpperCase();
  }

  generatePiece(char, f, r, isWhite){
    switch (char.toLowerCase()) {
      case 'k':
        this.pieceController.generateKing(f, r, isWhite);
        break;
      case 'q':
        this.pieceController.generateQueen(f, r, isWhite);
        break;
      case 'b':
        this.pieceController.generateBishop(f, r, isWhite);
        break;
      case 'n':
        this.pieceController.generateKnight(f, r, isWhite);
        break;
      case 'r':
        this.pieceController.generateRook(f, r, isWhite);
        break;
      case 'p':
        this.pieceController.generatePawn(f, r, isWhite);
        break;
      default:
        break;
    }
  }
}
