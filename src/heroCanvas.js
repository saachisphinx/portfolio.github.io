const canvasDots = function () {
  const canvas = document.querySelector('.connecting-dots');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const dotColor = 'rgba(142, 209, 252, 0.9)'; // light cyan #8ed1fc
  const lineColor = 'rgba(204, 204, 204, 0.35)'; // light gray #cccccc, subtle

  function setSize() {
    canvas.width = document.body.scrollWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';
  }
  setSize();
  window.addEventListener('resize', setSize);

  const windowSize = window.innerWidth;
  let dotCount = 120;
  let maxDistance = 140;
  if (windowSize > 1600) {
    dotCount = 180;
    maxDistance = 160;
  } else if (windowSize > 1100) {
    dotCount = 140;
    maxDistance = 150;
  } else if (windowSize > 700) {
    dotCount = 100;
    maxDistance = 130;
  }

  function Dot() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = -0.3 + Math.random() * 0.6;
    this.vy = -0.3 + Math.random() * 0.6;
    this.radius = Math.random() * 1.2 + 0.5;
  }

  const dotsArray = [];
  for (let i = 0; i < dotCount; i++) {
    dotsArray.push(new Dot());
  }

  function drawDot(dot) {
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
    ctx.fillStyle = dotColor;
    ctx.fill();
  }

  function drawLines() {
    for (let i = 0; i < dotsArray.length; i++) {
      for (let j = i + 1; j < dotsArray.length; j++) {
        const dx = dotsArray[i].x - dotsArray[j].x;
        const dy = dotsArray[i].y - dotsArray[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(dotsArray[i].x, dotsArray[i].y);
          ctx.lineTo(dotsArray[j].x, dotsArray[j].y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function updateDots() {
    for (let i = 0; i < dotsArray.length; i++) {
      const d = dotsArray[i];
      d.x += d.vx;
      d.y += d.vy;
      if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
      if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLines();
    dotsArray.forEach((dot) => drawDot(dot));
    updateDots();
  }

  setInterval(draw, 1000 / 30);
};

export default canvasDots;
