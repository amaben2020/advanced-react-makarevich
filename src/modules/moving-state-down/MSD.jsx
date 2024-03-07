import ButtonWithModal from "../../components/ButtonWithModal";
import { ModalDialog } from "../../components/basic-modal-dialog";
import useToggle from "../../components/hooks/useToggle";
import { AnotherVerySlowComponent } from "../../components/very-slow-component";

export default function MovingStateDown() {
  // add some state: whenever you see state, just know that everything inside that component would be recreated when it changes. The state is not needed by the other components asides for the button, so move it there
  const { isOpen, handleIsOpen } = useToggle();

  return (
    <div>
      <button onClick={handleIsOpen}> Open Dialog Slow</button>
      {isOpen ? <ModalDialog onClose={handleIsOpen} /> : null}
      <ButtonWithModal />
      <AnotherVerySlowComponent />
    </div>
  );
}
