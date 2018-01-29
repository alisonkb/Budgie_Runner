class Game {
  constructor(ctx, budgieGame, bkgd1Ctx, bkgd2Ctx, Budgie, zebra, squirrels, start, beginGame, defeated, score) {
    this.ctx = ctx;
    this.budgieGame = budgieGame;
    this.bkgd1Ctx = bkgd1Ctx;
    this.bkgd2Ctx = bkgd2Ctx;
    this.Budgie = Budgie;
    this.zebra = zebra;
    this.gameOver = this.gameOver.bind(this);
    this.gameOver();
    this.defeated = false;
    this.started = false;
    this.score = parseInt('0000');
    this.keepScore = this.keepScore.bind(this);
    this.raiseScore = this.raiseScore.bind(this);
    this.interval = null;
    this.beginGame = beginGame;
    this.raiseDifficulty = this.raiseDifficulty.bind(this);
    this.interval2 = setInterval(this.raiseDifficulty, 500);
    this.resetVariables = this.resetVariables.bind(this);
    this.squirrels = squirrels;
    this.start = start;
    this.startScore();
  }

  farbkgdDraw() {
    const farBack = new FarBackground(this.bkgd1Ctx);
    farBack.draw(this.bkgd1Ctx);
  }

  nearbkgdDraw() {
    const nearBack = new NearBackground(this.bkgd2Ctx);
    nearBack.draw(this.bkgd2Ctx);
  }



  resetVariables() {
      clearInterval(this.interval);
    this.defeated = false;
    this.started = false;
    this.score = parseInt('0000');
    this.Budgie.jumping = false;
    this.Budgie.yalign = 250;
    this.Budgie.descending = false;
    this.zebra.posX = 505;
    this.zebra.obSpeed = 15;
    this.keepScore();
    this.raiseScore();
    // this.interval = setInterval(this.raiseScore, 500);

  }

  gameOver() {
    if (this.zebra.posX >= 0 && this.zebra.posX <= 95 && this.Budgie.yalign > 160) {
      this.defeated = true;
      // clearInterval(this.interval);
      const text1 = 'GAME OVER';
      const text2 = 'Click to try again!';
      this.ctx.font = 'bold 50px Helvetica';
      this.ctx.fillStyle = '#000000';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(text1, 250, 150);
      this.ctx.fillText(text2, 250, 200);

      if (this.defeated === true) {
        this.squirrels.going = true;
        this.budgieGame.addEventListener('click', () => {
          this.resetVariables();
          if (this.defeated === false) {
            this.beginGame();
            this.start();
          }
        });
      }



    }
  }

  startScore() {
    this.interval = setInterval(this.raiseScore, 500);
  }

  raiseScore() {
    if (this.started === true) {
      this.score += 1;
    }
  }

  keepScore() {
    if (this.defeated === false)
    this.ctx.font = 'bold 50px Helvetica';
    this.ctx.fillStyle = '#000000';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(this.score, 250, 50);
  }

  raiseDifficulty() {
    if (this.Budgie.jumping == false && this.Budgie.descending == false) {
      this.zebra.obSpeed += 1;
    }
  }


}
