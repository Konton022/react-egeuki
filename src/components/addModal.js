import React from "react";
import { Modal, Button } from "react-bootstrap";

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
        <AddForm saveChanges={handleClickSubmitButton} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClickButton}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;
