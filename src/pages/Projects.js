import React, { useState, useEffect } from "react";
import "./css/Projects.css";

const cellSize = 20;
const width = 400;
const height = 400;

const getRandomPosition = () => {
  const x = Math.floor(Math.random() * (width / cellSize)) * cellSize;
  const y = Math.floor(Math.random() * (height / cellSize)) * cellSize;
  return [x, y];
};

const initialSnake = [
  [60, 60],
  [40, 60],
  [20, 60],
];
const initialFood = getRandomPosition();

const Projects = () => {
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(initialFood);
  const [direction, setDirection] = useState([20, 0]);
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction[1] === 0) setDirection([0, -20]);
          setIsRunning(true);
          break;
        case "ArrowDown":
          if (direction[1] === 0) setDirection([0, 20]);
          setIsRunning(true);
          break;
        case "ArrowLeft":
          if (direction[0] === 0) setDirection([-20, 0]);
          setIsRunning(true);
          break;
        case "ArrowRight":
          if (direction[0] === 0) setDirection([20, 0]);
          setIsRunning(true);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (isRunning) {
      const moveSnake = () => {
        setSnake((prevSnake) => {
          const newSnake = [...prevSnake];
          const head = [...newSnake[0]];
          head[0] += direction[0];
          head[1] += direction[1];
          newSnake.unshift(head);

          if (head[0] === food[0] && head[1] === food[1]) {
            setFood(getRandomPosition());
            setScore((prevScore) => {
              const newScore = prevScore + 1;
              if (newScore > highScore) {
                setHighScore(newScore);
              }
              return newScore;
            });
          } else {
            newSnake.pop();
          }

          return newSnake;
        });
      };

      const gameInterval = setInterval(moveSnake, 200);

      return () => clearInterval(gameInterval);
    }
  }, [isRunning, direction, food, highScore]);

  useEffect(() => {
    const checkCollision = () => {
      const head = snake[0];

      // Check wall collision
      if (head[0] < 0 || head[0] >= width || head[1] < 0 || head[1] >= height) {
        setIsRunning(false);
        return;
      }

      // Check self collision
      for (let i = 1; i < snake.length; i++) {
        if (snake[i][0] === head[0] && snake[i][1] === head[1]) {
          setIsRunning(false);
          return;
        }
      }
    };

    checkCollision();
  }, [snake]);

  const handleRestart = () => {
    setSnake(initialSnake);
    setFood(initialFood);
    setDirection([20, 0]);
    setScore(0);
    setIsRunning(false);
  };

  return (
    <>
      <section title="snake">
        <h1 className="snake-title">
          Looks like there aren't any projects yet... so play some snake while
          you wait!
        </h1>
        <div className="game-info">
          <p>Score: {score}</p>
          <p>High Score: {highScore}</p>
        </div>
        <div className="game-area" style={{ width, height }}>
          {snake.map((segment, index) => (
            <div
              key={index}
              className="snake-segment"
              style={{
                left: segment[0],
                top: segment[1],
                width: cellSize,
                height: cellSize,
              }}
            />
          ))}
          <div
            className="food"
            style={{
              left: food[0],
              top: food[1],
              width: cellSize,
              height: cellSize,
            }}
          />
        </div>
        {!isRunning && (
          <button className="replay-button" onClick={handleRestart}>
            Play Again
          </button>
        )}
      </section>
    </>
  );
};

export default Projects;
