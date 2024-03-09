import { useEffect } from "react";

/* eslint-disable react/display-name */
const withSuppressKeyPress = (Component) => (props) => {
  const keyPressListener = (event) => {
    console.log(event);
    event.stopPropagation();
  };

  useEffect(() => {
    addEventListener("keypress", keyPressListener);

    return () => {
      removeEventListener("keypress", keyPressListener);
    };
  }, []);

  return (
    <div onKeyPress={keyPressListener}>
      <Component {...props} />
    </div>
  );
};

export default withSuppressKeyPress;
