"use client";
import React, { use, useId, useState } from "react";

const Home = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [values, setValues] = useState(Array(9).fill(null));
  const handleClick = (i) => {
    console.log("clicked");
    const nextSquares = values.slice();
    nextSquares[i] = "x";
    if (xIsNext) {
      nextSquares[i] = "x";
    } else {
      nextSquares[i] = "o";
    }
    setValues(nextSquares);
    setXIsNext(!xIsNext);
  };
  const line = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  function calculating(values: any) {
    for (let i = 0; i < line.length; i++) {
      let [a, b, c] = line[i];
      if (
        values[a] &&
        values[a] == values[b] &&
        values[a] &&
        values[a] == values[c]
      ) {
        console.log(values[a] + " " + values[b] + " " + values[c]);
        return <div>Winner is {values[a]}</div>;
      }
    }
  }
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("done");
  //     }, 1000);
  //   });

  //   const uses = use(promise);
  //   console.log(uses);

  for (let i = 0; i < 230; i++) {
    console.log(parseInt(Math.random() * Date.now()));
  }
  return (
    <div>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
      {calculating(values)}
      <div
        style={{
          display: "flex",
          //   flexDirection: "column",
          gap: "10px",
        }}>
        <Square value={values[0]} handleClick={() => handleClick(0)} />
        <Square value={values[1]} handleClick={() => handleClick(1)} />
        <Square value={values[2]} handleClick={() => handleClick(2)} />
      </div>
      <div
        style={{
          display: "flex",
          //   flexDirection: "column",
          gap: "10px",
        }}>
        <Square value={values[3]} handleClick={() => handleClick(3)} />
        <Square value={values[4]} handleClick={() => handleClick(4)} />
        <Square value={values[5]} handleClick={() => handleClick(5)} />
      </div>

      <div
        style={{
          display: "flex",
          //   flexDirection: "column",
          gap: "10px",
        }}>
        <Square value={values[6]} handleClick={() => handleClick(6)} />
        <Square value={values[7]} handleClick={() => handleClick(7)} />
        <Square value={values[8]} handleClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Home;

const Square = ({ value, handleClick }) => {
  return (
    <div className="w-10 h-10 bg-blue-500 rounded-full ">
      <button
        onClick={handleClick}
        style={{
          width: "24px",
          height: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "2px",
          cursor: "pointer",
        }}>
        {value}
      </button>
    </div>
  );
};

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}
