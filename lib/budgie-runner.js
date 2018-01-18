// import Game from './game.js';

document.addEventListener('DOMContentLoaded', () => {
  const budgieGame = document.getElementById('budgie-game');
  const gameCtx = budgieGame.getContext('2d');

  const playgame = new Game(gameCtx, budgieGame);
  playgame.draw();
  // gameCtx.fillStyle = 'rgb(200, 0, 0)';
  // gameCtx.fillRect(10, 10, 50, 50);
});
