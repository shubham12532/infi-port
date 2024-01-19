import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Button,Input,FormHeading } from '../../components/global/FormComponent';

const Country = () => {
  return (
    <GridContainer>
      <Column>
      <FormHeading>
       Country
      </FormHeading>
        <Input type="text" placeholder="Country Name" />
        <Input type="text" placeholder="Country Code" />
        <Input type="text" placeholder="Country Region" />
        <Input type="text" placeholder="User Define Tag1" />
        <Input type="text" placeholder="User Define Tag2" />
        <Input type="text" placeholder="User Define Tag3" />
        <Input type="text" placeholder="User Define Tag4" />
        <Input type="text" placeholder="User Define Tag5" />
        <Input type="text" placeholder="Last Modification Date" />
        <ActionButtonsContainer>
          <Button>Add New</Button>
          <Button>Edit</Button>
          <Button>Delete</Button>
          <Button>Modify</Button>
          <Button>Audit Log</Button>
        </ActionButtonsContainer>
      </Column>
      <Column></Column>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px; /* Adjust the gap as needed */
  margin: 20px; /* Add margin to all sides */
`;

const Column = styled.div`
    height: 100vh;
    padding: 10px;
    margin: 5px; /* Add margin from all sides */
    background-color: #d3d3d326;
`;

const ActionButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  gap: 10px;
  margin-top: 20px;
`;

export default Country;
