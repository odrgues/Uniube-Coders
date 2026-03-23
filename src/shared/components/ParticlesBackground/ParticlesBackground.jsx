import { useEffect, useRef } from "react";
import { Canvas, Container } from "./styles";

const ParticlesBackground = ({ children }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext("2d");

    let animationId;
    let width = 0;
    let height = 0;
    const particles = [];

    const PARTICLE_COUNT = 50;
    const MAX_DISTANCE = 110;

    const setCanvasSize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.radius = 1.5;
      }

      move() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= width) this.vx *= -1;
        if (this.y <= 0 || this.y >= height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(8, 17, 32, 0.35)";
        ctx.fill();
      }
    }

    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MAX_DISTANCE) {
            const opacity = 1 - distance / MAX_DISTANCE;
            ctx.strokeStyle = `rgba(37, 99, 235, ${opacity * 0.22})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.move();
        particle.draw();
      });

      connectParticles();
      animationId = window.requestAnimationFrame(animate);
    };

    setCanvasSize();
    createParticles();
    animate();

    const handleResize = () => {
      setCanvasSize();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <Canvas ref={canvasRef} />
      {children && (
        <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
      )}
    </Container>
  );
};

export default ParticlesBackground;
