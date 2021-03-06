var squareSize = 80;

var board;
var pieceController;
var spriteSheet;

function preload(){
  spriteSheet = loadImage('pieces/pieces.png');
}

function setup() {
  chessBoard = new ChessBoard(squareSize);
  pieceController = new PieceController(spriteSheet, squareSize, chessBoard);
  var fen = new PositionFromFEN('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR', 8, 8, pieceController);
  createCanvas(squareSize*8, squareSize*8);
  // pieceController.generatePieces();
}

function draw() {
  background(0);
  chessBoard.drawBoard();
  pieceController.drawPieces();
}

function mousePressed(){
  pieceController.mousePressed(mouseX, mouseY);
}

function mouseReleased(){
  pieceController.mouseReleased(mouseX, mouseY);
}
