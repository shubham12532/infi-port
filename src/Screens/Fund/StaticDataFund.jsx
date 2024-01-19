import React from 'react';
import styled from 'styled-components';
import FundDashboard from './FundDashboard';
import { useState } from 'react';
import { Button } from '../../components/global/FormComponent';

// Styled components for form elements
const FormContainer = styled.div`
  height: 100vh;
  padding: 10px;
  margin: 5px; /* Add margin from all sides */
  background-color: #d3d3d326;
`;

const MenuContainer = styled.div`
  padding: 6px;
  display: flex;
  align-items: center; /* Align items vertically in the center */
  gap: 10px; /* Adjust the gap between buttons as needed */
`;



// Your form component with multiple fields
const StaticDataFund = () => {
  const [menuFromOption, setMenuFromOption] = useState({
    FundDashboard: false,
    fundInformation: false,
    openPosition: false,
    transaction: false,
    deletedTransaction: false,
    fundSetting: false,
    performance: false,
    custodyPosition: false,
  });

  return (
    <FormContainer>
      <MenuContainer>
        <Button onClick={() => setMenuFromOption((prevMenu) => ({ ...prevMenu, FundDashboard: true }))}>
          Fund Dashboard
        </Button>
        <Button onClick={() => setMenuFromOption((prevMenu) => ({ ...prevMenu, fundInformation: true }))}>
          Fund Information
        </Button>
        <Button onClick={() => setMenuFromOption((prevMenu) => ({ ...prevMenu, openPosition: true }))}>
          Open Position
        </Button>
        <Button onClick={() => setMenuFromOption((prevMenu) => ({ ...prevMenu, transaction: true }))}>
          Transaction
        </Button>
        <Button onClick={() => setMenuFromOption((prevMenu) => ({ ...prevMenu, deletedTransaction: true }))}>
          Deleted Transaction
        </Button>
        <Button onClick={() => setMenuFromOption((prevMenu) => ({ ...prevMenu, fundSetting: true }))}>
          Fund Setting
        </Button>
        <Button onClick={() => setMenuFromOption((prevMenu) => ({ ...prevMenu, performance: true }))}>
          Performance
        </Button>
        <Button onClick={() => setMenuFromOption((prevMenu) => ({ ...prevMenu, custodyPosition: true }))}>
          Custody Position
        </Button>
      </MenuContainer>
      {menuFromOption.FundDashboard && <FundDashboard />}
    </FormContainer>
  );
};

export default StaticDataFund;
