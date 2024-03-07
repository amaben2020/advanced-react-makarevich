import { useState } from "react";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => setIsOpen((p) => !p);
  return { isOpen, setIsOpen, handleIsOpen };
};

export default useToggle;
