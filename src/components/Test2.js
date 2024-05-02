import React, { useEffect, useState } from "react";

export default function Test2() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setCount(count + 1);
      }, 1000);
    } else clearInterval(interval);
    return () => {
      clearInterval(interval);
    };
  }, [count, start]);
  const handleStart = () => {
    if (start) {
      setStart(false)
     } else setStart(true)
  };

  return (
    <div>
      <h1>Timer:{count}</h1>
      <button onClick={handleStart}>{start ? "stop" : "start"}</button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>

      {/* (true)?"true":"false" */}
    </div>
  );
}
