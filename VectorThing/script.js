const cv = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let ball = new Dotto(100,100,10,"#ff00ff");
//let ball2 = new Dotto(100,100,10,"#00ff00");
let pos = new Vector2(100,300);
//let pos2 = new Vector(0,300);
let vel = new Vector2(1,2);
//let vel2 = new Vector(1,1);
let acc = new Vector2(0,1);
//let acc2 = new Vector(0,-1);
let Epot = 600 - pos.dy;

function Movement(){
  requestAnimationFrame(Movement)
  ctx.clearRect(0,0,800,600);
  ball.x = pos.dx;
  ball.y = pos.dy;
  // ball2.x = pos2.dx;
  // ball2.y = pos2.dy;
  // pos.dx += vel.dx;
  // pos.dy += vel.dy;
  pos.add(vel);
  //pos2.add(vel2);
  vel.add(acc);
  //vel2.add(acc2);

  if ((pos.dx - ball.r) < 0 || (pos.dx + ball.r) > 800){
    vel.dx = -vel.dx;
  }
  if ((pos.dy - ball.r) < 0 || (pos.dy + ball.r) > 600){
    vel.dy = Math.sqrt(2 * Epot);
    vel.dy = -vel.dy;
  }
  // if (pos2.dx < 0 || pos2.dx > 800){
  //   vel2.dx = -vel2.dx;
  // }
  // if ((pos2.dy + ball2.r) < 0 || (pos2.dy + ball2.r) > 600){
  //   vel2.dy = -vel2.dy;
  // }

  //console.log(vel2);

  ball.draw();
  vel.draw(ctx,ball.x,ball.y,10);
  //ball2.draw();
  //console.log(pos.rad);
}

Movement();
