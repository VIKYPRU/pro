import React, { useState } from "react";

export default function Task9UseReduce() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [iscount1, setIscount1] = useState(false);
  const [iscount2, setIscount2] = useState(false);
  return (
    <div>
      <h1>Shopping Cart</h1>
      <br></br>
      {iscount1 && (
        <div>
          product A- Quantity:{count1}
          <button onClick={()=>{setIscount1(false)}}>Remove</button>
          <button onClick={()=>{setCount1(count1-1)}}>Decrease</button>
        </div>
      )}

      <br></br>
      {iscount2 && (
        <div>
          product B- Quantity:{count2}
          <button onClick={()=>{setIscount2(false)}}>Remove</button>
          <button onClick={()=>{setCount2(count2-1)}}>Decrease</button>
        </div>
      )}

      <br></br>
      <button
        onClick={() => {
            setCount1(count1+1)
          setIscount1(true);
        }}
      >
        Add product A
      </button>
      <button
        onClick={() => {
            setCount2(count2+1)
          setIscount2(true);
        }}
      >
        Add product B
      </button>
    </div>
  );
}
