import React, {useState} from 'react';

import { Form, Button } from 'react-bootstrap';

const MyForm = () => {
  const [name, setName] = useState('')
  const [inn, setInn] = useState('')
  const [ogrn, setOgrn] = useState('')
  const [date, setDate] = useState('')
  const [adrress, setAdrress] = useState('')


  const handleClickSubmit = (event) => {
    event.preventDefault()
    console.log('myForm', event)}
  
  return (
    <Form onSubmit={handleClickSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
        <Form.Label>INN</Form.Label>
        <Form.Control type="text" placeholder="Enter INN" />
        <Form.Label>OGRN</Form.Label>
        <Form.Control type="text" placeholder="Enter OGRN" />
        <Form.Label>Date of registarion</Form.Label>
        <Form.Control type="date" placeholder="Enter date of registarion" />
        <Form.Label>Adrress</Form.Label>
        <Form.Control type="text" placeholder="Enter adrress" />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;
