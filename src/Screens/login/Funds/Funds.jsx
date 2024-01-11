// Import necessary libraries
import React from 'react';
import styled from 'styled-components';

// Styled components for form elements
const FormContainer = styled.div`
  height: 100vh;
  padding: 20px;
  background-color: lightgrey;
  border: 1px solid grey;
  margin: 10px;
  overflow-x: hidden;
`;

const ButtonContainer = styled.div`
  padding: 20px;
  background-color: lightgrey;
  border: 1px solid grey;
  margin: 5px;
  overflow-x: hidden;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
`;

const Button = styled.button`
  background-color: lightgrey;
  color: black;
  padding: 8px 16px;
  margin-right: 10px;
  border: 1px solid grey;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;

// Your form component with multiple fields
const Funds = () => {
  return (
    <FormContainer>
        <ButtonContainer/>
      <Input type="text" placeholder="First Name" />
      <Input type="text" placeholder="Last Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      {/* Add more textboxes as needed */}
      <Button>Save</Button>
      <Button>Update</Button>
      {/* Add more buttons as needed */}
    </FormContainer>
  );
};

export default Funds;
