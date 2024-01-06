import React, { useState } from "react";
import styled from "styled-components";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HomeIcon, DashboardIcon, AdminIcon, ClientIcon, ReportsIcon, LegalEntityIcon, LogoutIcon, DefaultImageIcon, RightArrowButton } from "../../Icons/Icons";
import debounce from 'lodash.debounce';

const MainContainer = styled.div`
  background: #ffffff;
  height: 100vh;
  width: ${({ isCollapsed }) => (isCollapsed ? "60px" : "300px")};
  overflow-x: hidden;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  color: white;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  justify-content: space-between;
  padding: ${({ isCollapsed }) => (!isCollapsed && "18px")};
  position: fixed;
  right: 0; /* Position the sidebar to the right */
`;


const ProfileSection = styled.div`
  width: 100%;
  height: 20%;
  background: #ffffff;
`

const Container = styled.div`
  width: 100%;
  background: #ffffff;
`
const LogoutSection = styled.div`
  width: 100%;
  height: 20%;
  background: #ffffff;
`

const MenuItem = styled.div`
  display: grid;
  grid-template-columns: ${({ isCollapsed }) => (!isCollapsed ? "20% 70% 10%" : " 1fr")};
  align-items: center;
  width: 100%;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#ffffff" : "transparent")};
  &:hover {
    background-color: #f0f5ff;
  }
`;

const ExpandIconContainer = styled.div`
  grid-column: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #030723;
`;

const TextContainer = styled.div`
  grid-column: 2;
  text-align: left;
  color: #030723;
  font-family: 'Poppins', sans-serif;
  font-size: 14px
`;

const ExpandIconContainerRight = styled.div`
  grid-column: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #030723;
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: end;
`;

const SubMenuItem = styled.div`
  padding-left: 20px;
  background-color: ${({ selected }) => (selected ? "#ffffff" : "transparent")};
  &:hover {
    background-color: #f0f5ff;  
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 8px;
  }
  width: 172px;
  color: #030723;
  font-family: 'Poppins', sans-serif;
  font-size: 14px
`;

const Seprator = styled.div`
  height: 2px;
  background-color: #f6f6f6;
  width: 100%;
  margin-bottom: 24px;
`

const Sidebar = ({isSidebarOpen}) => {
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
    if (isCollapsed)
      setIsCollapsed(false)
    else
      setIsCollapsed(false)
  };

  const MainMenuItem = ({ items, toggleDataMenu, titleName, isDataMenuOpen, Icon }) => {

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
          <SubMenu>
            {items.map((item) => (
              <SubMenuItem
                selected={selected === item.title}
                onClick={() => setSelected(item.title)}
              >
                {item.title}
              </SubMenuItem>))}
          </SubMenu>
        )}

      </>
    );

  };

  return (
    isSidebarOpen &&
    (<MainContainer isCollapsed={isCollapsed}>
      <MenuItem selected={selected} onClick={debouncedToggleCollapse} isCollapsed={isCollapsed} style={{height:"70px"}}>
        <ExpandIconContainer>
          <DefaultImageIcon />
        </ExpandIconContainer>
        {!isCollapsed && (
          <>
            <TextContainer style={{ color: "#FF0000" }}>{"User Name"}</TextContainer>
            <ExpandIconContainerRight >
            {isCollapsed ? "☰" : <RightArrowButton/>}
            </ExpandIconContainerRight>
          </>)}
      </MenuItem>
      
      <Seprator/>
      <Container>
        <MainMenuItem
          items={[
            { title: "Data", to: "/team" },
            { title: "Record", to: "/contacts" },
            { title: "Daily Task", to: "/invoices" },
          ]}
          toggleDataMenu={() => toggleDataMenu("Dashboard")}
          titleName={"Dashboard"}
          Icon={<DashboardIcon />}
        />

        <MainMenuItem
          items={[
            { title: "All User", to: "/team" },
            { title: "Create User", to: "/contacts" },
            { title: "Manage User", to: "/invoices" },
          ]}
          toggleDataMenu={() => toggleDataMenu("Admin")}
          titleName={"Admin"}
          Icon={<AdminIcon />}
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
          Icon={<ClientIcon />}
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
          Icon={<ReportsIcon />}
        />

        <MainMenuItem
          items={[
            { title: "Fund Structure", to: "/team" },
            { title: "Legal Entity", to: "/contacts" }
          ]}
          toggleDataMenu={() => toggleDataMenu("Legal Entity")}
          titleName={"Legal Entity"}
          Icon={<LegalEntityIcon />}
        />
      </Container>
      <MenuItem selected={selected} isCollapsed={isCollapsed} style={{ marginTop: "auto" }}>
        <ExpandIconContainer>
          <LogoutIcon />
        </ExpandIconContainer>
        {!isCollapsed && (
          <>
            <TextContainer style={{ color: "#FF0000" }}>{"Log Out"}</TextContainer>
            <ExpandIconContainerRight >
            </ExpandIconContainerRight></>)}
      </MenuItem>
    </MainContainer>)
  );
};

export default Sidebar;
