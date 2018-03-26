const cv = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let pointA = new Dotto(100, 100, 10, "#00ff00");
let pointB = new Dotto(500, 500, 10, "#ff0000");

let g = {};
g.pos = new Vector2(600, 200);
g.point = new Dotto(g.pos.dx, g.pos.dy, 10, "#0000ff");
g.vel = new Vector2(2, 1);
g.rad = new Vector2(1, 1);
g.tan = new Vector2(-1, -1);
g.update = () => {
  g.pos.add(g.vel);
  g.point.x = g.pos.dx;
  g.point.y = g.pos.dy;
  if (g.pos.dx > (800 - g.point.r) || g.pos.dx < (0 + g.point.r)) {
    g.vel.dx = -g.vel.dx;
  }
  if (g.pos.dy > (600 - g.point.r) || g.pos.dy < (0 + g.point.r)) {
    g.vel.dy = -g.vel.dy;
  }
}

let h = {};
h.pos = new Vector2(300, 300);
h.point = new Dotto(h.pos.dx, h.pos.dy, 10, "#ff00ff");
h.update = () => {
  h.point.x = h.pos.dx;
  h.point.y = h.pos.dy;
}

let lineA = new Liine(1, 1);
let lineB = new Liine(1, 1);

let temp = 0;

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, 800, 600);

  lineA.DefLinePoints(pointA, pointB);
  lineA.DrawLine();
  lineB.DefLineSlopePoint(-1 / lineA.slope, g.point);
  lineB.DrawLine();

  g.update();
  g.tan.dx = 1;
  g.tan.dy = lineA.slope;
  g.tan.r = 1;
  g.tan.r = g.tan.dot(g.vel);

  g.rad.dx = -g.tan.dy;
  g.rad.dy = g.tan.dx;
  g.rad.r = 1;
  g.rad.r = g.rad.dot(g.vel);

  g.vel.draw(ctx, g.pos.dx, g.pos.dy, 50, "#ff0055");
  g.rad.draw(ctx, g.pos.dx, g.pos.dy, 50, "#00ff00");
  g.tan.draw(ctx, g.pos.dx, g.pos.dy, 50, "#0000ff");
  g.point.draw();
  if (g.pos.dy <= lineA.slope * g.pos.dx + lineA.yIntercept && temp < 4){
    g.point.c = "#ff0000";
    temp = 0;
  } else {
    g.rad.angle += Math.PI;
    g.vel.sum(g.rad, g.tan);
    temp++;
  }


  h.pos.dx = lineA.Interception(lineB).x;
  h.pos.dy = lineA.Interception(lineB).y;
  h.point.draw();
  h.update();

  pointA.draw();
  pointB.draw();
  pointA.drag();
  pointB.drag();

}
animate();
