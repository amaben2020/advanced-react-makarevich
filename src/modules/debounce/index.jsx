import "./styles.css";

import debounce from "lodash/debounce";
import throttle from "lodash/throttle";

const InputWithJustOnchange = () => {
  const onChange = (e) => {
    console.log("Changed value:", e.target.value);
  };

  return (
    <input className="p-2 border rounded-md" type="text" onChange={onChange} />
  );
};

const InputWithDebouncedOnchange = () => {
  const onChange = (e) => {
    console.log("Changed value:", e.target.value);
  };

  const debouncedOnChange = debounce(onChange, 1000);

  return (
    <input
      className="p-2 border rounded-md"
      type="text"
      onChange={debouncedOnChange}
    />
  );
};

const InputWithThrottledOnchange = () => {
  const onChange = (e) => {
    console.log("Changed value:", e.target.value);
  };

  const throttledOnChange = throttle(onChange, 1000);

  return (
    <input
      className="p-2 border rounded-md"
      type="text"
      onChange={throttledOnChange}
    />
  );
};

export default function DebounceAndThrottle() {
  return (
    <div className="App">
      <h1>Debounce and throttle examples</h1>
      <h3>Open console and type something in inputs really fast</h3>
      <div className="container">
        <div className="column">
          <h3>Just onChange callback</h3>
          <InputWithJustOnchange />
        </div>
        <div className="column">
          <h3>Debounced onChange</h3>
          <InputWithDebouncedOnchange />
        </div>
        <div className="column">
          <h3>Throttled onChange</h3>
          <InputWithThrottledOnchange />
        </div>
      </div>
    </div>
  );
}
