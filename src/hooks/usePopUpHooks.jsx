import { useEffect, useRef, useState } from "react";

const usePopUpHooks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popUpRef = useRef();

  const popUp = () => {
    setIsOpen(!isOpen);
  };

  const handleOutSideArea = (e) => {
    if (
      (popUpRef.current && !popUpRef.current.contains(e.target)) ||
      e.target.classList.contains("modal_close")
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutSideArea);

    return () => {
      document.removeEventListener("click", handleOutSideArea);
    };
  }, []);

  return { isOpen, popUp, popUpRef };
};

export default usePopUpHooks;
