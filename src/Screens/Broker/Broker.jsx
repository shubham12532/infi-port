import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Input,Button } from '../../components/global/FormComponent';

const Broker = () => {

  const columnDefs = [
    { headerName: 'Broker Name', field: 'id' , width: 150},
    { headerName: 'Broker Code', field: 'name', autoSize: true },
    { headerName: 'Broker Email Id', field: 'id', autoSize: true },
    { headerName: 'User Define Tag1', field: 'id', autoSize: true },
    { headerName: 'User Define Tag2', field: 'id', autoSize: true },
    { headerName: 'User Define Tag3', field: 'id', autoSize: true },
    { headerName: 'User Define Tag4', field: 'id', autoSize: true },
    { headerName: 'Last Modification Date', field: 'date', autoSize: true }
    // Add more columns as needed
  ];

  const rowData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    // Add more rows as needed
  ];

  return (
    <GridContainer>
      <Column>
        <Input type="text" placeholder="Broker Name" />
        <Input type="text" placeholder="Broker code" />
        <Input type="text" placeholder="Broker Cotact" />
        <Input type="text" placeholder="Broker Email Id" />
        <Input type="text" placeholder="User Define Tag1" />
        <Input type="text" placeholder="User Define Tag2" />
        <Input type="text" placeholder="User Define Tag3" />
        <Input type="text" placeholder="User Define Tag4" />
        <Input type="date" placeholder="Last Modification Date" />
        <ActionButtonsContainer>
          <Button>Add New</Button>
          <Button>Edit</Button>
          <Button>Delete</Button>
          <Button>Modify</Button>
          <Button>Audit Log</Button>
        </ActionButtonsContainer>
      </Column>
      <Column>
      <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
        />
      </div>
      </Column>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  gap: 20px; /* Adjust the gap as needed */
  margin: 20px; /* Add margin to all sides */
`;

const Column = styled.div`
    height: 100vh;
    padding: 10px;
    margin: 5px; /* Add margin from all sides */
    background-color: #d3d3d326;
`;

const FormHeading = styled.div`
  font-family: 'Your UI Font', sans-serif; /* Replace 'Your UI Font' with the desired UI font */
  font-size: 1.5rem; /* Adjust the font size as needed */
  font-weight: bold;
  color: black; /* Font color */
  margin-bottom: 10px; /* Adjust the margin as needed */
`;

const ActionButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  gap: 10px;
  margin-top: 20px;
`;


export default Broker;
