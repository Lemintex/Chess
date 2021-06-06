class PieceController {
  constructor(spriteSheet, squareSize, chessBoard) {
    this.squareSize = squareSize;
    this.chessBoard = chessBoard;
    this.spriteSheet = spriteSheet;
    this.pieceSprites = [];
    this.pieceArray = [];
    this.pieceInHand;
    this.isPieceInHand = false;
    this.piecePickedPos = {
      f: 0,
      r: 0
    };
    for (var i = 0; i < 6; i++) {
      this.pieceSprites[i] = [];
      for (var j = 0; j < 2; j++) {
        this.pieceSprites[i].push(this.spriteSheet.get(i*213, j*213, 213, 213));
      }
    }
  }

  generateKing(file, rank, isWhite){
      var k = new King(this.pieceSprites[0], isWhite, this.squareSize, this.chessBoard.board[file-1][rank-1]);
      this.pieceArray.push(k);
  }

  generateQueen(file, rank, isWhite){
    var q = new Queen(this.pieceSprites[1], isWhite, this.squareSize, this.chessBoard.board[file-1][rank-1]);
    this.pieceArray.push(q);
  }

  generateBishop(file, rank, isWhite){
    var b = new Bishop(this.pieceSprites[2], isWhite, this.squareSize, this.chessBoard.board[file-1][rank-1])
    this.pieceArray.push(b);
  }

  generateKnight(file, rank, isWhite){
    var n = new Knight(this.pieceSprites[3], isWhite, this.squareSize, this.chessBoard.board[file-1][rank-1]);
    this.pieceArray.push(n);
  }

  generateRook(file, rank, isWhite){
    var r = new Rook(this.pieceSprites[4], isWhite, this.squareSize, this.chessBoard.board[file-1][rank-1]);
    this.pieceArray.push(r);
  }

  generatePawn(file, rank, isWhite){
    var p = new Pawn(this.pieceSprites[5], isWhite, this.squareSize, this.chessBoard.board[file-1][rank-1]);
    this.pieceArray.push(p);
  }

  mousePressed(mouseX, mouseY){
    this.piecePickedPos.f = Math.floor(mouseX/this.squareSize);
    this.piecePickedPos.r = Math.floor(mouseY/this.squareSize);

    var pieceOnSquare = this.chessBoard.board[this.piecePickedPos.f][this.piecePickedPos.r].getPiece();
    if (pieceOnSquare === undefined) {
      return;
    }
    //PIECE PICKED UP
    this.pieceInHand = pieceOnSquare;
    this.isPieceInHand = true;
  }

  mouseReleased(mouseX, mouseY){
    var f = Math.floor(mouseX/this.squareSize);
    var r = Math.floor(mouseY/this.squareSize);
    if (!this.isPieceInHand || !this.pieceInHand.isValidMove(this.chessBoard.board[f][r])) {
      this.chessBoard.board[this.piecePickedPos.f][this.piecePickedPos.r].adjustPiece(this.pieceInHand);
      this.isPieceInHand = false;
      return;
    }
    console.log("HI");
    this.chessBoard.board[this.piecePickedPos.f][this.piecePickedPos.r].setPiece(undefined);
    this.chessBoard.board[f][r].setPiece(this.pieceInHand);
    this.chessBoard.board[f][r].adjustPiece(this.pieceInHand);
    this.pieceInHand = undefined;
    this.isPieceInHand = false;
  }

  drawPieces(){
    if (this.isPieceInHand) {
      this.pieceInHand.setPos(mouseX-this.pieceInHand.pieceSize/2, mouseY-this.pieceInHand.pieceSize/2);
    }
    for (var i = 0; i < this.pieceArray.length; i++) {
      this.pieceArray[i].drawPiece();
    }
  }
}
