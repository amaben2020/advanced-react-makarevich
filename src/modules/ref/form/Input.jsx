/* eslint-disable react/prop-types */
import { useImperativeHandle, useRef, useState } from "react";
const InputWithUseImperativeHandle = ({ parentRef, setName }) => {
  const [shakeInput, setShakeInput] = useState(false);
  const ref = useRef(null);

  // useImperativeHandle(
  //   parentRef,
  //   () => (
  //     {
  //       focus: () => {
  //         ref.current.focus();
  //       },
  //       shake: () => {
  //         setShakeInput(true);
  //       },
  //     },
  //     []
  //   ),
  // );

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
      // className={clsx(shakeInput && "animate-shake", "p-3 rounded-xl border")}
      style={{
        border: shakeInput ? "2px solid red" : "",
      }}
    />
  );
};

export default InputWithUseImperativeHandle;
