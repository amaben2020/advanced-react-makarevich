import throttle from "lodash.throttle";
import { useState } from "react";
const CARDS = [
  {
    name: "One",
    id: 1,
  },
  {
    name: "Two",
    id: 2,
  },
  {
    name: "Three",
    id: 3,
  },
];
const Throttle = () => {
  const [result, setResult] = useState([]);
  const handleClick = (id) => {
    setResult((p) => [...p, id]);
  };

  // invokes the next call after the time elapses
  const throttledHandleClick = throttle(handleClick, 5000, {
    leading: false,
    trailing: true,
  });

  return (
    <div className="mt-4 border">
      <h2>Throttling</h2>
      <div className="flex gap-3">
        {JSON.stringify(result)}
        {CARDS.map((item) => (
          <ul className="p-3 border   w-[300px]" key={item.id}>
            <li
              onClick={() => throttledHandleClick(item.id)}
              className="hover:cursor-pointer"
            >
              {" "}
              {item.name}{" "}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Throttle;
