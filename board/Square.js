class Square{
  constructor(X, Y, light) {
    this.size = 50;
    this.x = X;
    this.y = Y;
    this.isLight = light;
  }

  drawSquare(){
    if (this.isLight){
      fill(120);
    }
    else{
      fill(40);
    }
    rect(this.x, this.y, this.size, this.size);
  }
}
