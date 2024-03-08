import { cloneElement } from "react";

/* eslint-disable react/prop-types */
const ModalDialog = ({ children, footer }) => {
  // just a way of passing default prop when you receive an element as prop
  const cloned = cloneElement(footer, {
    message: "Hey, i am the default footer prop",
  });

  return (
    <div
      style={{
        maxWidth: 300,
        borderRadius: 20,
        border: "1px solid gray",
        padding: 20,
      }}
    >
      {cloned}
      <div>{children}</div>
      <footer>{footer}</footer>
    </div>
  );
};

export default ModalDialog;
