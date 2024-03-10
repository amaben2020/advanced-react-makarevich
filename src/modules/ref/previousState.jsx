import { useEffect, useRef, useState } from "react";

const usePrevious = (value) => {
  const prevRef = useRef(0);

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return prevRef.current;
};

export const Counter = () => {
  const [count, setCount] = useState(0);

  const previousResult = usePrevious(count);
  return (
    <div>
      Counter {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      Previous result : {previousResult}
    </div>
  );
};
