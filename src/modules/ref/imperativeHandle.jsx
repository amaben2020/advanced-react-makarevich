import { useState } from "react";

export const InputField = () => {
  // store whether we should shake or not in state
  const [shouldShake, setShouldShake] = useState(false);

  const className = shouldShake ? "shake-animation" : "";

  return (
    <input className={className} onAnimationEnd={() => setShouldShake(false)} />
  );
};
