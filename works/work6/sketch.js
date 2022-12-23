let snowflakes = []; // 눈송이 객체를 담는 배열

// 이 클래스는 각 파티클의 속성들을 표현합니다.
class Particle {
  // 파티클의 좌표값, 반경, 그리고 속도를
  // 두 좌표축에 의거하여 설정합니다.
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = random(1, 8);
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-1, 1.5);
  }

  // 파티클 생성하기
  createParticle() {
    noStroke();
    fill(random(256), random(256), random(256));
    circle(this.x, this.y, this.r);
  }

  // 파티클이 움직이도록 설정하기
  moveParticle() {
    if (this.x < 0 || this.x > width) this.xSpeed *= -1;
    if (this.y < 0 || this.y > height) this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  // 이 함수는 특정 거리 안쪽에 위치한 파티클들 사이에 연결선을 만듭니다.
  joinParticles(paraticles) {
    particles.forEach((element) => {
      let dis = dist(this.x, this.y, element.x, element.y);
      if (dis < 85) {
        stroke("rgba(255,255,255,0.04)");
        line(this.x, this.y, element.x, element.y);
      }
    });
  }
}

// 복수의 파티클들을 추가하기 위한 배열
let particles = [];

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  for (let i = 0; i < width / 10; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background("#0f0f0f");
  for (let i = 0; i < particles.length; i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
  let t = frameCount / 60; // 시간 업데이트

  // 매 프라임마다 무작위 개수의 눈송이 생성
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // 눈송이 객체 추가
  }

  // for 반복문을 사용하여 눈송이 반복
  for (let flake of snowflakes) {
    flake.update(t); // 눈송이 위치 업데이트
    flake.display(); // 눈송이 그리기
  }
}

// snowflake 클래스
function snowflake() {
  // 좌표값 초기화
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // 방사형 눈송이의 반지름
  // 눈송이를 화면에 고루 퍼뜨리기 위해 선택
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function (time) {
    // 원형을 따라다니는 x 위치
    let w = 0.6; // 각속도
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // 크기가 다른 눈송이가 미묘하게 다른 y 속도로 떨어집니다.
    this.posY += pow(this.size, 0.5);

    // 화면 하단을 지나친 눈송이는 삭제
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function () {
    ellipse(this.posX, this.posY, this.size);
  };
}
