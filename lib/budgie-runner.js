document.addEventListener('DOMContentLoaded', () => {
  const budgieGame = document.getElementById('budgie-game');
  const gameCtx = budgieGame.getContext('2d');

  const budgieBkgd2 = document.getElementById('budgie-bkgd2');
  const bkgd2Ctx = budgieBkgd2.getContext('2d');

  const budgieBkgd1 = document.getElementById('budgie-bkgd1');
  const bkgd1Ctx = budgieBkgd1.getContext('2d');

  let dog1 = new Image();
  dog1.src ='https://s3.us-east-2.amazonaws.com/pxco/Budgie01.png';
  const Budgie = new Dog(gameCtx, dog1);

  let vent = new Image();
  vent.src ='https://s3.us-east-2.amazonaws.com/pxco/ob05.png';
  let barrier = new Image();
  barrier.src ='https://s3.us-east-2.amazonaws.com/pxco/ob04.png';
  let cart = new Image();
  cart.src ='https://s3.us-east-2.amazonaws.com/pxco/ob03.png';
  let trash = new Image();
  trash.src ='https://s3.us-east-2.amazonaws.com/pxco/ob02.png';
  let phone = new Image();
  phone.src ='https://s3.us-east-2.amazonaws.com/pxco/ob01.png';
  const obts = [vent, barrier, cart, trash, phone];
  let currentObst = obts[(Math.floor(Math.random() * 5))];
  let zebra = new Obstacles(gameCtx, currentObst, 505);

  let fps = 30;
  let now;
  let then = Date.now();
  let interval = 2500/fps;
  let slowBoy;

  const playgame = new Game(gameCtx, budgieGame, bkgd1Ctx, bkgd2Ctx, Budgie, zebra);
  playgame.farbkgdDraw(bkgd1Ctx);
  playgame.nearbkgdDraw(bkgd2Ctx);
  playgame.gameOver();

  function start() {


    if (playgame.defeated === false) {
      window.requestAnimationFrame(start);
      playgame.gameOver();
      now = Date.now();
      slowBoy = now - then;
      if (slowBoy > interval) {
        gameCtx.clearRect(0, 0, 500, 350);
        playgame.keepScore();
        Budgie.draw(gameCtx);
        Budgie.jumpListener();
        zebra.draw(gameCtx);
        then = now - (slowBoy % interval);
      }

    }


  }

  start();
});
