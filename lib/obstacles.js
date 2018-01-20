class Obstacles {
  constructor(ctx, currentObst, posX){
    this.ctx = ctx;
    this.posX = 505;
  }



  draw(ctx, obst) {

    let xaxis = this.posX;

    ctx.drawImage(obst, this.posX, 250, 70, 55);
    this.posX -= 10;


      if (this.posX < -40) {
        this.posX = 505;
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
        let currentObst = obts[(Math.floor(Math.random() * 5))];
        let zebra = new Obstacles(this.ctx, currentObst, 505);
      }
    }



}
