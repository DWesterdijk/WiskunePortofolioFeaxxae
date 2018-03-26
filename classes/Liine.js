class Liine {
  constructor(slope, yIntercept, colour) {
    this.slope = slope;
    this.yIntercept = yIntercept;
    this.colour = colour || "#000000";
  }
  calcY(x){
    //console.log("Liine")
    return this.slope * x + this.yIntercept;
  }
  DefLinePoints(A, B){
    let dx, dy;
    dx = B.x - A.x;
    dy = B.y - A.y;
    this.slope = dy / dx;
    this.yIntercept = A.y - (A.x * this.slope);
  }

  DefLineSlopePoint(slope, point) {
    this.slope = slope;
    this.yIntercept = point.y - point.x * this.slope;
  }

  Interception(line) {
    var ans = {};
    ans.x = (line.yIntercept - this.yIntercept) / (this.slope - line.slope);
    ans.y = (ans.x * this.slope) + this.yIntercept;
    return ans;
  }

  DrawLine(){
    ctx.beginPath();
    ctx.fillStyle = this.colour;
    ctx.moveTo(0, this.calcY(0));
    ctx.lineTo(800, this.calcY(800));
    ctx.stroke();
    ctx.closePath();
  }
}
