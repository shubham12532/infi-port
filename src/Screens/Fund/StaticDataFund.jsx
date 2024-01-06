// Import necessary libraries
import React from 'react';
import styled from 'styled-components';
import FundDashboard from './FundDashboard';

// Styled components for form elements
const FormContainer = styled.div`
  height: 100vh;
  padding: 10px;
  margin: 5px; /* Add margin from all sides */
  background-color: #d3d3d326;
  // border: 1px solid grey;
`;

const MenuContainer = styled.div`
  padding: 6px;
  // margin: 10px; /* Add margin from all sides */
  // background-color: #d3d3d326;
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
const StaticDataFund = () => {
  
  return (
    <FormContainer>
      <MenuContainer>
      <Button>Fund Dashboard</Button>
      <Button>Fund Information</Button>
      <Button>Open Position</Button>
      <Button>Transaction</Button>
      <Button>Deleted Transaction</Button>
      <Button>Fund Setting</Button>
      <Button>Performance</Button>
      <Button>Custody Position</Button>
      </MenuContainer>
      <FundDashboard/>
    </FormContainer>
  );
};

export default StaticDataFund;
