import { useRef, useState } from "react";
import InputWithUseImperativeHandle from "./Input";

const FormWithUseImperativeHandle = () => {
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      inputRef.current.focus();
      inputRef.current.shake();
    } else {
      alert("Sent");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">FormWithUseImperativeHandle</label>

      <InputWithUseImperativeHandle parentRef={inputRef} setName={setName} />
    </form>
  );
};

export default FormWithUseImperativeHandle;
