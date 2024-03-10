import { useEffect, useRef } from "react";

const DomRefs = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current);
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, []);

  return (
    <div>
      DomRefs
      <input type="text" ref={ref} />
    </div>
  );
};

export default DomRefs;
