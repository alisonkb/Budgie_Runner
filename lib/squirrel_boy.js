class Squirrel {
  constructor(ctx, sboy1){
    this.ctx = ctx;
    this.xaxis = -5;
    this.picture = new Image();
    sq2.src='https://s3.us-east-2.amazonaws.com/pxco/SQ2.png';
  }

  draw(ctx) {
    let sq1 = new Image();
    sq1.src='https://s3.us-east-2.amazonaws.com/pxco/SQ1.png';
    let sq2 = new Image();
    sq2.src='https://s3.us-east-2.amazonaws.com/pxco/SQ2.png';

    if (this.picture.src === sq1.src) {
      this.picture = sq1;
    } else {
      this.picture = sq2;
    }

    this.ctx.drawImage(this.picture, this.xaxis, 250);
    this.xaxis += 5;


    }



}
