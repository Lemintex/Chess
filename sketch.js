let b;
function setup() {
  b = new ChessBoard();
  background(0);
  createCanvas(1000, 1000);
}

function draw() {
  background(0);
  b.drawBoard();
}
