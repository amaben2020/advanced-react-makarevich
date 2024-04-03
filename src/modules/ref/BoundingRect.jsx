import React, { useEffect, useRef, useState } from "react";

const BoundingRect = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item One" },
    { id: 2, name: "Item Two" },
    { id: 3, name: "Item Three" },
    { id: 4, name: "Item Four" },
  ]);
  const ref = useRef();

  useEffect(() => {
    const div = ref?.current;

    const divNodes = [...div.childNodes];

    console.log(divNodes);

    console.log(div);
  }, []);

  return (
    <div>
      BoundingRect
      {items.map((item) => (
        <div key={item.id} ref={ref}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default BoundingRect;
