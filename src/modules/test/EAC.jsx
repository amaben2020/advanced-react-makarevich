import { useEffect, useRef, useState } from 'react';
import { VerySlowComponent } from '../../components/very-slow-component';

// eslint-disable-next-line react/prop-types
const ScrollWrapper = ({ children }) => {
  const [position, setPosition] = useState();
  const ref = useRef();
  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      const newPosition = Number(e.target.innerHeight);
      setPosition(newPosition);
    });
  }, []);
  return (
    <div
      className="my-4 border-2 h-[300px] w-[600px] bg-gray-600 overflow-scroll"
      ref={ref}
    >
      <MovingBlock position={position} />
      {children}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
function MovingBlock({ position }) {
  return (
    <div
      className="fixed w-40 text-white bg-black left-[27rem]"
      style={{
        top: Number(position),
      }}
    >
      {Number(position)}px away from top
    </div>
  );
}

export const TestMainScrollableArea = () => {
  return (
    <ScrollWrapper>
      <VerySlowComponent />
    </ScrollWrapper>
  );
};
