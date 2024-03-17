/* eslint-disable react/prop-types */
import clsx from "clsx";
import { useImperativeHandle, useRef, useState } from "react";
const InputWithUseImperativeHandle = ({ parentRef, setName }) => {
  const [shakeInput, setShakeInput] = useState(false);
  const ref = useRef(null);

  // the parent ref now controls the child
  useImperativeHandle(
    parentRef,
    () => ({
      focus: () => {
        ref.current.focus();
      },
      shake: () => {
        setShakeInput(true);
      },
    }),
    [],
  );

  return (
    <input
      ref={ref}
      onChange={(e) => setName(e.target.value)}
      className={clsx(
        shakeInput && "animate-bounce border-2 border-red-700",
        "p-6 rounded-xl border w-1/4",
      )}
    />
  );
};

export default InputWithUseImperativeHandle;
