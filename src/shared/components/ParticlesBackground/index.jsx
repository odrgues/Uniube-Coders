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

    const isMobile = () => window.innerWidth <= 768;

    const getConfig = () => {
      const mobile = isMobile();

      return {
        particleCount: mobile ? 32 : 60,
        maxDistance: mobile ? 90 : 130,
        velocity: mobile ? 0.18 : 0.3,
        radiusMin: mobile ? 0.5 : 0.8,
        radiusRange: mobile ? 0.45 : 0.8,
        particleOpacity: mobile ? 0.45 : 0.6,
        lineOpacity: mobile ? 0.18 : 0.28,
        lineWidth: mobile ? 0.6 : 0.9,
      };
    };

    let config = getConfig();

    const setCanvasSize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * config.velocity;
        this.vy = (Math.random() - 0.5) * config.velocity;
        this.radius = Math.random() * config.radiusRange + config.radiusMin;
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
        ctx.fillStyle = `rgba(15, 23, 42, ${config.particleOpacity})`;
        ctx.fill();
      }
    }

    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.maxDistance) {
            const opacity = 1 - distance / config.maxDistance;
            ctx.strokeStyle = `rgba(30, 41, 59, ${opacity * config.lineOpacity})`;
            ctx.lineWidth = config.lineWidth;
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

    const handleResize = () => {
      config = getConfig();
      setCanvasSize();
      createParticles();
    };

    setCanvasSize();
    createParticles();
    animate();

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
