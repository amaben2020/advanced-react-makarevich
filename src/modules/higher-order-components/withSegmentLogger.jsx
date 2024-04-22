// eslint-disable-next-line react/display-name
const withSegmentLogger = (Component) => (props) => {
  const handleClick = () => {
    const segmentId = '1234';
    console.log(segmentId);
  };
  return <Component {...props} onClick={handleClick} />;
};

export default withSegmentLogger;
