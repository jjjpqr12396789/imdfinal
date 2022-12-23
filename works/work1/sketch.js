function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
}

function draw() {}

function mouseDragged() {
  let size = random(1, 50);
  fill(random(256), random(256), random(256));
  noStroke();
  if (mouseButton == LEFT) {
    circle(mouseX, mouseY, size);
  }
}

function mousePressed() {
  if (mouseButton == CENTER) {
    background(random(256), random(256), random(256));
  }
}
