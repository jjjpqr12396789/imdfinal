function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
}

fill(204, 101, 192, 127);
stroke(127, 63, 120);

translate(580, 200);
noStroke();
for (let i = 0; i < 10; i++) {
  ellipse(0, 30, 20, 80);
  rotate(PI / 5);
}
