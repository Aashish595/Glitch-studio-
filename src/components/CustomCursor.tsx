import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const points = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const maxPoints = 25; // snake length
    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const move = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.current.push({ x: mouse.x, y: mouse.y });
      if (points.current.length > maxPoints) points.current.shift();

      for (let i = 0; i < points.current.length; i++) {
        const p = points.current[i];
        const size = i / points.current.length * 10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,158,11,${i / points.current.length})`;
        ctx.shadowBlur = 25;
        ctx.shadowColor = "#f59e0b";
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    />
  );
};

export default CustomCursor;
