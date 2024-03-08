/* eslint-disable react/prop-types */
export const ButtonRP = ({ appearance, size, renderIcon }) => {
  // create default props as before
  const defaultIconProps = {
    size: size === "large" ? "large" : "medium",
    color: appearance === "primary" ? "white" : "black",
  };
  // and just pass them to the function
  return <button>Submit {renderIcon(defaultIconProps)}</button>;
};

{
  /* <Button renderIcon={(props) => <HomeIcon {...props} />} /> */
}

{
  /* <Button
 renderIcon={(props) => (
 <HomeIcon {...props} size="large" color="red" />
 )}
/> */
}
