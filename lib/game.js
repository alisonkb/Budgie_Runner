class Game {
  constructor(ctx, budgieGame) {
    this.ctx = ctx;
    this.budgieGame = budgieGame;
  }

  draw() {
    debugger
    this.ctx.fillStyle = 'rgb(200, 0, 0)';
    this.ctx.fillRect(10, 10, 50, 50);
  }



}

export default Game;
