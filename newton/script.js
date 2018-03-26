var cv = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let ball = new Dotto(100,100,10,"#ff00ff");
let pos = new Vector2(100,100);

function Movement(){
  requestAnimationFrame(Movement);
  ctx.clearRect(0,0,800,600);

  ball.draw();
}

Movement();
