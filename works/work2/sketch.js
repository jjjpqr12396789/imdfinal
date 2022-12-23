"use strict";

var drawMode = 1;

var col;
var x = 0;
var y = 0;
var stepSize = 5.0;
var lineLength = 25;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
}

function draw() {
  if (mouseIsPressed && mouseButton == LEFT) {
    var d = dist(x, y, mouseX, mouseY);

    if (d > stepSize) {
      var angle = atan2(mouseY - y, mouseX - x);

      push();
      translate(x, y);
      rotate(angle);
      stroke(col);
      if (frameCount % 2 == 0) stroke(150);
      line(0, 0, 0, (lineLength * random(0.95, 1) * d) / 10);
      pop();

      if (drawMode == 1) {
        x = x + cos(angle) * stepSize;
        y = y + sin(angle) * stepSize;
      } else {
        x = mouseX;
        y = mouseY;
      }
    }
  }
}

function mousePressed() {
  x = mouseX;
  y = mouseY;
  col = color(random(255), random(255), random(255), random(255));
  lineLength = random(15, 50);
}

function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) background(0);

  if (key == "1") drawMode = 1;
  if (key == "2") drawMode = 2;
}

function keyPressed() {
  if (keyCode == UP_ARROW) lineLength += 15;
  if (keyCode == DOWN_ARROW) lineLength -= 15;
}
