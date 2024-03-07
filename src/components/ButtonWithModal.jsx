import { useState } from "react";
import { Button } from "./Button";
import { ModalDialog } from "./basic-modal-dialog";

const ButtonWithModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>

      {isOpen ? <ModalDialog onClose={() => setIsOpen(false)} /> : null}
    </>
  );
};

export default ButtonWithModal;
