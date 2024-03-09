/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

const withLoggingOnClick = (Component) => (props) => {
  const logOnClick = () => {
    // onClick basically does 2 things, so rather than passing this log function to all instances, we simply supercharge it
    console.log("Do something on click");
    props.log("Called");
  };

  return <Component {...props} onClick={logOnClick} />;
};

export default withLoggingOnClick;

// export const withLoggingOnClickWithProps = (Component) => {
//   // it will be in the props here, just extract it
//   return ({ logText, ...props }) => {
//   const onClick = () => {
//   // and then just use it here
//   console.log('Log on click: ', logText);
//   props.onClick();
//   };
//   return <Component {...props} onClick={onClick} />;
//   }; };

{
  /* <ButtonWithLoggingOnClickWithProps
 onClick={onClickCallback}
 logText="this is Page button" >
 Click me
</ButtonWithLoggingOnClickWithProps> */
}
