const cv = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

var line;
var slope, yIntercept;
var dx, dxA;
var dy, dyA;

dA = new Dotto(110, 300, 10, "#00ff00");
dB = new Dotto(740, 400, 10, "#ff00ff");
dC = new Dotto(200, 200, 10, "#ff0000");
dD = new Dotto(420, 100, 10, "#000000");
dA.draw();
dA.drag();
dB.draw();
dB.drag();
dC.draw();
dC.drag();
dD.draw();
dD.drag();
line1 = new Liine(0, 0);
line2 = new Liine(100, 100);

setInterval(loop,1);

function loop(){
  ctx.clearRect(0,0,800,450);

  dA.draw();
  dB.draw();
  dC.draw();
  dD.draw();

  line1.DefLinePoints(dA, dB);
  line2.DefLinePoints(dC, dD);
  line1.DrawLine(ctx);
  line2.DrawLine(ctx);
}
