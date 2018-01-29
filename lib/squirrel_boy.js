class Squirrel {
  constructor(ctx, picture, secondpicture, start1, start2){
    this.ctx = ctx;
    this.picture = picture;
    this.secondpicture = secondpicture;
    this.start1 = start1;
    this.start2 = start2;;

    this.going = true;
    // this.picture = sq2;

  }

  draw(ctx) {

      let sq1 = new Image();
      sq1.src='https://s3.us-east-2.amazonaws.com/pxco/SQ1.png';
      let sq2 = new Image();
      sq2.src='https://s3.us-east-2.amazonaws.com/pxco/SQ2.png';

      let sqb1 = new Image();
      sqb1.src='https://s3.us-east-2.amazonaws.com/pxco/SQb01.png';
      let sqb2 = new Image();
      sqb2.src='https://s3.us-east-2.amazonaws.com/pxco/SQB02.png';

      let sqLoop = () => {
        if (this.going === true) {
        if (this.picture.src === sq1.src) {
          this.picture = sq2;
        } else {
          this.picture = sq1;
        }
        if (this.secondpicture.src === sqb1.src) {
          this.secondpicture = sqb2;
        } else {
          this.secondpicture = sqb1;
        }
        this.ctx.clearRect(0 ,220, 500, 350);
        this.ctx.drawImage(this.picture, this.start1, 255);
        this.ctx.drawImage(this.secondpicture, this.start2, 255);
        this.start1 += 12;
        this.start2 += 12;
        if (this.start1 > 510) {
          this.start1 = -15;
        }
        if (this.start2 > 510) {
          this.start2 = -15;
        }
      }
      };

      setInterval(sqLoop, 100);


  }

  stop() {
    this.xaxis = -10;
  }



}
