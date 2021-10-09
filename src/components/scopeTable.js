import React from 'react';
import { Table } from 'react-bootstrap';
const ScopeTable = ({ firms }) => {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>INN</th>
          <th>OGRN</th>
          <th>Date of Reg</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {firms.map(function (item, index) {
          return (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.inn}</td>
              <td>{item.ogrn}</td>
              <td>{item.dateReg}</td>
              <td>{item.adress}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ScopeTable;
