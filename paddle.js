class Paddle {
  constructor(player_pos) {
    this.width = 10;
    this.height = 100;
    if (player_pos === "left") {
      this.position = createVector(5, 2 * height / 5);
    } else {
      this.position = createVector(width - 5, 2 * height / 5);
    }
    this.ySteps = 0;
    this.score = 0;
  }

  show() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.position.x, this.position.y, this.width, this.height);
    pop();
  }
  
  move(steps) {
    this.ySteps = steps;
    this.position.y += this.ySteps;
    this.position.y = constrain(this.position.y, this.height / 2, height - this.height / 2);
  }

  update() {
    // console.log(this.ySteps);
    this.position.y += this.ySteps;
    this.position.y = constrain(this.position.y, this.height / 2, height - this.height / 2);
    // this.ySteps = 0;
  }
}