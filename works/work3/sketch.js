function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
}

function mousePressed() {
  let size = random(10, 100);
  if (mouseButton == CENTER) {
    background(random(256), random(256), random(256));
  } else if (mouseButton == LEFT) {
    newstar = new star(mouseX, mouseY, size, 10, 4);
    fill(random(255), random(255), random(255));
  }
}

function draw() {
  push();
  translate(width * 0.5, height * 0.5);
  fill(30, 144, 255);
  rotate(frameCount / 150.0);
  star(0, 0, 500, 120, 40);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 200.0);
  fill(255, 200, 0);
  star(0, 0, 5, 70, 10);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  fill(255, 255, 0);
  rotate(frameCount / -150.0);
  star(0, 0, 30, 10, 5);

  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
