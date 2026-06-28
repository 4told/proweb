export class BackgroundBalls {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private width = window.innerWidth;
  private height = window.innerHeight;

  private mouse = {
    x: -1000,
    y: -1000
  };

  private balls: Ball[] = [];

  private readonly BALL_COUNT = 150; //count balls
  private readonly MOUSE_RADIUS = 180;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    const ctx = canvas.getContext("2d");

    if (!ctx) throw new Error("Canvas not supported");

    this.ctx = ctx;

    this.resize();

    window.addEventListener("resize", () => this.resize());

    window.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });

    this.createBalls();

    requestAnimationFrame(this.animate);
  }

  private resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.canvas.width = this.width * devicePixelRatio;
    this.canvas.height = this.height * devicePixelRatio;

    this.canvas.style.width = this.width + "px";
    this.canvas.style.height = this.height + "px";

    this.ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }

  private createBalls() {
    this.balls = [];

    for (let i = 0; i < this.BALL_COUNT; i++) {

      const radius = 10 + Math.random() * 50;

      this.balls.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,

        homeX: Math.random() * this.width,
        homeY: Math.random() * this.height,

        vx: (Math.random() - .5) * .6,
        vy: (Math.random() - .5) * .6,

        radius,

        seed: Math.random() * 500,

        alpha: 0.08 + Math.random() * 0.5, //balls alpha channel
      });
    }
  }

  private animate = (time: number) => {

    this.ctx.clearRect(0, 0, this.width, this.height);

    for (const ball of this.balls) {

      const angle = time * 0.0002 + ball.seed;

      ball.vx += Math.cos(angle) * 0.015;
      ball.vy += Math.sin(angle * 0.8) * 0.015;

      const dx = ball.x - this.mouse.x;
      const dy = ball.y - this.mouse.y;

      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < this.MOUSE_RADIUS) {

        const force = (this.MOUSE_RADIUS - dist) / this.MOUSE_RADIUS;

        ball.vx += (dx / dist) * force * 0.8;
        ball.vy += (dy / dist) * force * 0.8;
      }

      ball.vx += (ball.homeX - ball.x) * 0.00015;
      ball.vy += (ball.homeY - ball.y) * 0.00015;

      ball.vx *= .985;
      ball.vy *= .985;

      ball.x += ball.vx;
      ball.y += ball.vy;

      if (ball.x < -100) ball.x = this.width + 100;
      if (ball.x > this.width + 100) ball.x = -100;

      if (ball.y < -100) ball.y = this.height + 100;
      if (ball.y > this.height + 100) ball.y = -100;

      this.drawBall(ball, time);
    }

    requestAnimationFrame(this.animate);
  };

  private drawBall(ball: Ball, time: number) {

    const pulse = Math.sin(time * 0.001 + ball.seed);

    const radius = ball.radius + pulse * 5;

    const gradient = this.ctx.createRadialGradient(
      ball.x,
      ball.y,
      0,
      ball.x,
      ball.y,
      radius
    );

    gradient.addColorStop(0, `rgba(74,158,255,${ball.alpha})`); //colors ball
    gradient.addColorStop(.5, `rgba(74,158,255,${ball.alpha * .6})`); // balls gradiend
    gradient.addColorStop(1, "rgba(74,158,255,0)");


    // gradient.addColorStop(1, `rgba(74,158,255,${ball.alpha})`); //colors ball
    // gradient.addColorStop(.8, `rgba(74,158,255,${ball.alpha * .6})`); // balls gradiend
    // gradient.addColorStop(.9, `rgba(74,158,255,${ball.alpha})`);

    this.ctx.beginPath();

    this.ctx.fillStyle = gradient;

    this.ctx.arc(ball.x, ball.y, radius, 0, Math.PI * 2);

    this.ctx.fill();
  }
}

interface Ball {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  radius: number;
  seed: number;
  alpha: number;
}