let player;
let playerImg;
let obsImg;
let obs2;
let obstcales = [];
let bg;
let wordClassifier;
let score = 0;

function preload() {
  playerImg = loadImage("player2.gif");
  obsImg = loadImage("obstacle.png");
  bg = loadImage("background.jpg");
  obs2 = loadImage("obstacle2.png");
  let options = { probabilityThreshold: 0.85 };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(800, 600);
  player = new Player();
  wordClassifier.classify(heardWord);
}

function heardWord(error, results) {
  if (results[0].label === "up") {
    player.jump();
  }
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}
function draw() {
  background(bg);

  if (random(1) < 0.00776) {
    obstcales.push(new Obstacle());
  }
  for (let obs of obstcales) {
    obs.show();
    obs.move();
    if (obs.x < 0 - obs.size) {
      let index = obstcales.indexOf(obs);
      obstcales.splice(index, 1);
      score++;
    }
    if (player.collided(obs)) {
      console.log("GAME  OVER");
      textSize(70);
      fill("white");
      text("GAME OVER", width / 2 - 220, height / 2);
      text(score, 100, 100);
      noLoop();
    }
  }
  player.show();
  player.move();
}
