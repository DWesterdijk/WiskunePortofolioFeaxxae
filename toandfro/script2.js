const cv = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let nodeList = [];
let maxNodes = document.getElementById("tb1").value;
let speed = document.getElementById("speed").value;
let resetBtn = document.getElementById("reset");

for (var i = 0; i < maxNodes; i++) {
  let node = {};
  node.pos = new Vector2(randomNumber(800), randomNumber(600));
  node.point = new Dotto(node.pos.dx, node.pos.dy, 10, '#ff00ff');
  //dot.draw();
  nodeList.push(node);
}

console.log(nodeList);

resetBtn.addEventListener('click', ()=>{
  nodeList = [];

  maxNodes = document.getElementById("tb1").value;
  speed = document.getElementById("speed").value;
  target = 0;

  for (var i = 0; i < maxNodes; i++) {
    let node = {};
    node.pos = new Vector2(randomNumber(800), randomNumber(600));
    node.point = new Dotto(node.pos.dx, node.pos.dy, 10, '#ff00ff');
    //dot.draw();
    nodeList.push(node);
  }

});

function drawNodes(){
  ctx.beginPath();
  ctx.moveTo(nodeList[0].pos.dx, nodeList[0].pos.dy);
  for (var i = 0; i < nodeList.length; i++) {
    ctx.lineTo(nodeList[i].pos.dx, nodeList[i].pos.dy);
  }
  ctx.closePath();
  ctx.stroke();
  for (var i = 0; i < nodeList.length; i++) {
    nodeList[i].point.draw();
  }
}

let vec = new Vector2(nodeList[0].pos.dx, nodeList[0].pos.dy);
let player = new Dotto(vec.dx, vec.dy, 10, '#00ff00');
let vel = new Vector2(speed, speed);
let target = 1;


function randomNumber(max){
  return Math.floor(Math.random()*max);
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, 800, 600);

  drawNodes();

  vel.diff(vec, nodeList[target].pos);
  vel.r = speed;
  vec.add(vel);

  player.x = vec.dx;
  player.y = vec.dy;


  if (player.distance(nodeList[target].point) < 3) {
    if (target != (maxNodes - 1)){
      target++;
    } else {
      target = 0;
    }

    vel.diff(vec, nodeList[(target)].pos);
    vel.r = 1;
    vec.add(vel);
  }
  console.log(target);

  player.draw();
}
animate();
