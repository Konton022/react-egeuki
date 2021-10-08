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
    console.log('myForm', name, inn,ogrn, date,adrress)}
  
  return (
    <Form onSubmit={handleClickSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(event)=>{setName(event.target.value)}}/>
        <Form.Label>INN</Form.Label>
        <Form.Control type="text" placeholder="Enter INN" onChange={(event)=>{setInn(event.target.value)}}/>
        <Form.Label>OGRN</Form.Label>
        <Form.Control type="text" placeholder="Enter OGRN" onChange={(event)=>{setOgrn(event.target.value)}}/>
        <Form.Label>Date of registarion</Form.Label>
        <Form.Control type="date" placeholder="Enter date of registarion" onChange={(event)=>{setDate(event.target.value)}}/>
        <Form.Label>Adrress</Form.Label>
        <Form.Control type="text" placeholder="Enter adrress" onChange={(event)=>{setAdrress(event.target.value)}}/>
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;
