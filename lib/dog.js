class Dog {
  constructor(ctx, dog1){
    this.ctx = ctx;
    this.picture = dog1;
  }

  draw(ctx) {
    let dog1 = new Image();
    dog1.src ='https://s3.us-east-2.amazonaws.com/pxco/Budgie01.png';
    let dog2 = new Image();
    dog2.src ='https://s3.us-east-2.amazonaws.com/pxco/Budgie02.png';
    let dog3 = new Image();
    dog3.src ='https://s3.us-east-2.amazonaws.com/pxco/Budgie03.png';

    // source, x-align, y-align, x-height, y-height

    if (this.picture.src === dog1.src) {
      this.picture = dog2;
    } else if (this.picture.src === dog2.src) {
      this.picture = dog3;
    } else {
      this.picture = dog1;
    }

    this.ctx.drawImage(this.picture, 50, 250, 70, 55);


  }


  update(ctx) {
    let dog1 = new Image();
    dog1.src ='https://s3.us-east-2.amazonaws.com/pxco/Budgie01.png';
    let dog2 = new Image();
    dog2.src ='https://s3.us-east-2.amazonaws.com/pxco/Budgie02.png';
    let dog3 = new Image();
    dog3.src = 'https://s3.us-east-2.amazonaws.com/pxco/Budgie03.png';
    let picture;
    if (picture === dog1) {
      picture = dog2;
    } else if (picture === dog2) {
      picture = dog3;
    } else {
      picture = dog1;
    }
    this.draw(ctx, picture);
  }



}
