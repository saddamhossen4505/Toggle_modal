import usePopUpHooks from "../../hooks/usePopUpHooks";
import ModalPopUp from "../ModalPopUp/ModalPopUp";
import "./MenuPopUp.scss";

const MenuPopUp = () => {
  const { isOpen, popUp, popUpRef } = usePopUpHooks();
  const {
    isOpen: isShow,
    popUp: hideShow,
    popUpRef: modalRef,
  } = usePopUpHooks();

  return (
    <>
      <div className="menu" ref={popUpRef}>
        <button onClick={popUp}>Menu</button>

        {isOpen && (
          <div className="munu_list">
            <ul>
              <li>
                <a href="#">Alo</a>
              </li>
              <li>
                <a href="#">Potol</a>
              </li>
              <li>
                <a href="#">Lao</a>
              </li>
              <li>
                <a href="#">kumra</a>
              </li>
              <li>
                <a href="#">Shosha</a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {isShow && <ModalPopUp hideShow={hideShow} />}

      <button onClick={hideShow}>Modal show</button>
    </>
  );
};

export default MenuPopUp;
