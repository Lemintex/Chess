let b;
function setup() {
  b = new ChessBoard();
  background(0);
  createCanvas(400, 400);
}

function draw() {
  background(0);
  b.drawBoard();
}
