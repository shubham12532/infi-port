import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three equal-width columns, adjust as needed */
  gap: 20px; /* Adjust the gap as needed */
  margin: 20px; /* Add margin to all sides */
  padding: 20px; /* Add padding if necessary */
  border: 1px solid #ccc; /* Add border for styling */
`;

const Grid = () => {
  return (
    <GridContainer>
      {/* Your grid items/content go here */}
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      {/* Add more items as needed */}
    </GridContainer>
  );
};

export default Grid;
