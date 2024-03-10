import { useEffect, useRef } from "react";

const DomRefs = () => {
  const ref = useRef(null);

  const handleChange = (e) => {
    ref.current = e.target.value;
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(ref.current);
  };

  return (
    <div>
      DomRefs
      <form action="" onSubmit={handleSubmit}>
        <input type="text" ref={ref} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DomRefs;
