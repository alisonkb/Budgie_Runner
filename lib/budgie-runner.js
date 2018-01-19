// import Game from './game.js';

document.addEventListener('DOMContentLoaded', () => {
  const budgieGame = document.getElementById('budgie-game');
  const gameCtx = budgieGame.getContext('2d');

  const budgieBkgd1 = document.getElementById('budgie-bkgd1');
  const bkgd1Ctx = budgieBkgd1.getContext('2d');


  const playgame = new Game(gameCtx, budgieGame, bkgd1Ctx);
  playgame.farbkgdDraw(bkgd1Ctx);
  playgame.start(gameCtx);

});
