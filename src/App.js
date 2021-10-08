import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Table, Modal } from 'react-bootstrap';
import Firms from './FIRMS.js';
import MyTable from './components/myTable'
import NaviBar from './components/naviBar'
import MyModal from './components/myModal'


export default function App() {
  const [firms, setFirms] = useState(Firms);
  const [modal, setModal] = useState(false)
  const handleClickModal = () => {setModal(!modal)}

  console.log('modal', modal)
  
  
  return (
    <div>
      <NaviBar />
      <Button size="sm" onClick={handleClickModal}>
        Add company
      </Button>
      <MyModal modal={modal} handleClickButton={handleClickModal}/>



      <MyTable firms={firms} />
    </div>
  );
}
