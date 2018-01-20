class Game {
  constructor(ctx, budgieGame, bkgd1Ctx, bkgd2Ctx) {
    this.ctx = ctx;
    this.budgieGame = budgieGame;
    this.bkgd1Ctx = bkgd1Ctx;
    this.bkgd2Ctx = bkgd2Ctx;
  }

  farbkgdDraw() {
    const farBack = new FarBackground(this.bkgd1Ctx);
    farBack.draw(this.bkgd1Ctx);
  }

  nearbkgdDraw() {
    const nearBack = new NearBackground(this.bkgd2Ctx);
    nearBack.draw(this.bkgd2Ctx);
  }

  dogDraw(ctx) {
    const budgie = new Dog(this.ctx);
    budgie.update(this.ctx);
  }

  obstacleDraw(ctx) {
    const obstacle = new Obstacles(this.ctx);
    obstacle.draw(ctx);
  }


}
