class PointLine
{
  constructor(pointA_x, pointA_y, pointB_x, pointB_y)
  {
    this.pointA_x = pointA_x;
    this.pointA_y = pointA_y;
    this.pointB_x = pointB_x;
    this.pointB_y = pointB_y;
  }
  draw(){
    //console.log('drawing');
    ctx.beginPath();
    ctx.moveTo(this.pointA_x, this.pointA_y);
    ctx.lineTo(this.pointB_x, this.pointB_y);
    ctx.stroke();
    ctx.closePath();
    //console.log('done drawing');
  }
}
