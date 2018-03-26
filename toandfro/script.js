const cv = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//ballC
let vecA = new Vector2(100, 100);
let vecB = new Vector2(500, 500);
let vecD = new Vector2(100, 500);
let vecE = new Vector2(500, 100);
let vecC = new Vector2(vecA.dx, vecA.dy);

let pointA = new Dotto(vecA.dx, vecA.dy, 10, "#00ff00");
let pointB = new Dotto(vecB.dx, vecB.dy, 10, "#00ff00");
let pointD = new Dotto(vecD.dx, vecD.dy, 10, "#00ff00");
let pointE = new Dotto(vecE.dx, vecE.dy, 10, "#00ff00");
let pointCenter = new Dotto(300, 300, 10, "#0000ff");

let ballC = new Dotto(vecC.dx, vecC.dy, 10, "#ff00ff");
//end ballC

//ballF
let vecG = new Vector2(650, 500);
let vecH = new Vector2(650, 100);
let vecF = new Vector2(vecG.dx, vecG.dy);

let pointG = new Dotto(vecG.dx, vecG.dy, 10, "#ff0000");
let pointH = new Dotto(vecH.dx, vecH.dy, 10, "#ff0000");

let ballF = new Dotto(vecF.dx, vecF.dy, 10, "#ffff00");
//end ballF

let pos = new Vector2(pointA.x, pointA.y);
let vel = new Vector2(1, 1);
let vel2 = new Vector2(0, -1);
let acc = new Vector2();

let tar = pointB;

let gameObject = {};
gameObject.pos = new Vector2(100, 100);
gameObject.point = new Dotto(gameObject.pos, 10, '#ff00ff');

let pointArray = [pointA, pointB, pointD, pointE];

let lineA = new PointLine(vecA.dx, vecA.dy, vecB.dx, vecB.dy);
let lineB = new PointLine(vecB.dx, vecB.dy, vecD.dx, vecD.dy);
let lineD = new PointLine(vecD.dx, vecD.dy, vecE.dx, vecE.dy);
let lineE = new PointLine(vecE.dx, vecE.dy, vecA.dx, vecA.dy);
let lineF = new PointLine(pointG.x, pointG.y, pointH.x, pointH.y);

//vel.diff(vecA, vecB);
//vel.draw(ctx, vecA.dx, vecA.dy);

//ballC draw
vecA.draw(ctx, 0, 0, 1);
pointA.draw();
vecB.draw(ctx, 0, 0, 1);
pointB.draw();
vecD.draw(ctx, 0, 0, 1);
pointD.draw();
pointCenter.draw();
ballC.draw();
//end ballC draw

//ballF draw
pointG.draw();
pointH.draw();
ballF.draw();
//end ballF draw

lineA.draw();
lineB.draw();
lineD.draw();
lineE.draw();
lineF.draw();

console.log(pointArray);

function animate(){
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, 800, 600);

  vecC.add(vel);
  vecF.add(vel2);
  //ballC draw
  ballC.x = vecC.dx;
  ballC.y = vecC.dy;

  pointA.draw();
  pointB.draw();
  pointD.draw();
  pointE.draw();
  pointA.drag();
  pointB.drag();
  pointD.drag();
  pointE.drag();

  ballC.draw();
  //end ballC draw

  //ballF draw
  ballF.x = vecF.dx;
  ballF.y = vecF.dy;

  pointG.draw();
  pointH.draw();
  pointG.drag();
  pointH.drag();

  ballF.draw();
  //end ballF draw

  vecA = new Vector2(pointA.x, pointA.y);
  vecB = new Vector2(pointB.x, pointB.y);
  vecD = new Vector2(pointD.x, pointD.y);
  vecE = new Vector2(pointE.x, pointE.y);

  lineA.draw();
  lineB.draw();
  lineD.draw();
  lineE.draw();
  lineF.draw();
  lineA = new PointLine(pointA.x, pointA.y, pointB.x, pointB.y);
  lineB = new PointLine(pointB.x, pointB.y, pointD.x, pointD.y);
  lineD = new PointLine(pointD.x, pointD.y, pointE.x, pointE.y);
  lineE = new PointLine(pointE.x, pointE.y, pointA.x, pointA.y);
  lineF = new PointLine(pointG.x, pointG.y, pointH.x, pointH.y);

  if (ballC.x == pointB.x && ballC.y == pointB.y)
  {
      console.log('Point B reached');
      vel = new Vector2(-1, 0);
  }
  if (ballC.x == pointD.x && ballC.y == pointD.y)
  {
      console.log('Point D reached');
      vel = new Vector2(1, -1);
  }
  if (ballC.x == pointE.x && ballC.y == pointE.y)
  {
      console.log('Point E reached');
      vel = new Vector2(-1, 0);
  }
  if (ballC.x == pointA.x && ballC.y == pointA.y)
  {
      console.log('Point A reached');
      vel = new Vector2(1, 1);
  }
  //end ballC
  //BallF
  if (ballF.x == pointH.x && ballF.y == pointH.y)
  {
    console.log('Point H reached');
    vel2 = new Vector2(0, 1);
  }
  if (ballF.x == pointG.x && ballF.y == pointG.y)
  {
    console.log('Point G reached');
    vel2 = new Vector2(0, -1);
  }
}

animate();
