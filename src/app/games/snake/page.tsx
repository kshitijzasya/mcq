// "use client"
// import React, { useState, useEffect } from "react";

// const ROWS = 20;
// const COLS = 20;
// const CELL_SIZE = 20;

// const Direction = {
//   UP: "UP",
//   DOWN: "DOWN",
//   LEFT: "LEFT",
//   RIGHT: "RIGHT",
// };

// const getRandomCoordinate = () => {
//   return {
//     x: Math.floor(Math.random() * COLS),
//     y: Math.floor(Math.random() * ROWS),
//   };
// };

// const SnakeGame = () => {
//   const [snake, setSnake] = useState([
//     { x: 10, y: 10 },
//     { x: 11, y: 10 },
//   ]);
//   const [food, setFood] = useState(getRandomCoordinate());
//   const [direction, setDirection] = useState(Direction.RIGHT);
//   const [gameOver, setGameOver] = useState(false);

//   const handleKeyDown = (e) => {
//     switch (e.keyCode) {
//       case 37:
//         setDirection(Direction.LEFT);
//         break;
//       case 38:
//         setDirection(Direction.UP);
//         break;
//       case 39:
//         setDirection(Direction.RIGHT);
//         break;
//       case 40:
//         setDirection(Direction.DOWN);
//         break;
//       default:
//         break;
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("keydown", handleKeyDown);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   useEffect(() => {
//     const moveSnake = () => {
//       if (gameOver) return;

//       const newSnake = [...snake];
//       const head = { ...newSnake[0] };

//       switch (direction) {
//         case Direction.UP:
//           head.y--;
//           break;
//         case Direction.DOWN:
//           head.y++;
//           break;
//         case Direction.LEFT:
//           head.x--;
//           break;
//         case Direction.RIGHT:
//           head.x++;
//           break;
//         default:
//           break;
//       }

//       // Check if snake eats food
//       if (head.x === food.x && head.y === food.y) {
//         setFood(getRandomCoordinate());
//       } else {
//         newSnake.pop();
//       }

//       // Check if snake collides with itself or walls
//       if (
//         head.x < 0 ||
//         head.x >= COLS ||
//         head.y < 0 ||
//         head.y >= ROWS ||
//         newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
//       ) {
//         setGameOver(true);
//         return;
//       }

//       newSnake.unshift(head);
//       setSnake(newSnake);
//     };

//     const intervalId = setInterval(moveSnake, 100);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [snake, direction, food, gameOver]);

//   return (
//     <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
//       <div style={{ position: "relative", width: COLS * CELL_SIZE, height: ROWS * CELL_SIZE, border: "1px solid black" }}>
//         {snake.map((segment, index) => (
//           <div key={index} style={{ position: "absolute", left: segment.x * CELL_SIZE, top: segment.y * CELL_SIZE, width: CELL_SIZE, height: CELL_SIZE, backgroundColor: "green" }} />
//         ))}
//         <div style={{ position: "absolute", left: food.x * CELL_SIZE, top: food.y * CELL_SIZE, width: CELL_SIZE, height: CELL_SIZE, backgroundColor: "red" }} />
//         {gameOver && <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "24px", fontWeight: "bold" }}>Game Over</div>}
//       </div>
//     </div>
//   );
// };

// export default SnakeGame;
