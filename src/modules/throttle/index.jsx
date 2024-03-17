const CARDS = [
  {
    name: "One",
    id: 1,
  },
  {
    name: "Two",
    id: 2,
  },
  {
    name: "Three",
    id: 3,
  },
];
const Throttle = () => {
  return (
    <div>
      <h2>Throttling</h2>

      {CARDS.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default Throttle;
