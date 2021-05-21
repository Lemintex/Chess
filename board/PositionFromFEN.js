class PositionFromFEN {
  constructor(fen, files, ranks, pieceController) {
    this.fenString = fen;
    this.files = files;
    this.ranks = ranks;
    this.pieceController = pieceController;
    this.generatePosition();
  }

  generatePosition(){
    var f = 1;
    var r = 1;
    for (var i = 0; i < this.fenString.length; i++) {
      var char = this.fenString[i];
              console.log(char);
      if (!isNaN(parseInt(char))) {
        if (parseInt(char) + f <= 8) {
          f += parseInt(char);
          console.log("Skipping " + char + " files on Rank " + r);
        }
        else {
          return;
        }
      }
      else if (this.isEndOfRank(char)) {
        r+=1;
        f=1;
      }
      else{
        var isWhite = this.isWhite(char);
        this.generatePiece(char, f, r, isWhite);
        console.log("Adding Piece to Rank " + r + ", File: " + f);
        f+=1;
      }
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
        this.pieceController.generateQueen();
        break;
      case 'b':
        this.pieceController.generateBishop();
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
