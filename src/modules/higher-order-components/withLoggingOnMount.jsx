/* eslint-disable react/display-name */
import { useEffect } from "react";

const withLoggingOnMount = (Component) => {
  (props) => {
    useEffect(() => {
      console.log("Component just mounted");
    }, []);
    return <Component {...props} />;
  };
};

export default withLoggingOnMount;
