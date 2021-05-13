var squareSize = 100;

var board;
var pieceGenerator;
var spriteSheet;

function preload(){
  spriteSheet = loadImage('pieces/pieces.png');
}

function setup() {
  board = new ChessBoard(squareSize);
  pieceGenerator = new PieceController(spriteSheet, squareSize);
  createCanvas(squareSize*8, squareSize*8);
  pieceGenerator.generatePieces();
}

function draw() {
  background(0);
  board.drawBoard();
  pieceGenerator.drawPieces();
}
