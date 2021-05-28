class PositionFromFEN {
  constructor(fen, files, ranks, pieceController) {
    this.fenString = fen;
    this.files = files;
    this.ranks = ranks;
    this.pieceController = pieceController;
    this.generatePosition();
  }

  generatePosition(){
    this.f = 1;
    this.r = 1;
    var part = 1;
    for (var i = 0; i < this.fenString.length; i++) {
      var char = this.fenString[i];
      console.log(char);
      switch (part) {
        case 1:
          this.charFirstPart(char);
          break;
        case 2:

        break;
        default:

      }

    }
  }

  charFirstPart(char){
    if (!isNaN(parseInt(char))) {
      if (parseInt(char) + this.f <= 9) {
        this.f += parseInt(char);
        console.log("Skipping " + char + " files on Rank " + this.r);
      }
      else {
        return;
      }
    }
    else if (this.isEndOfRank(char)) {
      this.r+=1;
      this.f=1;
    }
    else{
      var isWhite = this.isWhite(char);
      this.generatePiece(char, this.f, this.r, isWhite);
      console.log("Adding Piece: "+ char + " to Rank " + this.r + ", File: " + this.f);
      this.f+=1;
    }
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
