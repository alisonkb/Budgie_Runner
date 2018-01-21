class Obstacles {
  constructor(ctx, currentObst, posX){
    this.ctx = ctx;
    this.posX = 505;
    this.currentObst = currentObst;
  }



  draw(ctx) {

    let xaxis = this.posX;

    ctx.drawImage(this.currentObst, this.posX, 220, 80, 80);
    this.posX -= 15;


      if (this.posX < -55) {
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
        this.currentObst = obts[(Math.floor(Math.random() * 5))];
        // let zebra = new Obstacles(this.ctx, currentObst, 505);
      }
    }




}
