class Game {
  constructor(ctx, budgieGame, bkgd1Ctx) {
    this.ctx = ctx;
    this.budgieGame = budgieGame;
    this.bkgd1Ctx = bkgd1Ctx;
    // this.farbkgdDraw = this.farbkgdDraw.bind(this);
  }

  start() {
    if (this.ctx !==  undefined) {
        this.background2();
    } else {
      return null;
    }
  }

  farbkgdDraw() {
    const farBack = new FarBackground(this.bkgd1Ctx);
    farBack.draw(this.bkgd1Ctx);
  }


    background2() {
      let bkgd2 = new Image();
      bkgd2.src = 'https://s3.us-east-2.amazonaws.com/pxco/closebkgd.png';
      this.ctx.drawImage(bkgd2, 0, -50);
    }

}
