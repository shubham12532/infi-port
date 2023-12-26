import React, { useState } from "react";
import styled from "styled-components";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HomeIcon, DashboardIcon } from "../../Icons/Icons";

const Container = styled.div`
  background: #1F2A40;
  height: 100vh;
  width: ${({ isCollapsed }) => (isCollapsed ? "60px" : "300px")};
  overflow-x: hidden;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  color: white;
`;

const MenuItem = styled.div`
  display: grid;
  grid-template-columns: ${({ isCollapsed }) => (isCollapsed ? "1fr" : "20% 70% 10%")};
  align-items: center;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#1F2A40" : "transparent")};
  &:hover {
    background-color: #1F2A40;
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
  background-color: ${({ selected }) => (selected ? "#1F2A40" : "transparent")};
  &:hover {
    background-color: #1F2A40;
  }
`;

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [dataMenuStates, setDataMenuStates] = useState({
    Dashboard: false,
    Admin: false,
    "Client Name": false,
    Reports: false,
    "Legal Entity": false
  });

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDataMenu = (menuKey) => {
    setDataMenuStates((prevState) => ({
      ...prevState,
      [menuKey]: !prevState[menuKey],
    }));
  };

  const MainMenuItem = ({ items, toggleDataMenu, titleName, isDataMenuOpen, Icon }) => {

    return (
      <>
        <MenuItem selected={selected} onClick={() => toggleDataMenu(titleName)}>
          <ExpandIconContainer>
            <DashboardIcon />
          </ExpandIconContainer>
          {!isCollapsed && (
            <>
              <TextContainer>{titleName}</TextContainer>
              <ExpandIconContainerRight >
                {isDataMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ExpandIconContainerRight></>)}
        </MenuItem>

        {dataMenuStates[titleName] && (
          <>
            {items.map((item) => (
              <SubMenuItem
                selected={selected === item.title}
                onClick={() => setSelected(item.title)}
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
        toggleDataMenu={() => toggleDataMenu("Dashboard")}
        titleName={"Dashboard"}
      />

      <MainMenuItem
        items={[
          { title: "All User", to: "/team" },
          { title: "Create User", to: "/contacts" },
          { title: "Manage User", to: "/invoices" },
        ]}
        toggleDataMenu={() => toggleDataMenu("Admin")}
        titleName={"Admin"}
      />

      <MainMenuItem
        items={[
          { title: "Company Detail", to: "/team" },
          { title: "All User", to: "/contacts" },
          { title: "Create User", to: "/invoices" },
          { title: "Manage User", to: "/invoices" },
        ]}
        toggleDataMenu={() => toggleDataMenu("Client Name")}
        titleName={"Client Name"}
      />

      <MainMenuItem
        items={[
          { title: "My Reports", to: "/team" },
          { title: "Standard Reports", to: "/contacts" },
          { title: "Financial Reports", to: "/invoices" },
          { title: "Regulatory Reports", to: "/invoices" },
        ]}
        toggleDataMenu={() => toggleDataMenu("Reports")}
        titleName={"Reports"}
      />

      <MainMenuItem
        items={[
          { title: "Fund Structure", to: "/team" },
          { title: "Legal Entity", to: "/contacts" }
        ]}
        toggleDataMenu={() => toggleDataMenu("Legal Entity")}
        titleName={"Legal Entity"}
      />

    </Container>
  );
};

export default Sidebar;
