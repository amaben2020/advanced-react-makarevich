/* eslint-disable react/display-name */

const withButton = (Component) => {
  return (props) => <Component {...props} />;
};

export default withButton;
