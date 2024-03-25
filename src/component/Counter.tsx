import React, { useState } from 'react';

// type CounterProps = {
//   initialCount: number;
// };

const Counter = ({initialCount}: CounterProps) => {

    const [counter, setCounter] = useState(initialCount);

    const delayedCount = () => setTimeout(() => setCounter(( counter) => counter + 1), 2000);

    const addNumbers = [1, -1,-50, 50,-100, 100];
  return (
    <>
    <div className="center">
    <div>Counter {counter}</div>
    <button onClick={() => setCounter(counter + 1)}>+1</button>
    <button onClick={delayedCount}>delayed count +1</button>

    {addNumbers.map((number) => (
      <button onClick={() => setCounter(counter + number)}>{number}</button>))}
    </div>
    </>
  );
};

export default Counter;