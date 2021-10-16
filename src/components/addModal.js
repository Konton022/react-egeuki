import React from "react";
import { Modal } from "react-bootstrap";

import AddForm from "./addForm";

const AddModal = ({ modal, handleClickButton }) => {
  const handleClickSubmitButton = (props) => {
    console.log("Modal props click", props);
    handleClickButton();
  };

  return (
    <Modal show={modal} onHide={handleClickButton}>
      <Modal.Header closeButton>
        <Modal.Title>Add new company</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddForm
          saveChanges={handleClickSubmitButton}
          handleClickClose={handleClickButton}
        />
      </Modal.Body>
    </Modal>
  );
};

export default AddModal;
