// Import necessary libraries
import React from 'react';
import styled from 'styled-components';

// Styled components for form elements
const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
`;

const Column = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto) 1fr;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  cursor: pointer;
  border: 0;
  background-color: #3498db;
  color: #fff;

  &:hover {
    background-color: #2980b9;
  }
`;

const ActionButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 20px;
`;

// Your form component with three columns, each containing textboxes and a button
const FundDashboard = () => {
  return (
    <FormContainer>
      <Column>
        <Input type="text" placeholder="Fund Id" />
        <Input type="text" placeholder="Fund Name" />
        <Input type="text" placeholder="Fund Code" />
        <Input type="text" placeholder="Client Id Number" />
        <Input type="text" placeholder="Address" />
        <Input type="text" placeholder="Zip Code" />
        <Input type="date" placeholder="Account Opening Date" />
        <ActionButtonsContainer>
          <Button>Save</Button>
          <Button>Update</Button>
        </ActionButtonsContainer>
      </Column>

      <Column>
        <Input type="date" placeholder="Account Closing Date" />
        <Input type="text" placeholder="Fund Currency" />
        <Input type="text" placeholder="Telephone" />
        <Input type="text" placeholder="Alternative Contact" />
        <Input type="text" placeholder="Email Id" />
        <Input type="text" placeholder="Fund Manager" />
        <Input type="text" placeholder="Fund Type" />
        <ActionButtonsContainer>
          <Button>Delete</Button>
          <Button>Modify</Button>
        </ActionButtonsContainer>
      </Column>

      {/* Add a third column as needed */}
      <Column>
        {/* Textboxes and buttons for the third column */}
        <Input type="text" placeholder="Strategy" />
        <Input type="date" placeholder="Last Modified Date" />
        <Input type="text" placeholder="User Defined Tag 1" />
        <Input type="text" placeholder="User Defined Tag 2" />
        <Input type="text" placeholder="User Defined Tag 3" />
        <Input type="text" placeholder="User Defined Tag 4" />
        <Input type="text" placeholder="User Defined Tag 5" />
        <ActionButtonsContainer>
          <Button>Audit Log</Button>
        </ActionButtonsContainer>
      </Column>

    </FormContainer>
  );
};

export default FundDashboard;
