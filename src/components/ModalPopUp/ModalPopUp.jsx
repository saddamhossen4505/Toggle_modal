import React from "react";

const ModalPopUp = ({ hideShow }) => {
  return (
    <>
      <div className="modal_blur modal_close">
        <div className="modal_main">
          <div className="modal_header">
            <div className="modal_title">
              <p>Student Modal</p>
            </div>
            <button onClick={hideShow}>x</button>
          </div>
          <hr />
          <div className="modal_body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam esse
              maxime quaerat aspernatur sapiente veniam repellat excepturi aut
              enim fuga!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPopUp;
