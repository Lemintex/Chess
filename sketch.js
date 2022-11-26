let squareSize = 80;

let board;
let controller;
let spriteSheet;

function preload(){
  spriteSheet = loadImage('pieces/pieces.png');
}

function setup() {
  chessBoard = new ChessBoard(squareSize);
  controller = new Controller(spriteSheet, squareSize, chessBoard);
  var fen = new PositionFromFEN('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR', 8, 8, controller);
  createCanvas(squareSize*8, squareSize*8);
  // pieceController.generatePieces();
}

function draw() {
  background(0);
  chessBoard.drawBoard();
  controller.drawPieces();
}

function mousePressed(){
  controller.mousePressed(mouseX, mouseY);
}

function mouseReleased(){
  controller.mouseReleased(mouseX, mouseY);
}
