import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const MyModal = ({modal, handleClickButton}) => {
  return (
    <Modal show={modal} onHide={handleClickButton}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClickButton}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClickButton}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
