import React, { useEffect, useRef } from 'react';

interface Particle {
  t: number;
  speed: number;
  strandIndex: number;
  size: number;
  color: string;
}

interface Strand {
  x0: number;
  y0: number;
  cx1: number;
  cy1: number;
  cx2: number;
  cy2: number;
  x1: number;
  y1: number;
  color: string;
  width: number;
}

interface Node {
  x: number;
  y: number;
  radius: number;
  pulsePhase: number;
  color: string;
}

export const NetworkBackground: React.FC<{ className?: string; interactive?: boolean }> = ({
  className = '',
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let displayWidth = canvas.parentElement?.clientWidth || window.innerWidth;
    let displayHeight = canvas.parentElement?.clientHeight || window.innerHeight;

    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    ctx.scale(dpr, dpr);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = displayWidth < 768;

    let mouseX = displayWidth / 2;
    let mouseY = displayHeight / 2;
    let targetMouseX = displayWidth / 2;
    let targetMouseY = displayHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive || isMobile) return;
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let strands: Strand[] = [];
    let nodes: Node[] = [];
    let particles: Particle[] = [];

    const initNetwork = () => {
      strands = [];
      nodes = [];
      particles = [];

      const strandCount = isMobile ? 6 : 10;
      const nodeCount = isMobile ? 7 : 14;
      const particleCount = isMobile ? 8 : 18;

      // Optical junction nodes
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * displayWidth,
          y: Math.random() * displayHeight,
          radius: Math.random() * 2 + 1.5,
          pulsePhase: Math.random() * Math.PI * 2,
          color: Math.random() > 0.4 ? '#00E5FF' : '#19B5FE',
        });
      }

      // Elegant bezier fiber strands
      for (let i = 0; i < strandCount; i++) {
        const startLeft = i % 2 === 0;
        const x0 = startLeft ? -30 : Math.random() * displayWidth * 0.3;
        const y0 = (displayHeight / (strandCount + 1)) * (i + 1) + (Math.random() - 0.5) * 60;
        const x1 = startLeft ? displayWidth * 0.7 + Math.random() * displayWidth * 0.4 : displayWidth + 30;
        const y1 = (displayHeight / (strandCount + 1)) * (i + 1) + (Math.random() - 0.5) * 80;

        strands.push({
          x0,
          y0,
          x1,
          y1,
          cx1: displayWidth * 0.3 + (Math.random() - 0.5) * 120,
          cy1: y0 + (Math.random() - 0.5) * 150,
          cx2: displayWidth * 0.7 + (Math.random() - 0.5) * 120,
          cy2: y1 + (Math.random() - 0.5) * 150,
          color: i % 3 === 0 ? 'rgba(0, 229, 255, 0.14)' : 'rgba(25, 181, 254, 0.10)',
          width: Math.random() * 1.2 + 0.8,
        });
      }

      // Optical data pulses
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          t: Math.random(),
          speed: (Math.random() * 0.0012 + 0.0007) * (isMobile ? 0.7 : 1),
          strandIndex: Math.floor(Math.random() * strands.length),
          size: Math.random() * 2 + 1.2,
          color: Math.random() > 0.3 ? '#00E5FF' : '#6C63FF',
        });
      }
    };

    initNetwork();

    const handleResize = () => {
      if (!canvas) return;
      displayWidth = canvas.parentElement?.clientWidth || window.innerWidth;
      displayHeight = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      ctx.scale(dpr, dpr);
      initNetwork();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Cubic bezier evaluation
    const getBezierPoint = (s: Strand, t: number) => {
      const u = 1 - t;
      const tt = t * t;
      const uu = u * u;
      const uuu = uu * u;
      const ttt = tt * t;

      const dx = ((mouseX - displayWidth / 2) / displayWidth) * 16;
      const dy = ((mouseY - displayHeight / 2) / displayHeight) * 12;

      const cx1 = s.cx1 + dx * 0.5;
      const cy1 = s.cy1 + dy * 0.5;
      const cx2 = s.cx2 + dx;
      const cy2 = s.cy2 + dy;

      const x = uuu * s.x0 + 3 * uu * t * cx1 + 3 * u * tt * cx2 + ttt * s.x1;
      const y = uuu * s.y0 + 3 * uu * t * cy1 + 3 * u * tt * cy2 + ttt * s.y1;
      return { x, y };
    };

    let lastTime = performance.now();

    const render = (time: number) => {
      const delta = Math.min(time - lastTime, 50);
      lastTime = time;

      // Soft mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, displayWidth, displayHeight);

      // Deep radial glow
      const bgGrad = ctx.createRadialGradient(
        displayWidth * 0.5,
        displayHeight * 0.35,
        50,
        displayWidth * 0.5,
        displayHeight * 0.5,
        Math.max(displayWidth, displayHeight)
      );
      bgGrad.addColorStop(0, '#091530');
      bgGrad.addColorStop(0.55, '#070c1d');
      bgGrad.addColorStop(1, '#050816');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      // Render optical strands
      strands.forEach((s) => {
        ctx.beginPath();
        const dx = ((mouseX - displayWidth / 2) / displayWidth) * 16;
        const dy = ((mouseY - displayHeight / 2) / displayHeight) * 12;

        ctx.moveTo(s.x0, s.y0);
        ctx.bezierCurveTo(s.cx1 + dx * 0.5, s.cy1 + dy * 0.5, s.cx2 + dx, s.cy2 + dy, s.x1, s.y1);
        ctx.strokeStyle = s.color;
        ctx.lineWidth = s.width;
        ctx.stroke();
      });

      // Render junction nodes
      nodes.forEach((n) => {
        n.pulsePhase += prefersReducedMotion ? 0 : 0.018;
        const currentRadius = n.radius + Math.sin(n.pulsePhase) * 0.6;
        const alpha = 0.35 + Math.sin(n.pulsePhase) * 0.2;

        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius * 2.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${alpha * 0.18})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();
      });

      // Flowing optical light pulses
      if (!prefersReducedMotion) {
        particles.forEach((p) => {
          p.t += p.speed * (delta / 16);
          if (p.t > 1) p.t = 0;

          const strand = strands[p.strandIndex];
          if (!strand) return;

          const pt = getBezierPoint(strand, p.t);

          // Soft light glow halo
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, p.size * 2.6, 0, Math.PI * 2);
          ctx.fillStyle = p.color === '#00E5FF' ? 'rgba(0, 229, 255, 0.24)' : 'rgba(108, 99, 255, 0.2)';
          ctx.fill();

          // High-luminance particle core
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();
        });
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render(0);
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [interactive]);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block opacity-85" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/30 via-transparent to-[#050816]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050816_75%)] opacity-85" />
    </div>
  );
};
