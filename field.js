class Field {
  constructor(height, width){
    this.height = height;
    this.width = width;
    this.left = new Paddle("left");
    this.right = new Paddle("right");
    this.ball = new Ball();
    
  
  }
  
  show() {
    this.ball.show();
    this.left.show();
    this.right.show();
  }
  
  update() {
    
    // Updating ball and checking for collision on paddles
    this.ball.collisionPaddleRight(this.right);
    this.ball.collisionPaddleLeft(this.left);
    this.ball.update();
    
    
    // Updating paddles position
    this.left.update();
    this.right.update();
    
    
    // Updating scores on screen
    this.drawScores();
    
  }
  
  drawScores() {
    fill(255);
    textSize(36);
    text(this.left.score, 1 * width / 8, 60);
    text(this.right.score, 7 * width / 8, 60);
  
  }
  


}