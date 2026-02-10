const canvasDotsBg = function () {
  const canvas = document.querySelector('.canvas-2');
  if (!canvas) return; // ✅ HARD GUARD

  const ctx = canvas.getContext('2d');
  if (!ctx) return; // ✅ HARD GUARD

  const colorDot = [
    'rgb(81, 162, 233)',
    'rgb(81, 162, 233)',
    'rgb(255, 77, 90)',
  ];

  canvas.width = document.body.scrollWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';

  ctx.lineWidth = 0.3;

  let dots = { nb: 60, array: [] };

  function Dot() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 1.5;
    this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
  }

  Dot.prototype.create = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.colour;
    ctx.fill();
  };

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.array = [];

    for (let i = 0; i < dots.nb; i++) {
      const dot = new Dot();
      dots.array.push(dot);
      dot.create();
    }
  }

  setInterval(draw, 1000 / 30);
};

export default canvasDotsBg;
