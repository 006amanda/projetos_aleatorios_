// anima patinhos caindo fofamente por toda tela

const canvas = document.getElementById("patos");
const ctx = canvas.getContext("2d");
let width, height;

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let patos = [];
for (let i = 0; i < 45; i++) {
  patos.push({
    x: Math.random() * width,
    y: Math.random() * height,
    s: 0.4 + Math.random() * 0.9, // cai bem mais devagar
  });
}

function draw() {
  ctx.clearRect(0, 0, width, height);

  patos.forEach((p) => {
    p.y += p.s;
    if (p.y > height + 50) {
      // renasce no topo random
      p.y = -50;
      p.x = Math.random() * width;
    }

    ctx.font = "44px serif"; // pouquinho maior
    ctx.globalAlpha = 0.5; // leve, mas visível
    ctx.fillText("🐤", p.x, p.y);
  });

  requestAnimationFrame(draw);
}

draw();
