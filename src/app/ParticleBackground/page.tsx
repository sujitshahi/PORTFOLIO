// 'use client';
// import { useEffect, useRef } from 'react';




// export default function ParticleBackground() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let particles: Particle[] = [];
//     let animationFrameId: number;
    
//     // Store cursor position coordinates with interactive check bounds
//     const mouse = {
//       x: null as number | null,
//       y: null as number | null,
//       radius: 180 // Distance threshold for cursor interactions (180px)
//     };

//     function resizeCanvas() {
//       if (!canvas) return; 
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     }

//     class Particle {
//       x: number;
//       y: number;
//       baseX: number;
//       baseY: number;
//       size: number;
//       speedX: number;
//       speedY: number;
//       color: string;

//       constructor() {
//         this.x = Math.random() * canvas!.width;
//         this.y = Math.random() * canvas!.height;
//         this.baseX = this.x;
//         this.baseY = this.y;
//         this.size = Math.random() * 2 + 1.5; // Slightly larger for better fidelity
//         // Slower, elegant drift velocities
//         this.speedX = (Math.random() - 0.5) * 0.4;
//         this.speedY = (Math.random() - 0.5) * 0.4;
//         this.color = '#a78bfa'; // Signature Violet base
//       }

//       update() {
//         // --- 1. Natural Ambient Drift ---
//         this.x += this.speedX;
//         this.y += this.speedY;
        
//         if (this.x < 0) this.x = canvas!.width;
//         if (this.x > canvas!.width) this.x = 0;
//         if (this.y < 0) this.y = canvas!.height;
//         if (this.y > canvas!.height) this.y = 0;

//         // --- 2. Interactive Mouse Gravity Fields ---
//         if (mouse.x !== null && mouse.y !== null) {
//           const dx = mouse.x - this.x;
//           const dy = mouse.y - this.y;
//           const distance = Math.hypot(dx, dy);

//           if (distance < mouse.radius) {
//             // Calculated gravitational pull factoring proximity strength scaling
//             const force = (mouse.radius - distance) / mouse.radius;
//             const forceX = (dx / distance) * force * 0.8;
//             const forceY = (dy / distance) * force * 0.8;

//             this.x += forceX;
//             this.y += forceY;
//           }
//         }
//       }

//       draw() {
//         ctx!.fillStyle = this.color;
//         ctx!.beginPath();
//         ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx!.fill();
//       }
//     }

//     // --- 3. Proximity Connector Algorithm ---
//     function drawLines() {
//       const maxDistance = 115; // Max reach vector lengths for webs
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const distance = Math.hypot(dx, dy);

//           if (distance < maxDistance) {
//             // Dynamic alpha scaling: the closer particles get, the brighter the connection glows
//             const alpha = (1 - distance / maxDistance) * 0.18;
//             ctx!.strokeStyle = `rgba(167, 139, 250, ${alpha})`;
//             ctx!.lineWidth = 0.8;
//             ctx!.beginPath();
//             ctx!.moveTo(particles[i].x, particles[i].y);
//             ctx!.lineTo(particles[j].x, particles[j].y);
//             ctx!.stroke();
//           }
//         }
//       }
//     }

//     function initParticles() {
//       particles = [];
//       // Dynamic scaling: adjust amount of particles based on real estate space available
//       const numberOfParticles = Math.min(Math.floor((canvas!.width * canvas!.height) / 14000), 120);
//       for (let i = 0; i < numberOfParticles; i++) {
//         particles.push(new Particle());
//       }
//     }

//     function animateParticles() {
//       ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      
//       // Update/Draw each independent node point
//       for (let i = 0; i < particles.length; i++) {
//         particles[i].update();
//         particles[i].draw();
//       }
      
//       // Draw the neural network links connecting them together
//       drawLines();
      
//       animationFrameId = requestAnimationFrame(animateParticles);
//     }

//     // Event Tracking Hooks
//     const handleMouseMove = (e: MouseEvent) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     };

//     const handleMouseLeave = () => {
//       mouse.x = null;
//       mouse.y = null;
//     };

//     const handleResize = () => {
//       resizeCanvas();
//       initParticles();
//     };

//     resizeCanvas();
//     initParticles();
//     animateParticles();

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseleave', handleMouseLeave);
//     window.addEventListener('resize', handleResize);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseleave', handleMouseLeave);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-60"
//     />
//   );
// }






// 'use client';
// import { useEffect, useRef } from 'react';

// export default function ElegantBackground() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let animationFrameId: number;
    
//     // Smooth mouse tracking coordinates
//     const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
//     let isMoving = false;

//     // Ambient floating lights data
//     const blobs = [
//       { x: 0, y: 0, targetX: 0, targetY: 0, size: 350, speed: 0.01, color: 'rgba(167, 139, 250, 0.12)' }, // Violet
//       { x: 0, y: 0, targetX: 0, targetY: 0, size: 450, speed: 0.008, color: 'rgba(14, 165, 233, 0.08)' } // Cyan
//     ];

//     function resizeCanvas() {
//       if (!canvas) return;
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
      
//       // Initialize blob spots based on new window sizes
//       blobs.forEach(blob => {
//         blob.x = Math.random() * canvas.width;
//         blob.y = Math.random() * canvas.height;
//         blob.targetX = Math.random() * canvas.width;
//         blob.targetY = Math.random() * canvas.height;
//       });
//     }

//     function animate() {
//       ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

//       // --- 1. Draw Elegant Ambient Blobs ---
//       blobs.forEach(blob => {
//         // Linear Interpolation (Lerp) towards dynamic random locations
//         blob.x += (blob.targetX - blob.x) * blob.speed;
//         blob.y += (blob.targetY - blob.y) * blob.speed;

//         // Pick new target coordinates when close enough
//         if (Math.hypot(blob.targetX - blob.x, blob.targetY - blob.y) < 20) {
//           blob.targetX = Math.random() * canvas!.width;
//           blob.targetY = Math.random() * canvas!.height;
//         }

//         const gradient = ctx!.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.size);
//         gradient.addColorStop(0, blob.color);
//         gradient.addColorStop(1, 'transparent');

//         ctx!.fillStyle = gradient;
//         ctx!.beginPath();
//         ctx!.arc(blob.x, blob.y, blob.size, 0, Math.PI * 2);
//         ctx!.fill();
//       });

//       // --- 2. Draw Subtle Interactive Crosshair & Ring ---
//       if (isMoving) {
//         // Smoothly ease mouse coordinates for premium feel
//         mouse.x += (mouse.targetX - mouse.x) * 0.15;
//         mouse.y += (mouse.targetY - mouse.y) * 0.15;

//         ctx!.strokeStyle = 'rgba(167, 139, 250, 0.25)';
//         ctx!.lineWidth = 1;

//         // Minimalist Target Ring
//         ctx!.beginPath();
//         ctx!.arc(mouse.x, mouse.y, 12, 0, Math.PI * 2);
//         ctx!.stroke();

//         // Crosshair Lines
//         ctx!.strokeStyle = 'rgba(167, 139, 250, 0.08)';
        
//         // Horizontal Line
//         ctx!.beginPath();
//         ctx!.moveTo(0, mouse.y);
//         ctx!.lineTo(canvas!.width, mouse.y);
//         ctx!.stroke();

//         // Vertical Line
//         ctx!.beginPath();
//         ctx!.moveTo(mouse.x, 0);
//         ctx!.lineTo(mouse.x, canvas!.height);
//         ctx!.stroke();
//       }

//       animationFrameId = requestAnimationFrame(animate);
//     }

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!isMoving) {
//         // Snaps to positions instantly on initial entry
//         mouse.x = e.clientX;
//         mouse.y = e.clientY;
//         isMoving = true;
//       }
//       mouse.targetX = e.clientX;
//       mouse.targetY = e.clientY;
//     };

//     const handleMouseLeave = () => {
//       isMoving = false;
//     };

//     const handleResize = () => {
//       resizeCanvas();
//     };

//     resizeCanvas();
//     animate();

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseleave', handleMouseLeave);
//     window.addEventListener('resize', handleResize);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseleave', handleMouseLeave);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] bg-slate-950"
//     />
//   );
// }







// 'use client';
// import { useEffect, useRef } from 'react';

// export default function GridGlowBackground() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let animationFrameId: number;
//     const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
//     let isMoving = false;

//     function resizeCanvas() {
//       if (!canvas) return;
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     }

//     function animate() {
//       ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

//       // Smoothly interpolate mouse movement
//       mouse.x += (mouse.targetX - mouse.x) * 0.1;
//       mouse.y += (mouse.targetY - mouse.y) * 0.1;

//       // 1. Draw Mouse Glow Spot
//       if (isMoving) {
//         const glowRadius = 300;
//         const gradient = ctx!.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, glowRadius);
//         gradient.addColorStop(0, 'rgba(167, 139, 250, 0.15)'); // Violet spotlight
//         gradient.addColorStop(1, 'transparent');

//         ctx!.fillStyle = gradient;
//         ctx!.beginPath();
//         ctx!.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
//         ctx!.fill();
//       }

//       // 2. Draw Clean Tech Grid Overlay
//       ctx!.strokeStyle = 'rgba(255, 255, 255, 0.03)'; // Ultra subtle grid lines
//       ctx!.lineWidth = 1;
//       const gridSize = 60; // Size of each square box

//       for (let x = 0; x < canvas!.width; x += gridSize) {
//         ctx!.beginPath();
//         ctx!.moveTo(x, 0);
//         ctx!.lineTo(x, canvas!.height);
//         ctx!.stroke();
//       }

//       for (let y = 0; y < canvas!.height; y += gridSize) {
//         ctx!.beginPath();
//         ctx!.moveTo(0, y);
//         ctx!.lineTo(canvas!.width, y);
//         ctx!.stroke();
//       }

//       animationFrameId = requestAnimationFrame(animate);
//     }

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!isMoving) {
//         mouse.x = e.clientX;
//         mouse.y = e.clientY;
//         isMoving = true;
//       }
//       mouse.targetX = e.clientX;
//       mouse.targetY = e.clientY;
//     };

//     const handleMouseLeave = () => { isMoving = false; };
//     const handleResize = () => { resizeCanvas(); };

//     resizeCanvas();
//     animate();

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseleave', handleMouseLeave);
//     window.addEventListener('resize', handleResize);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseleave', handleMouseLeave);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] bg-[#030712]"
//     />
//   );
// }














// 'use client';
// import { useEffect, useRef } from 'react';

// export default function GravityWarpBackground() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let animationFrameId: number;
//     const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
//     let isMoving = false;

//     // Generate lightweight star paths
//     const stars = Array.from({ length: 80 }, () => ({
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       z: Math.random() * window.innerWidth, // Depth factor
//     }));

//     function resizeCanvas() {
//       if (!canvas) return;
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     }

//     function animate() {
//       // Slight opacity clear creates beautiful motion blur trails naturally
//       ctx!.fillStyle = 'rgba(3, 7, 18, 0.15)';
//       ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

//       // Smooth mouse easing
//       mouse.x += (mouse.targetX - mouse.x) * 0.08;
//       mouse.y += (mouse.targetY - mouse.y) * 0.08;

//       const centerX = canvas!.width / 2;
//       const centerY = canvas!.height / 2;

//       stars.forEach((star) => {
//         // Move star closer (decrease depth)
//         star.z -= 4; 
//         if (star.z <= 0) {
//           star.z = canvas!.width;
//           star.x = Math.random() * canvas!.width;
//           star.y = Math.random() * canvas!.height;
//         }

//         // Calculate 3D perspective projection
//         let k = 128.0 / star.z;
//         let px = (star.x - centerX) * k + centerX;
//         let py = (star.y - centerY) * k + centerY;

//         // Gravitational Pull towards mouse position
//         if (isMoving) {
//           const dx = mouse.x - px;
//           const dy = mouse.y - py;
//           const dist = Math.hypot(dx, dy);
//           if (dist < 300) {
//             const force = (300 - dist) / 300;
//             px += (dx / dist) * force * 40;
//             py += (dy / dist) * force * 40;
//           }
//         }

//         // Size scales up as it gets closer
//         const size = (1 - star.z / canvas!.width) * 3;

//         ctx!.fillStyle = `rgba(167, 139, 250, ${1 - star.z / canvas!.width})`; // Violet fade-in
//         ctx!.beginPath();
//         ctx!.arc(px, py, size, 0, Math.PI * 2);
//         ctx!.fill();
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     }

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!isMoving) {
//         mouse.x = e.clientX;
//         mouse.y = e.clientY;
//         isMoving = true;
//       }
//       mouse.targetX = e.clientX;
//       mouse.targetY = e.clientY;
//     };

//     resizeCanvas();
//     animate();

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseleave', () => { isMoving = false; });
//     window.addEventListener('resize', resizeCanvas);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', resizeCanvas);
//     };
//   }, []);

//   return (
//     <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-[#030712] pointer-events-none" />
//   );
// }








// 'use client';
// import { useEffect, useRef } from 'react';

// export default function GravityWarpBackground() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let animationFrameId: number;
//     const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
//     let isMoving = false;

//     // Generate lightweight star paths
//     const stars = Array.from({ length: 80 }, () => ({
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       z: Math.random() * window.innerWidth, // Depth factor
//     }));

//     function resizeCanvas() {
//       if (!canvas) return;
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     }

//     function animate() {
//       // Slight opacity clear creates beautiful motion blur trails naturally
//       ctx!.fillStyle = 'rgba(3, 7, 18, 0.15)';
//       ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

//       // Smooth mouse easing
//       mouse.x += (mouse.targetX - mouse.x) * 0.08;
//       mouse.y += (mouse.targetY - mouse.y) * 0.08;

//       const centerX = canvas!.width / 2;
//       const centerY = canvas!.height / 2;

//       stars.forEach((star) => {
//         // Move star closer (decrease depth)
//         star.z -= 4; 
//         if (star.z <= 0) {
//           star.z = canvas!.width;
//           star.x = Math.random() * canvas!.width;
//           star.y = Math.random() * canvas!.height;
//         }

//         // Calculate 3D perspective projection
//         let k = 128.0 / star.z;
//         let px = (star.x - centerX) * k + centerX;
//         let py = (star.y - centerY) * k + centerY;

//         // Gravitational Pull towards mouse position
//         if (isMoving) {
//           const dx = mouse.x - px;
//           const dy = mouse.y - py;
//           const dist = Math.hypot(dx, dy);
//           if (dist < 300) {
//             const force = (300 - dist) / 300;
//             px += (dx / dist) * force * 40;
//             py += (dy / dist) * force * 40;
//           }
//         }

//         // Size scales up as it gets closer
//         const size = (1 - star.z / canvas!.width) * 3;

//         ctx!.fillStyle = `rgba(167, 139, 250, ${1 - star.z / canvas!.width})`; // Violet fade-in
//         ctx!.beginPath();
//         ctx!.arc(px, py, size, 0, Math.PI * 2);
//         ctx!.fill();
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     }

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!isMoving) {
//         mouse.x = e.clientX;
//         mouse.y = e.clientY;
//         isMoving = true;
//       }
//       mouse.targetX = e.clientX;
//       mouse.targetY = e.clientY;
//     };

//     resizeCanvas();
//     animate();

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseleave', () => { isMoving = false; });
//     window.addEventListener('resize', resizeCanvas);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', resizeCanvas);
//     };
//   }, []);

//   return (
//     <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-[#030712] pointer-events-none" />
//   );
// }







// 'use client';
// import { useEffect, useRef } from 'react';

// export default function LiquidWaveBackground() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let animationFrameId: number;
//     let increment = 0;
//     const mouse = { x: -1000, y: -1000 };

//     function resizeCanvas() {
//       if (!canvas) return;
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     }

//     function animate() {
//       ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

//       ctx!.beginPath();
//       ctx!.moveTo(0, canvas!.height / 2);

//       // Loop through horizontally to sketch the sine math path
//       for (let i = 0; i < canvas!.width; i++) {
//         // Distance calculation to see if mouse is hovering over the wave line
//         const distanceToMouse = Math.abs(mouse.x - i);
//         let dynamicTurbulence = 0;

//         if (distanceToMouse < 250) {
//           // If mouse is close, add a chaotic frequency modifier
//           dynamicTurbulence = Math.sin(i * 0.05 + increment * 2) * ((250 - distanceToMouse) * 0.15);
//         }

//         // Smooth wave drawing calculation
//         const y = (canvas!.height / 2) + 
//                   Math.sin(i * 0.005 + increment) * 40 + 
//                   Math.sin(i * 0.01 + increment * 1.5) * 20 + 
//                   dynamicTurbulence;

//         ctx!.lineTo(i, y);
//       }

//       // Dynamic color styling
//       ctx!.strokeStyle = 'rgba(167, 139, 250, 0.25)'; // Violet glow line
//       ctx!.lineWidth = 2;
//       ctx!.shadowBlur = 20;
//       ctx!.shadowColor = '#a78bfa';
//       ctx!.stroke();
//       ctx!.shadowBlur = 0; // Performance reset

//       increment += 0.015; // Animation speed control
//       animationFrameId = requestAnimationFrame(animate);
//     }

//     const handleMouseMove = (e: MouseEvent) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     };

//     resizeCanvas();
//     animate();

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('resize', resizeCanvas);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', resizeCanvas);
//     };
//   }, []);

//   return (
//     <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-[#07070a] pointer-events-none" />
//   );
// }








// 'use client';
// import { useEffect, useRef } from 'react';

// export default function MagneticFluidBackground() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let animationFrameId: number;
//     const mouse = { x: 0, y: 0, tx: 0, ty: 0, radius: 150 };
    
//     // Create a fixed matrix of points that snap back into place
//     const points: { x: number; y: number; ox: number; oy: number; vx: number; vy: number }[] = [];
//     const spacing = 40;

//     function initPoints() {
//       points.length = 0;
//       for (let x = spacing / 2; x < canvas!.width; x += spacing) {
//         for (let y = spacing / 2; y < canvas!.height; y += spacing) {
//           points.push({ x, y, ox: x, oy: y, vx: 0, vy: 0 });
//         }
//       }
//     }

//     function resizeCanvas() {
//       if (!canvas) return;
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       initPoints();
//     }

//     function animate() {
//       // Semi-transparent overlay gives particles a fluid, liquid trailing ghost effect
//       ctx!.fillStyle = 'rgba(3, 7, 18, 0.2)';
//       ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

//       // Smooth mouse tracking
//       mouse.x += (mouse.tx - mouse.x) * 0.1;
//       mouse.y += (mouse.ty - mouse.y) * 0.1;

//       points.forEach((p) => {
//         const dx = mouse.x - p.x;
//         const dy = mouse.y - p.y;
//         const dist = Math.hypot(dx, dy);

//         // If mouse is close, push particles away (magnetic displacement)
//         if (dist < mouse.radius) {
//           const force = (mouse.radius - dist) / mouse.radius;
//           const angle = Math.atan2(dy, dx);
//           // Explode outwards away from cursor direction
//           p.vx -= Math.cos(angle) * force * 4;
//           p.vy -= Math.sin(angle) * force * 4;
//         }

//         // Spring physics physics engine: pull particle back to its original grid anchor spot
//         const homeDx = p.ox - p.x;
//         const homeDy = p.oy - p.y;
//         p.vx += homeDx * 0.04; // Tension stiffness
//         p.vy += homeDy * 0.04;

//         // Friction dampening to slow them back down smoothly
//         p.vx *= 0.88;
//         p.vy *= 0.88;

//         p.x += p.vx;
//         p.y += p.vy;

//         // Velocity dictates brightness: faster moving elements glow brighter
//         const speed = Math.hypot(p.vx, p.vy);
//         const alpha = Math.min(0.05 + speed * 0.15, 0.8);

//         ctx!.fillStyle = `rgba(167, 139, 250, ${alpha})`;
//         ctx!.beginPath();
//         // Dynamic stretching based on direction vector velocity
//         ctx!.arc(p.x, p.y, 1 + speed * 0.5, 0, Math.PI * 2);
//         ctx!.fill();
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     }

//     const handleMouseMove = (e: MouseEvent) => {
//       mouse.tx = e.clientX;
//       mouse.ty = e.clientY;
//     };

//     resizeCanvas();
//     animate();

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('resize', resizeCanvas);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', resizeCanvas);
//     };
//   }, []);

//   return (
//     <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-[#030712] pointer-events-none" />
//   );
// }







// 'use client';
// import { useEffect, useRef } from 'react';

// export default function VectorTopographyBackground() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let animationFrameId: number;
//     let time = 0;
//     const mouse = { x: -1000, y: -1000 };
//     const spacing = 50;

//     function resizeCanvas() {
//       if (!canvas) return;
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     }

//     function animate() {
//       ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
//       ctx!.lineWidth = 1.5;

//       for (let x = spacing / 2; x < canvas!.width; x += spacing) {
//         for (let y = spacing / 2; y < canvas!.height; y += spacing) {
//           const dx = mouse.x - x;
//           const dy = mouse.y - y;
//           const dist = Math.hypot(dx, dy);

//           // Base math logic to derive rotation angle over time
//           let angle = Math.sin(x * 0.005 + time) * Math.cos(y * 0.005 + time) * Math.PI;

//           // If mouse is near, snap vector direction target to face towards the cursor
//           if (dist < 200) {
//             const proximityFactor = (200 - dist) / 200;
//             const mouseAngle = Math.atan2(dy, dx);
//             // Blend natural wave angle with localized mouse attraction angle
//             angle = angle * (1 - proximityFactor) + mouseAngle * proximityFactor;
//             ctx!.strokeStyle = `rgba(167, 139, 250, ${0.1 + proximityFactor * 0.4})`; // Highlight near cursor
//           } else {
//             ctx!.strokeStyle = 'rgba(255, 255, 255, 0.04)';
//           }

//           // Render the vector field direction "needle" lines
//           ctx!.save();
//           ctx!.translate(x, y);
//           ctx!.rotate(angle);
//           ctx!.beginPath();
//           ctx!.moveTo(-8, 0); // Tail line
//           ctx!.lineTo(8, 0);  // Direction pointer tip
//           ctx!.stroke();
//           ctx!.restore();
//         }
//       }

//       time += 0.004; // Calm, ambient wave execution speed
//       animationFrameId = requestAnimationFrame(animate);
//     }

//     const handleMouseMove = (e: MouseEvent) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     };

//     const handleMouseLeave = () => {
//       mouse.x = -1000;
//       mouse.y = -1000;
//     };

//     resizeCanvas();
//     animate();

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseleave', handleMouseLeave);
//     window.addEventListener('resize', resizeCanvas);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseleave', handleMouseLeave);
//       window.removeEventListener('resize', resizeCanvas);
//     };
//   }, []);

//   return (
//     <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-[#07070a] pointer-events-none" />
//   );
// }









'use client';
import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    // Track current mouse speed to dictate quantum energy discharge
    const mouse = { x: 0, y: 0, lastX: 0, lastY: 0, speed: 0 };
    
    // Entangled twin structural pairs
    const nodes: { 
      x1: number; y1: number; 
      x2: number; y2: number; 
      life: number; maxLife: number; 
      color: string 
    }[] = [];

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function animate() {
      // Deep space black base coat with an ultra-subtle trailing decay
      ctx!.fillStyle = 'rgba(5, 5, 10, 0.12)';
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      // Decay and render active entangled pairs
      for (let i = nodes.length - 1; i >= 0; i--) {
        const node = nodes[i];
        node.life -= 1;

        if (node.life <= 0) {
          nodes.splice(i, 1);
          continue;
        }

        const alpha = node.life / node.maxLife;

        // Draw Node Point 1
        ctx!.fillStyle = `rgba(139, 92, 246, ${alpha * 0.4})`; // Muted Violet
        ctx!.beginPath();
        ctx!.arc(node.x1, node.y1, 2, 0, Math.PI * 2);
        ctx!.fill();

        // Draw Mirror Entangled Node Point 2
        ctx!.fillStyle = `rgba(6, 182, 212, ${alpha * 0.4})`; // Electric Cyan
        ctx!.beginPath();
        ctx!.arc(node.x2, node.y2, 2, 0, Math.PI * 2);
        ctx!.fill();

        // Draw the Quantum State String connecting them
        const gradient = ctx!.createLinearGradient(node.x1, node.y1, node.x2, node.y2);
        gradient.addColorStop(0, `rgba(139, 92, 246, ${alpha * 0.25})`);
        gradient.addColorStop(1, `rgba(6, 182, 212, ${alpha * 0.25})`);

        ctx!.strokeStyle = gradient;
        ctx!.lineWidth = 0.75;
        ctx!.beginPath();
        ctx!.moveTo(node.x1, node.y1);
        
        // Generate an organic spatial curve between the twins
        const midX = (node.x1 + node.x2) / 2 + Math.sin(node.life * 0.05) * 40;
        const midY = (node.y1 + node.y2) / 2 + Math.cos(node.life * 0.05) * 40;
        
        ctx!.quadraticCurveTo(midX, midY, node.x2, node.y2);
        ctx!.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Calculate instantaneous mouse speed vector velocity
      mouse.speed = Math.hypot(mouse.x - mouse.lastX, mouse.y - mouse.lastY);

      // Only generate an entanglement spike if the user moves with kinetic intent
      if (mouse.speed > 15 && nodes.length < 35) {
        // Core node spawns relative to cursor
        const x1 = mouse.x + (Math.random() - 0.5) * 60;
        const y1 = mouse.y + (Math.random() - 0.5) * 60;

        // Twin node automatically shoots to an inverted mirrored matrix region
        const x2 = canvas!.width - x1 + (Math.random() - 0.5) * 200;
        const y2 = canvas!.height - y1 + (Math.random() - 0.5) * 200;

        const maxLife = Math.floor(Math.random() * 40) + 30;

        nodes.push({
          x1, y1,
          x2, y2,
          life: maxLife,
          maxLife,
          color: Math.random() > 0.5 ? '#8b5cf6' : '#06b6d4'
        });
      }

      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;
    };

    resizeCanvas();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 -z-10 bg-[#020205] pointer-events-none" 
    />
  );
}