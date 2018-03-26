class Dotto {
  constructor(x,y,r,c) {
    //console.log("Dotto dotto dotto dotto");
    this.x = x;
    this.y = y;
    this.r = r || 20;
    this.c = c || "#000000";
  }
  draw(){
    //console.log("Dotto draw Dotto draw Dotto draw Dotto draw");
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
  drag(){
    let drag = false;
    let xMouse, yMouse, x, y, distance;

    cv.addEventListener('mousedown',(e)=>{
      let rect = cv.getBoundingClientRect();
      xMouse = e.clientX - rect.left;
      yMouse = e.clientY - rect.top;
      x = xMouse - this.x;
      y = yMouse - this.y;
      distance = Math.sqrt((x * x) + (y * y));
      if(distance <= this.r) {
        drag = true;
      }
      else {
        drag = false;
      }
    });
    cv.addEventListener('mouseup',(e)=>{
      drag = false;
    });
    cv.addEventListener('mousemove',(evt)=>{
      if(drag){
        let rect = cv.getBoundingClientRect();
        xMouse= evt.clientX - rect.left;
        yMouse = evt.clientY - rect.top;
        x = xMouse - this.x;
        y = yMouse - this.y;
        this.x = xMouse;
        this.y = yMouse;
      }
    });
  }
  distance(dist){
    let dx = dist.x - this.x;
    let dy = dist.y - this.y;
    return Math.sqrt((dx * dx) + (dy * dy));
  }
}
