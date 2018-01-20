class Obstacles {
  constructor(ctx){
    this.ctx = ctx;
  }



  draw(ctx) {
    let vent = new Image();
    vent.src ='https://s3.us-east-2.amazonaws.com/pxco/ob05.png';
    let barrier = new Image();
    barrier.src ='https://s3.us-east-2.amazonaws.com/pxco/ob04.png';
    let cart = new Image();
    cart.src ='https://s3.us-east-2.amazonaws.com/pxco/ob03.png';
    let trash = new Image();
    trash.src ='https://s3.us-east-2.amazonaws.com/pxco/ob02.png';
    let phone = new Image();
    phone.src ='https://s3.us-east-2.amazonaws.com/pxco/ob01.png';
    const obts = [vent, barrier, cart, trash, phone];

    let x = 200;
    let posX = 505;
    let posY = 250;
    let currentObst = obts[(Math.floor(Math.random() * 5))];



        this.ctx.drawImage(currentObst, posX -= 10, 250, 70, 55);


      if (posX < -10) {
        posX = 505;
        currentObst = obts[(Math.floor(Math.random() * 5))];
      }
    }



}
