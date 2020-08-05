class Ball {
  constructor() {
    this.position = createVector(width / 2, height / 2)
    this.reset();
    this.r = 12.5;

  }


  show() {
    push();
    noStroke();
    fill(255);
    ellipse(this.position.x, this.position.y, this.r * 2);
    pop();
  }

  reset() {
    this.position = createVector(width / 2, height / 2);
    let angle = random(-PI / 4, PI / 4);
    this.x_velocity = 5 * cos(angle);
    this.y_velocity = 5 * sin(angle);
    if (random(1) < 0.5) {
      this.x_velocity *= -1;
    }

  }


  update() {
    this.edges();

    let incrementPos = createVector(this.x_velocity, this.y_velocity);
    this.position.add(incrementPos);

  }

  collisionPaddleRight(paddle) {
    let cond_1 = this.position.x + this.r > paddle.position.x - paddle.width / 2;
    let cond_2 = this.position.y + this.r > paddle.position.y - paddle.height / 2;
    let cond_3 = this.position.y - this.r < paddle.position.y + paddle.height / 2;
    if (cond_1 && cond_2 && cond_3) {
      if (this.position.x < paddle.position.x) {
        let diff = this.position.y - (paddle.position.y - paddle.height / 2);
        let angle = map(diff, 0, paddle.height, radians(225), radians(135));
        this.x_velocity = 5 * cos(angle);
        this.y_velocity = 5 * sin(angle);
        // this.position.x = paddle.x - paddle.width / 2 - this.r;
      }
    }
  }

  collisionPaddleLeft(paddle) {
    let cond_1 = this.position.x - this.r < paddle.position.x + paddle.width / 2;
    let cond_2 = this.position.y - this.r < paddle.position.y + paddle.height / 2;
    let cond_3 = this.position.y + this.r > paddle.position.y - paddle.height / 2;

    if (cond_1 && cond_2 && cond_3) {
      if (this.position.x > paddle.position.x) {
        let diff = this.position.y - (paddle.position.y - paddle.height / 2);
        let rad = radians(45);
        let angle = map(diff, 0, paddle.height, -rad, rad);
        this.x_velocity = 5 * cos(angle);
        this.y_velocity = 5 * sin(angle);
        // this.x = p.x + p.w/2 + this.r;

      }
    }
  }

  edges() {
    let d_top = this.position.y - this.r;
    let d_bot = this.position.y + this.r;
    if (d_top <= 0 || d_bot >= height) {
      this.y_velocity *= -1;
    }
    if (this.position.x - this.r < 0) {
      this.position.x = height / 2;
      this.position.y = width / 2;
      this.reset();
      field.right.score++;
    }
    if (this.position.x + this.r > width) {
      this.position.x = height / 2;
      this.position.y = width / 2;
      this.reset();
      field.left.score++;
    }

  }



}