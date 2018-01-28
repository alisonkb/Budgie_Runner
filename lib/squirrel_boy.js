class Squirrel {
  constructor(ctx, picture){
    this.ctx = ctx;
    this.xaxis = -5;
    this.picture = picture;
    this.going = true;
    // this.picture = sq2;

  }

  draw(ctx) {

      let sq1 = new Image();
      sq1.src='https://s3.us-east-2.amazonaws.com/pxco/SQ1.png';
      let sq2 = new Image();
      sq2.src='https://s3.us-east-2.amazonaws.com/pxco/SQ2.png';

      let sqLoop = () => {
        if (this.going === true) {
        if (this.picture.src === sq1.src) {
          this.picture = sq2;
        } else {
          this.picture = sq1;
        }
        this.ctx.clearRect(0 ,220, 500, 350);
        this.ctx.drawImage(this.picture, this.xaxis, 255);
        this.xaxis += 12;
        if (this.xaxis > 510) {
          this.xaxis = -5;
        }
      }
      };

      setInterval(sqLoop, 100);


  }

  stop() {
    this.xaxis = -10;
  }



}
