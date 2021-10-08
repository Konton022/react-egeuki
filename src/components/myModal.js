import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import MyForm from './myForm';

const MyModal = ({ modal, handleClickButton }) => {
  return (
    <Modal show={modal} onHide={handleClickButton}>
      <Modal.Header closeButton>
        <Modal.Title>Add new company</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MyForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClickButton}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
