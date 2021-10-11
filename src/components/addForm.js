import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectFirm, updateFirms } from "../store/firms";

const MyForm = ({ saveChanges }) => {
  const [name, setName] = useState("");
  const [inn, setInn] = useState("");
  const [ogrn, setOgrn] = useState("");
  const [date, setDate] = useState("");
  const [adrress, setAdrress] = useState("");

  const dispatch = useDispatch();
  const firmsRedux = useSelector(selectFirm);
  console.log(firmsRedux);

  const saveSubmit = (event) => {
    event.preventDefault();
    dispatch(updateFirms({ name, inn, ogrn, date, adrress }));
    saveChanges();
  };

  return (
    <Form onSubmit={saveSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <Form.Label>INN</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter INN"
          value={inn}
          onChange={(event) => {
            setInn(event.target.value);
          }}
        />
        <Form.Label>OGRN</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter OGRN"
          value={ogrn}
          onChange={(event) => {
            setOgrn(event.target.value);
          }}
        />
        <Form.Label>Date of registarion</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter date of registarion"
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
        <Form.Label>Adrress</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter adrress"
          value={adrress}
          onChange={(event) => {
            setAdrress(event.target.value);
          }}
        />
      </Form.Group>
      <Button type="submit">Save changes</Button>
    </Form>
  );
};

export default MyForm;
