import React, { useRef, useEffect } from 'react';

const StarTheme = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    const numStars = 500;
    const speed = 13;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeStars();
    }

    function initializeStars() {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
          prevZ: Math.random() * canvas.width,
        });
      }
    }

    function drawStars() {
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        const x = (star.x - canvas.width / 2) * (canvas.width / star.z) + canvas.width / 2;
        const y = (star.y - canvas.height / 2) * (canvas.width / star.z) + canvas.height / 2;
        const prevX = (star.x - canvas.width / 2) * (canvas.width / star.prevZ) + canvas.width / 2;
        const prevY = (star.y - canvas.height / 2) * (canvas.width / star.prevZ) + canvas.height / 2;

        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = "teal";
        ctx.lineWidth = Math.max(1.5, 5 / star.z);
        ctx.stroke();

        star.prevZ = star.z;
        star.z -= speed;
        if (star.z <= 0) {
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
          star.z = canvas.width;
          star.prevZ = canvas.width;
        }
      }

      requestAnimationFrame(drawStars);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    drawStars();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return <canvas id="starTheme" ref={canvasRef} />;
};

export default StarTheme;
