import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button, FormHeading } from '../../components/global/FormComponent';

const Custodian = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setSelectedTab(tabNumber);
  };

  return (
    <Container>
      <TabsContainer>
        <TabButton onClick={() => handleTabChange(1)} active={selectedTab === 1}>
          Form
        </TabButton>
        <TabButton onClick={() => handleTabChange(2)} active={selectedTab === 2}>
          Grid
        </TabButton>
      </TabsContainer>

      <ContentContainer>
        {selectedTab === 1 && (
          <FormContainer>
            <FormHeading>Custodian</FormHeading>
            <Input type="text" placeholder="Custodian Name" />
            {/* Add other form inputs */}
            <ActionButtonsContainer>
              <Button>Add New</Button>
              <Button>Edit</Button>
              <Button>Delete</Button>
              <Button>Modify</Button>
              <Button>Audit Log</Button>
            </ActionButtonsContainer>
          </FormContainer>
        )}

        {selectedTab === 2 && (
          <GridContainer>
            {/* Add your grid content here */}
          </GridContainer>
        )}
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const TabButton = styled.button`
  padding: 10px;
  background-color: ${({ active }) => (active ? '#333' : '#555')};
  color: ${({ active }) => (active ? '#fff' : '#ddd')};
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const FormContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #d3d3d326;
`;

const GridContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const ActionButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 20px;
`;

export default Custodian;
