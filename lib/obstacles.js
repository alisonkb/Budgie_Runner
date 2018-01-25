class Obstacles {
  constructor(ctx, currentObst, posX, obSpeed){
    this.ctx = ctx;
    this.posX = 505;
    this.currentObst = currentObst;
    this.obSpeed = 15;
  }



  draw(ctx) {

    let xaxis = this.posX;

    ctx.drawImage(this.currentObst, this.posX, 230, 80, 80);
    this.posX -= this.obSpeed;


      if (this.posX < -55) {
        this.posX = 505;
        let vent = new Image();
        vent.src ='https://s3.us-east-2.amazonaws.com/pxco/ob05.png';
        let barrier = new Image();
        barrier.src ='https://s3.us-east-2.amazonaws.com/pxco/zeb01.png';
        let cart = new Image();
        cart.src ='https://s3.us-east-2.amazonaws.com/pxco/zeb02.png';
        let trash = new Image();
        trash.src ='https://s3.us-east-2.amazonaws.com/pxco/zeb03.png';
        let phone = new Image();
        phone.src ='https://s3.us-east-2.amazonaws.com/pxco/zeb04.png';
        const obts = [vent, barrier, cart, trash, phone];
        this.currentObst = obts[(Math.floor(Math.random() * 5))];
        // let zebra = new Obstacles(this.ctx, currentObst, 505);
      }
    }




}
