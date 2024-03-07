import ElementsAsProps from "./modules/elements-as-props/ECP";
import MovingStateDown from "./modules/moving-state-down/MSD";

export default function App() {
  return (
    <>
      <div
        style={{
          border: "1px solid red",
          padding: 20,
        }}
      >
        <p>
          {" "}
          Moving State Down: A technique used to keep state as close to the
          component that needs it as possible. You just need to understand that
          state rerenders the entire component tree where its initialized, the
          smaller the components, the faster our app.
        </p>
        <MovingStateDown />
      </div>

      <div
        style={{
          border: "1px solid red",
          padding: 20,
        }}
      >
        <p>
          {" "}
          Element children as props and rerenders: A performance enhancement
          technique that enables us pass Heavy components as props
        </p>
        <ElementsAsProps />
      </div>
    </>
  );
}
