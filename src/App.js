import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Table, Modal } from "react-bootstrap";
import Firms from "./FIRMS.js";
import ScopeTable from "./components/scopeTable";
import NaviBar from "./components/naviBar";
import AddModal from "./components/addModal";
import { useDispatch } from "react-redux";
import { updateFirms } from "./store/firms";

export default function App() {
  const [firms, setFirms] = useState(Firms);
  const [modal, setModal] = useState(false);
  const handleClickModal = () => {
    setModal(!modal);
  };

  console.log("modal", modal);

  const dispatch = useDispatch();

  useEffect(() => dispatch(updateFirms(firms)), []);

  return (
    <div>
      <NaviBar />

      <AddModal modal={modal} handleClickButton={handleClickModal} />
      <ScopeTable firms={firms} />

      <Button size="sm" onClick={handleClickModal}>
        Add company
      </Button>
    </div>
  );
}
