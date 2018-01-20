// import Game from './game.js';

document.addEventListener('DOMContentLoaded', () => {
  const budgieGame = document.getElementById('budgie-game');
  const gameCtx = budgieGame.getContext('2d');

  const budgieBkgd2 = document.getElementById('budgie-bkgd2');
  const bkgd2Ctx = budgieBkgd2.getContext('2d');

  const budgieBkgd1 = document.getElementById('budgie-bkgd1');
  const bkgd1Ctx = budgieBkgd1.getContext('2d');

  const playgame = new Game(gameCtx, budgieGame, bkgd1Ctx, bkgd2Ctx);
  playgame.farbkgdDraw(bkgd1Ctx);
  playgame.nearbkgdDraw(bkgd2Ctx);

  let dog1 = new Image();
  dog1.src ='https://s3.us-east-2.amazonaws.com/pxco/Budgie01.png';
  const Budgie = new Dog(gameCtx, dog1);

  let fps = 30;
  let now;
  let then = Date.now();
  let interval = 2500/fps;
  let slowBoy;

  function start() {

      window.requestAnimationFrame(start);
      now = Date.now();
      slowBoy = now - then;
      if (slowBoy > interval) {
        gameCtx.clearRect(0, 0, 500, 350);
        Budgie.draw(gameCtx);
        playgame.obstacleDraw(gameCtx);
        then = now - (slowBoy % interval);
      }
  }
  
  start();

});
