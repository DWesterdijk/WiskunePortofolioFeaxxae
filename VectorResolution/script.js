const cv = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let pointA = new Dotto(100, 100, 10, "#00ff00");
let pointB = new Dotto(500, 500, 10, "#00ff00");
let pointC = new Dotto(500, 250, 10, "#ff00ff");

let lineA = new Liine(0, 0, "#ff00ff");
let lineB = new Liine(0, 0, "#ff0000");

let vec = new Vector2((pointB.x - pointA.x), (pointB.y - pointA.y));
let lVec = new Vector2(1, 1);


function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,800,600);
  vec.dx = pointB.x - pointA.x;
  vec.dy = pointB.y - pointA.y;

  lineA.DefLinePoints(pointA, pointC);
  lineB.DefLineSlopePoint(-1 / lineA.slope, pointA);

  lVec.dx = 1;
  lVec.dy = lineA.slope;
  lVec.r = 1;
  lVec.r = lVec.dot(vec);

  pointA.draw();
  pointA.drag();
  pointB.draw();
  pointB.drag();
  pointC.draw();
  pointC.drag();
  lineA.DrawLine();
  lineB.DrawLine();

  vec.draw(ctx, pointA.x, pointA.y, 1);
  lVec.draw(ctx, pointA.x, pointA.y, 20);
}

animate();
