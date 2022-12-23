function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();

  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");

  dim = width / 2;

  colorMode(HSB, 360, 100, 100);
  noStroke();

  frameRate(1);
}
let dim;

function draw() {
  background(0);
  ellipseMode(RADIUS);
  for (let x = 0; x <= width; x += dim) {
    drawGradient(x, height / 2);
  }

  ellipseMode(CENTER);
  for (let x = 0; x <= width; x += dim) {
    drawGradient(x, height / 2);
  }

  ellipseMode(CENTER);
  for (let x = 0; x <= width; x += dim) {
    drawGradient(width * 0.25, height * 0.1);
  }

  ellipseMode(CENTER);
  for (let x = 0; x <= width; x += dim) {
    drawGradient(width * 0.75, height * 0.1);
  }

  ellipseMode(CENTER);
  for (let x = 0; x <= width; x += dim) {
    drawGradient(width * 0.25, height * 0.9);
  }

  ellipseMode(CENTER);
  for (let x = 0; x <= width; x += dim) {
    drawGradient(width * 0.75, height * 0.9);
  }
}

function drawGradient(x, y) {
  let radius = dim / 2;
  let h = random(0, 360);
  for (let r = radius; r > 0; --r) {
    fill(h, 90, 90);
    ellipse(x, y, r, r);
    h = (h + 1) % 360;
  }
}
