const cv = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

//var dot = new Dotto(400,200,20,"#123456");
var line;
var slope, yIntercept;
var dx, dxA, dxB, dxC, dxD, dxE, dxF;
var dy, dyA, dyB, dyC, dyD, dyE, dyF;
var dA, dB, dC, dD, dE, dF;

dA = new Dotto(110, 300, 10, "#00ff00");
dB = new Dotto(740, 400, 10, "#ff00ff");
dC = new Dotto(100, 100, 10, "#ff0000");
dD = new Dotto(100, 100, 10, "#ffff00");
dE = new Dotto(100, 100, 10, "#ff0000");
dF = new Dotto(100, 100, 10, "#ff0000");
dA.draw();
dA.drag();
dB.draw();
dB.drag();
dC.draw();
dC.drag();
line1 = new Liine(0, 0);
line2 = new Liine(0, 0);
line3 = new Liine(0, 0);
line4 = new Liine(0, 0);
line5 = new Liine(0, 0);
line6 = new Liine(0, 0);

setInterval(loop,1)

function loop(){
  ctx.clearRect(0,0,800,450);

  //dot.draw();
  dA.draw();
  dB.draw();
  dC.draw();

  dD.x = (dA.x + dB.x) / 2;
  dD.y = (dA.y + dB.y) / 2;
  dE.x = (dB.x + dC.x) / 2;
  dE.y = (dB.y + dC.y) / 2;
  dF.x = (dC.x + dA.x) / 2;
  dF.y = (dC.y + dA.y) / 2;

  dD.draw();
  dE.draw();
  dF.draw();

  line1.DefLinePoints(dA, dB);
  line2.DefLinePoints(dB, dC);
  line3.DefLinePoints(dC, dA);
  line4.DefLinePoints(dA, dE);
  line5.DefLinePoints(dB, dF);
  line6.DefLinePoints(dC, dD);
  line1.DrawLine(ctx);
  line2.DrawLine(ctx);
  line3.DrawLine(ctx);
  line4.DrawLine(ctx);
  line5.DrawLine(ctx);
  line6.DrawLine(ctx);
}
