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
