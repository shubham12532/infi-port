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

export const FormHeading = styled.div`
  font-family: 'Your UI Font', sans-serif; /* Replace 'Your UI Font' with the desired UI font */
  font-size: 1.qrem; /* Adjust the font size as needed */
  font-weight: bold;
  color: black; /* Font color */
  margin-bottom: 10px; /* Adjust the margin as needed */
`;

