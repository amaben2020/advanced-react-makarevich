export const HOCButton = (props) => {
  // eslint-disable-next-line react/prop-types
  return <button onClick={props.onClick}>{props.title} </button>;
};
