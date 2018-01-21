class Dog {
  constructor(ctx, dog1){
    this.ctx = ctx;
    this.picture = dog1;
    this.jumping = false;
    this.descending = false;
    this.xalign = 50;
    this.yalign = 250;
    this.jumpListener = this.jumpListener.bind(this);
    this.jumpListener();
  }

  draw(ctx) {
    let dog1 = new Image();
    dog1.src ='https://s3.us-east-2.amazonaws.com/pxco/Budgie01.png';
    let dog2 = new Image();
    dog2.src ='https://s3.us-east-2.amazonaws.com/pxco/Budgie02.png';
    let dog3 = new Image();
    dog3.src ='https://s3.us-east-2.amazonaws.com/pxco/Budgie03.png';

    if (this.picture.src === dog1.src) {
      this.picture = dog2;
    } else if (this.picture.src === dog2.src) {
      this.picture = dog3;
    } else {
      this.picture = dog1;
    }

    if (this.jumping === true && this.yalign > 175) {
      this.yalign -= 15;
    } else if (this.jumping === true && this.yalign > 150 ) {
      this.yalign -= 5;
    } else if (this.jumping === true && this.yalign === 150 ) {
      this.jumping = false;
      this.descending = true;
    } else if (this.descending === true && this.yalign < 175) {
      this.yalign += 5;
    } else if (this.descending === true && this.yalign < 250) {
      this.yalign += 15;
    } else if (this.descending === true && this.yalign === 250) {
      this.descending = false;
    }
    this.jumpListener();




    // source, x-align, y-align, x-height, y-height
    this.ctx.drawImage(this.picture, this.xalign, this.yalign, 70, 55);
  }




  toggleJump() {
    if (this.jumping === false && this.descending === false) {
      this.jumping = true;
    }
  }

  jumpListener() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        this.toggleJump(); }
      });
    }



}
