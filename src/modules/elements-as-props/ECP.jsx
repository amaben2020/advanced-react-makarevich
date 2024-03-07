/* eslint-disable react/prop-types */
import { useState } from "react";
import { AnotherVerySlowComponent } from "../../components/very-slow-component";

const SlowComponents = () => {
  return (
    <>
      <AnotherVerySlowComponent />
      {[...Array(20)].map((_, index) => (
        <p key={index}>Content {index}</p>
      ))}
      <AnotherVerySlowComponent />
      <AnotherVerySlowComponent />
    </>
  );
};

const ScrollableComponent = ({ content }) => {
  const [position, setPosition] = useState(0);
  const handleScroll = (e) => {
    setPosition(e.currentTarget.scrollTop);
  };
  return (
    <div>
      <h2>Scroll Top: {position}px</h2>

      <div
        style={{
          border: "3px solid black",
          width: "400px",
          height: "100px",
          overflow: "scroll",
        }}
        onScroll={handleScroll}
      >
        {content}
      </div>
    </div>
  );
};

export default function ElementsAsProps() {
  return (
    <div>
      <ScrollableComponent content={<SlowComponents />} />
    </div>
  );
}
