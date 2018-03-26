const cv = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

var line;
var slope, yIntercept;
var dx, dxA;
var dy, dyA;

dA = new Dotto(110, 300, 10, "#00ff00");
dB = new Dotto(740, 400, 10, "#ff00ff");
dA.draw();
dA.drag();
dB.draw();
dB.drag();
line1 = new Liine(0, 0);

setInterval(loop,1);

function loop(){
  ctx.clearRect(0,0,800,450);

  dA.draw();
  dB.draw();

  line1.DefLinePoints(dA, dB);
  line1.DrawLine(ctx);
}
