class Player {
  constructor() {
    this.size = 100;
    this.x = 50;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 1.6;
  }
  show() {
    image(playerImg, this.x - 40, this.y, this.size + 40, this.size);
  }
  jump() {
    if (this.y === height - this.size) {
      this.velocityY = -27;
    }
  }

  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collided(currentObstcale) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 40,
      this.size - 40,

      currentObstcale.x,
      currentObstcale.y,
      currentObstcale.size - 15,
      currentObstcale.size - 15
    );
    return isColliding;
  }
}
