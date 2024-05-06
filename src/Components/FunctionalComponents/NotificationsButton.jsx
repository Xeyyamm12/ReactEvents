import React, { useState } from "react";
import Modal from "./Modal";

const NotificationsButton = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="modal-content">
        <button type="button" className="btn btn-primary" onClick={openModal}>
          Уведомления
        </button>
      </div>
      {showModal && <Modal onClose={closeModal} />}
    </>
  );
};

export default NotificationsButton;