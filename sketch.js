let field;


function setup() {
  createCanvas(500, 400);
  field = new Field(height, width);
}

function draw() {
  background(0);
  
  
  field.show();
  field.update();
  // field.checkMovement();
  
}

function keyPressed() {
  // field.checkMovement();
   if (key == "a") {
      field.left.move(-10);
    }
    else if (key == "z") {
      field.left.move(10);
    }
    if (key == "j") {
      field.right.move(-10);
    }
    else if (key == "m") {
      field.right.move(10);
    }
}

function keyReleased() {
  // console.log("aqui");
  field.right.move(0);
  field.left.move(0);
}