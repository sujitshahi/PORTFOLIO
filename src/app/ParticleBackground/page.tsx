'use client';
import { useEffect, useRef } from 'react';




export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    
    // Store cursor position coordinates with interactive check bounds
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 180 // Distance threshold for cursor interactions (180px)
    };

    function resizeCanvas() {
      if (!canvas) return; 
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 1.5; // Slightly larger for better fidelity
        // Slower, elegant drift velocities
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.color = '#a78bfa'; // Signature Violet base
      }

      update() {
        // --- 1. Natural Ambient Drift ---
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0) this.x = canvas!.width;
        if (this.x > canvas!.width) this.x = 0;
        if (this.y < 0) this.y = canvas!.height;
        if (this.y > canvas!.height) this.y = 0;

        // --- 2. Interactive Mouse Gravity Fields ---
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.hypot(dx, dy);

          if (distance < mouse.radius) {
            // Calculated gravitational pull factoring proximity strength scaling
            const force = (mouse.radius - distance) / mouse.radius;
            const forceX = (dx / distance) * force * 0.8;
            const forceY = (dy / distance) * force * 0.8;

            this.x += forceX;
            this.y += forceY;
          }
        }
      }

      draw() {
        ctx!.fillStyle = this.color;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    // --- 3. Proximity Connector Algorithm ---
    function drawLines() {
      const maxDistance = 115; // Max reach vector lengths for webs
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance < maxDistance) {
            // Dynamic alpha scaling: the closer particles get, the brighter the connection glows
            const alpha = (1 - distance / maxDistance) * 0.18;
            ctx!.strokeStyle = `rgba(167, 139, 250, ${alpha})`;
            ctx!.lineWidth = 0.8;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }
    }

    function initParticles() {
      particles = [];
      // Dynamic scaling: adjust amount of particles based on real estate space available
      const numberOfParticles = Math.min(Math.floor((canvas!.width * canvas!.height) / 14000), 120);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    }

    function animateParticles() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      
      // Update/Draw each independent node point
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      // Draw the neural network links connecting them together
      drawLines();
      
      animationFrameId = requestAnimationFrame(animateParticles);
    }

    // Event Tracking Hooks
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    resizeCanvas();
    initParticles();
    animateParticles();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-60"
    />
  );
}