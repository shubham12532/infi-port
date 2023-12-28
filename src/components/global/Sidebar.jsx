import React, { useState } from "react";
import styled from "styled-components";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HomeIcon, DashboardIcon, AdminIcon, ClientIcon, ReportsIcon, LegalEntityIcon } from "../../Icons/Icons";
import debounce from 'lodash.debounce';

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
  grid-template-columns: ${({ isCollapsed }) => (!isCollapsed ? "20% 70% 10%" : " 1fr" )};
  align-items: center;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#1F2A40" : "transparent")};
  &:hover {
    background-color: #aaafb7;
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
    background-color: #aaafb7;
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
  
  const debouncedToggleCollapse = debounce(toggleCollapse, 300);

  const toggleDataMenu = (menuKey) => {
    setDataMenuStates((prevState) => ({
      ...prevState,
      [menuKey]: !prevState[menuKey],
    }));
    if(isCollapsed)
      setIsCollapsed(false)
    else 
      setIsCollapsed(false)
  };

  const MainMenuItem = ({ items, toggleDataMenu, titleName, isDataMenuOpen, Icon}) => {

    return (
      <>
        <MenuItem selected={selected} onClick={() => toggleDataMenu(titleName)} isCollapsed={isCollapsed}>
          <ExpandIconContainer>
          {Icon}
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
      
      <MenuItem onClick={debouncedToggleCollapse} isCollapsed={isCollapsed}>
       {isCollapsed && <ExpandIconContainer>
            ☰
          </ExpandIconContainer>}
          {!isCollapsed && (
            <>
              <TextContainer>Infi Port</TextContainer>
              <ExpandIconContainerRight >
               {isCollapsed ? "☰" : "✕"}
              </ExpandIconContainerRight></>)}
        </MenuItem>


      <MainMenuItem
        items={[
          { title: "Data", to: "/team" },
          { title: "Record", to: "/contacts" },
          { title: "Daily Task", to: "/invoices" },
        ]}
        toggleDataMenu={() => toggleDataMenu("Dashboard")}
        titleName={"Dashboard"}
        Icon={<DashboardIcon/>}
      />

      <MainMenuItem
        items={[
          { title: "All User", to: "/team" },
          { title: "Create User", to: "/contacts" },
          { title: "Manage User", to: "/invoices" },
        ]}
        toggleDataMenu={() => toggleDataMenu("Admin")}
        titleName={"Admin"}
        Icon={<AdminIcon/>}
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
        Icon={<ClientIcon/>}
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
        Icon={<ReportsIcon/>}
      />

      <MainMenuItem
        items={[
          { title: "Fund Structure", to: "/team" },
          { title: "Legal Entity", to: "/contacts" }
        ]}
        toggleDataMenu={() => toggleDataMenu("Legal Entity")}
        titleName={"Legal Entity"}
        Icon={<LegalEntityIcon/>}
      />

    </Container>
  );
};

export default Sidebar;
