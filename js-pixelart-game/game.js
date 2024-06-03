import { Map } from './map.js';
import { Camera } from './camera.js';
const GAME_WIDTH = 512;
const GAME_HEIGHT = 512;

class Game {
  constructor() {
    this.map = new Map();
    this.camera = new Camera(this.map, GAME_WIDTH, GAME_HEIGHT);
    this.keys = [];

    window.addEventListener('keydown', (e) => {
      if (this.keys.indexOf(e.key) === -1) {
        this.keys.unshift(e.key);
      }
      console.log('KEY_DOWN', this.keys);
    });

    window.addEventListener('keyup', (e) => {
      const index = this.keys.indexOf(e.key);
      if (index > -1) {
        this.keys.splice(index, 1);
      }
      console.log('KEY_UP', this.keys);
    });
  }

  // TODO: Break out into GameActions.js
  update(deltaTime) {
    let speedX = 0;
    let speedY = 0;
    if (this.keys[0] === 'ArrowLeft') speedX = -1;
    else if (this.keys[0] === 'ArrowRight') speedX = 1;
    else if (this.keys[0] === 'ArrowUp') speedY = -1;
    else if (this.keys[0] === 'ArrowDown') speedY = 1;

    this.camera.move(deltaTime, speedX, speedY);
  }

  render(ctx) {
    ctx.drawImage(
      this.map.image,
      this.camera.x,
      this.camera.y,
      GAME_WIDTH,
      GAME_HEIGHT,
      0,
      0,
      GAME_WIDTH,
      GAME_HEIGHT,
    );
  }
}

window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;

  const game = new Game();
  game.render(ctx);

  // * Game Loop
  let lastTime = 0;
  const animate = (timeStamp) => {
    const deltaTime = (timeStamp - lastTime) / 1000;
    lastTime = timeStamp;

    game.update(deltaTime);
    game.render(ctx);
    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
});
