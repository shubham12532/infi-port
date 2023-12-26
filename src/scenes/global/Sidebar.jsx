import React, { useState } from "react";
import styled from "styled-components";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HomeIcon, DashboardIcon } from "../../Icons/Icons";

const Container = styled.div`
  background: #2196F3;
  height: 100vh;
  width: ${({ isCollapsed }) => (isCollapsed ? "60px" : "331px")};
  overflow-x: hidden;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  color: white;
`;

const MenuItem = styled.div`
  display: grid;
  grid-template-columns: 20% 70% 10%;
  align-items: center;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#0D47A1" : "transparent")};
  &:hover {
    background-color: #0D47A1;
  }
`;

const ExpandIconContainer = styled.div`
  grid-column: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  grid-column: 2;
  text-align: left;
`;

const ExpandIconContainerRight = styled.div`
  grid-column: 3
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubMenuItem = styled.div`
  padding-left: 20px;
  background-color: ${({ selected }) => (selected ? "#0D47A1" : "transparent")};
  &:hover {
    background-color: #0D47A1;
  }
`;

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [isDataMenuOpen, setIsDataMenuOpen] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDataMenu = () => {
    setIsDataMenuOpen(!isDataMenuOpen);
  };

  const MainMenuItem = ({ items, toggleDataMenu, titleName, isDataMenuOpen }) => {

    return (
      <>
        <MenuItem selected={selected} onClick={toggleDataMenu}>
          <ExpandIconContainer>
            <HomeIcon />
          </ExpandIconContainer>
          <TextContainer>{titleName}</TextContainer>
          <ExpandIconContainerRight >
            {isDataMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ExpandIconContainerRight>
        </MenuItem>

        {isDataMenuOpen && (
          <>
            {items.map((item) => (
              <SubMenuItem
                selected={selected === "Manage Team"}
                onClick={() => setSelected("Manage Team")}
              >
                {item.title}
              </SubMenuItem>))}
          </>
        )}

      </>
    );

  };

  return (
    <Container isCollapsed={isCollapsed}>
      <MenuItem onClick={toggleCollapse}>
        {isCollapsed ? "☰" : "✕"}
      </MenuItem>


      <MainMenuItem
        items={[
          { title: "Data", to: "/team" },
          { title: "Record", to: "/contacts" },
          { title: "Daily Task", to: "/invoices" },
        ]}
        toggleDataMenu={toggleDataMenu}
        titleName={"Dashboard"}
        isDataMenuOpen={isDataMenuOpen}
      />

      <MainMenuItem
        items={[
          { title: "All User", to: "/team" },
          { title: "Create User", to: "/contacts" },
          { title: "Manage User", to: "/invoices" },
        ]}
        toggleDataMenu={toggleDataMenu}
        titleName={"Admin"}
        isDataMenuOpen={isDataMenuOpen}
      />

      <MainMenuItem
        items={[
          { title: "Company Detail", to: "/team" },
          { title: "All User", to: "/contacts" },
          { title: "Create User", to: "/invoices" },
          { title: "Manage User", to: "/invoices" },
        ]}
        toggleDataMenu={toggleDataMenu}
        titleName={"Client Name"}
        isDataMenuOpen={isDataMenuOpen}
      />

      <MainMenuItem
        items={[
          { title: "My Reports", to: "/team" },
          { title: "Standard Reports", to: "/contacts" },
          { title: "Financial Reports", to: "/invoices" },
          { title: "Regulatory Reports", to: "/invoices" },
        ]}
        toggleDataMenu={toggleDataMenu}
        titleName={"Reports"}
        isDataMenuOpen={isDataMenuOpen}
      />

      <MainMenuItem
        items={[
          { title: "Company Detail", to: "/team" },
          { title: "All User", to: "/contacts" },
          { title: "Create User", to: "/invoices" },
          { title: "Manage User", to: "/invoices" },
        ]}
        toggleDataMenu={toggleDataMenu}
        titleName={"Client Name"}
        isDataMenuOpen={isDataMenuOpen}
      />
      
      <MainMenuItem
        items={[
          { title: "Fund Structure", to: "/team" },
          { title: "Legal Entity", to: "/contacts" }
        ]}
        toggleDataMenu={toggleDataMenu}
        titleName={"Legal Entity"}
        isDataMenuOpen={isDataMenuOpen}
      /> 
      
      <MainMenuItem
        items={[
          { title: "Fund Structure", to: "/team" },
          { title: "Legal Entity", to: "/contacts" }
        ]}
        toggleDataMenu={toggleDataMenu}
        titleName={"Reconciliation"}
        isDataMenuOpen={isDataMenuOpen}
      />
    </Container>
  );
};

export default Sidebar;
