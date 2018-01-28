class Dog {
  constructor(ctx, dog1){
    this.ctx = ctx;
    this.picture = dog1;
    this.jumping = false;
    this.descending = false;
    this.xalign = 55;
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
    let dog4 = new Image();
    dog4.src ='https://s3.us-east-2.amazonaws.com/pxco/Budgiejump.png';

    if (this.picture.src === dog1.src) {
      this.picture = dog2;
    } else if (this.picture.src === dog2.src) {
      this.picture = dog3;
    } else if (this.jumping === true || this.descending === true) {
      this.picture = dog4;
    } else {
      this.picture = dog1;
    }

    if (this.jumping === true && this.yalign > 110) {
      this.yalign -= 35;
    } else if (this.jumping === true && this.yalign > 100 ) {
      this.yalign -= 2.5;
    } else if (this.jumping === true && this.yalign === 100 ) {
      this.jumping = false;
      this.descending = true;
    } else if (this.descending === true && this.yalign < 110) {
      this.yalign += 2.5;
    } else if (this.descending === true && this.yalign < 250) {
      this.yalign += 35;
    } else if (this.descending === true && this.yalign === 250) {
      this.descending = false;
    }
    this.jumpListener();


    // source, x-align, y-align, x-width, y-height
    this.ctx.drawImage(this.picture, this.xalign, this.yalign, 70, 55);
  }

  clearDog () {
    window.clearRect(0,0,500,350);
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
      window.addEventListener('touchstart', (e) => {
        this.toggleJump();
      });
    }



}
