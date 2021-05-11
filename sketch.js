let b;
let gen;
function setup() {
  b = new ChessBoard();
  gen = new PieceGenerator();
  background(0);
  createCanvas(1000, 1000);
  console.log(gen.pieceSprites[0][1]);
}

function draw() {
  background(0);
  b.drawBoard();
gen.drawPiece();
  image(gen.pieceSprites[0][2], 0, 0);
}
