'use client';
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f0f4f8;
  min-height: calc(100vh - 81px);
`;

const GameCanvas = styled.canvas`
  background: #1a1a2e;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
`;

const GameTitle = styled.h1`
  color: #1a1a2e;
  margin-bottom: 20px;
`;

export default function BrickBreaker() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let score = 0;
    let lives = 3;
    let rightPressed = false;
    let leftPressed = false;

    const paddle = {
      height: 10,
      width: 75,
      x: (canvas.width - 75) / 2,
    };

    const ball = {
      x: canvas.width / 2,
      y: canvas.height - 30,
      dx: 2,
      dy: -2,
      radius: 10,
    };

    const brick = {
      rowCount: 3,
      columnCount: 5,
      width: 75,
      height: 20,
      padding: 10,
      offsetTop: 30,
      offsetLeft: 30,
    };

    let bricks = [];
    for (let c = 0; c < brick.columnCount; c++) {
      bricks[c] = [];
      for (let r = 0; r < brick.rowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
    
    const keyDownHandler = (e) => {
      if (e.key === 'Right' || e.key === 'ArrowRight') rightPressed = true;
      else if (e.key === 'Left' || e.key === 'ArrowLeft') leftPressed = true;
    };
    
    const keyUpHandler = (e) => {
      if (e.key === 'Right' || e.key === 'ArrowRight') rightPressed = false;
      else if (e.key === 'Left' || e.key === 'ArrowLeft') leftPressed = false;
    };

    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
    
    const collisionDetection = () => {
      for (let c = 0; c < brick.columnCount; c++) {
        for (let r = 0; r < brick.rowCount; r++) {
          const b = bricks[c][r];
          if (b.status === 1) {
            if (ball.x > b.x && ball.x < b.x + brick.width && ball.y > b.y && ball.y < b.y + brick.height) {
              ball.dy = -ball.dy;
              b.status = 0;
              score++;
              if (score === brick.rowCount * brick.columnCount) {
                alert('YOU WIN, CONGRATULATIONS!');
                document.location.reload();
              }
            }
          }
        }
      }
    };

    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#00d1cd';
      ctx.fill();
      ctx.closePath();
    };
    
    const drawPaddle = () => {
      ctx.beginPath();
      ctx.rect(paddle.x, canvas.height - paddle.height, paddle.width, paddle.height);
      ctx.fillStyle = '#007bff';
      ctx.fill();
      ctx.closePath();
    };
    
    const drawBricks = () => {
      for (let c = 0; c < brick.columnCount; c++) {
        for (let r = 0; r < brick.rowCount; r++) {
          if (bricks[c][r].status === 1) {
            const brickX = c * (brick.width + brick.padding) + brick.offsetLeft;
            const brickY = r * (brick.height + brick.padding) + brick.offsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brick.width, brick.height);
            ctx.fillStyle = '#007bff';
            ctx.fill();
            ctx.closePath();
          }
        }
      }
    };
    
    const drawScore = () => {
      ctx.font = '16px Arial';
      ctx.fillStyle = '#ffffff';
      ctx.fillText('Score: ' + score, 8, 20);
    };

    const drawLives = () => {
      ctx.font = '16px Arial';
      ctx.fillStyle = '#ffffff';
      ctx.fillText('Lives: ' + lives, canvas.width - 65, 20);
    };
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBricks();
      drawBall();
      drawPaddle();
      drawScore();
      drawLives();
      collisionDetection();

      if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) ball.dx = -ball.dx;
      if (ball.y + ball.dy < ball.radius) ball.dy = -ball.dy;
      else if (ball.y + ball.dy > canvas.height - ball.radius) {
        if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
          ball.dy = -ball.dy;
        } else {
          lives--;
          if (!lives) {
            alert('GAME OVER');
            document.location.reload();
          } else {
            ball.x = canvas.width / 2;
            ball.y = canvas.height - 30;
            ball.dx = 2;
            ball.dy = -2;
            paddle.x = (canvas.width - paddle.width) / 2;
          }
        }
      }
      
      if (rightPressed && paddle.x < canvas.width - paddle.width) paddle.x += 7;
      else if (leftPressed && paddle.x > 0) paddle.x -= 7;
      
      ball.x += ball.dx;
      ball.y += ball.dy;
      
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, []);

  return (
    <GameWrapper>
      <GameTitle>Retro Brick Breaker</GameTitle>
      <GameCanvas ref={canvasRef} width="480" height="320"></GameCanvas>
    </GameWrapper>
  );
}