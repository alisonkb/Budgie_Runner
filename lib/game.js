class Game {
  constructor(ctx, budgieGame, bkgd1Ctx, bkgd2Ctx, Budgie, zebra, defeated) {
    this.ctx = ctx;
    this.budgieGame = budgieGame;
    this.bkgd1Ctx = bkgd1Ctx;
    this.bkgd2Ctx = bkgd2Ctx;
    this.Budgie = Budgie;
    this.zebra = zebra;
    this.gameOver = this.gameOver.bind(this);
    this.gameOver();
    this.defeated = false;
  }

  farbkgdDraw() {
    const farBack = new FarBackground(this.bkgd1Ctx);
    farBack.draw(this.bkgd1Ctx);
  }

  nearbkgdDraw() {
    const nearBack = new NearBackground(this.bkgd2Ctx);
    nearBack.draw(this.bkgd2Ctx);
  }

  gameOver() {
    if ((this.Budgie.xalign === this.zebra.posX) && this.Budgie.yalign > 160) {
      this.defeated = true;
      const text1 = 'GAME OVER';
      this.ctx.font = '48px VT323';
      this.ctx.fillStyle = '#fef86c';
      this.ctx.textAlign = 'center';
      this.ctx.strokeText(text1, 400, 150);
      this.ctx.fillText(text1, 400, 150);

  }

  }


}
