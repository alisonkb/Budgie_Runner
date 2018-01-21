class NearBackground {
  constructor(ctx, posX, posY){
    this.ctx = ctx;
    this.posX = 0;
    this.posY = -50;
  }

  draw(ctx) {
    let bkgd2 = new Image();
    bkgd2.src = 'https://s3.us-east-2.amazonaws.com/pxco/closebkgd.png';
    bkgd2.onload = () => {
      let x = 0;

      let bkgdLoop = () => {
          this.ctx.drawImage(bkgd2, x, this.posY);
          this.ctx.clearRect(0,0, 500, 350);
          this.ctx.drawImage(bkgd2, x -= 1, this.posY);
          if (x < -1780) {
            x = 0;
          }
      };

    setInterval(bkgdLoop, 15);
    };

  }



}
