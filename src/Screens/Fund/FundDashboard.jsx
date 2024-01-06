// Import necessary libraries
import React from 'react';
import styled from 'styled-components';

// Styled components for form elements
const FormContainer = styled.div`
  height: 100vh;
  padding: 10px;
  margin: 5px; /* Add margin from all sides */
  background-color: #d3d3d326;
  // border: 1px solid grey;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-right: 10px;
  cursor: pointer;
  border: 0px solid grey;

  &:hover {
    background-color:#87CEEB;
  }
`;

// Your form component with multiple fields
const FundDashboard = () => {
  
  return (
    <FormContainer>
      
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

export default FundDashboard;
