// Input.js
import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #333;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  cursor: pointer;
  border: 0;
  background-color: #3498db;
  color: #fff;
  border-radius: 4px; /* Optional: Add border-radius for a rounded look */

  &:hover {
    background-color: #2980b9;
  }
`;

// Other styled components can be exported here if needed
