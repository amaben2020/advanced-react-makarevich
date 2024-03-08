/* eslint-disable react/prop-types */
const RenderProps = ({ element }) => {
  const elementProps = {
    message: "Yeah, this is a render prop",
  };
  return <div>RenderProps : {element(elementProps)}</div>;
};

export default RenderProps;
