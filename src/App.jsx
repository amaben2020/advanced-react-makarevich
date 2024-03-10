/* eslint-disable react/prop-types */
import CButton from "./modules/configuration/Button";
import ModalDialog from "./modules/configuration/ModalDialog";
import RenderProps from "./modules/configuration/render-props";
import ElementsAsChildren from "./modules/elements-as-children/ECP";
import ElementsAsProps from "./modules/elements-as-props/ECP";
import { HOCButton } from "./modules/higher-order-components/HocButton";
import withLoggingOnClick from "./modules/higher-order-components/withLoggingOnClick";
import withLoggingOnMount from "./modules/higher-order-components/withLoggingOnMount";
import withSuppressKeyPress from "./modules/higher-order-components/withSuppressKeyPress";

import MovingStateDown from "./modules/moving-state-down/MSD";
import DomRefs from "./modules/ref";

const Footer = ({ message }) => (
  <div
    style={{
      background: "black",
    }}
  >
    {message}
  </div>
);

export default function App() {
  // const hocBtn = withButton(HOCButton)({
  //   title: "This is a HOC Button",
  // });

  const ButtonWithSegmentTracker = withLoggingOnClick(HOCButton)({
    log: (data) => alert(data),
    title: "Segment Tracker",
  });

  const ButtonWithLogger = withLoggingOnMount(HOCButton);

  const SuppressKeyPress = withSuppressKeyPress(ModalDialog);

  return (
    <section
      style={{
        padding: 30,
      }}
    >
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
          Element as props and rerenders: A performance enhancement technique
          that enables us pass Heavy components as props
        </p>
        <ElementsAsProps />
      </div>
      <div
        style={{
          border: "1px solid red",
          padding: 20,
        }}
      >
        <p>
          {" "}
          Element as children and rerenders: A performance enhancement technique
          that enables us pass Heavy components as props
        </p>
        <ElementsAsChildren />
      </div>
      <div>
        <p>Passing element as props </p>
        <CButton icon={"🥳"} />
      </div>
      <div>
        <ModalDialog footer={<Footer />}>
          <form action="">
            <input type="text" />
            <input type="text" />
          </form>
        </ModalDialog>
      </div>
      <div>
        <p>
          Render-props: A function that returns an element. This is a way of
          sharing state between the Parent and Child. The props passed from
          Parent can be invoked inside the Child.
        </p>

        <RenderProps element={({ message }) => <div>{message}</div>} />
      </div>

      <div>{ButtonWithSegmentTracker}</div>
      <div>{ButtonWithLogger}</div>

      <div>
        <SuppressKeyPress footer={<Footer />}>
          <form action="">
            <input type="text" />
            <input type="text" />
          </form>
        </SuppressKeyPress>
      </div>

      <div>
        <DomRefs />
      </div>
    </section>
  );
}
