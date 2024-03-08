import { useEffect, useState } from "react";

const useResizeDetector = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const listener = () => {
      const windowWidth = window.innerWidth;

      setWidth(windowWidth);
    };

    addEventListener("resize", listener);
  }, []);

  return width;
};

export default useResizeDetector;
