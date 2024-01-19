// NavBar.js
import { useState,React } from 'react';
import styled from 'styled-components';
import { DownArrowIcon } from '../../Icons/Icons';
import StaticDataFund from '../../Screens/Fund/StaticDataFund';
import { useNavigate } from 'react-router-dom';
import Custodian from '../../Screens/Custodian/Custodian';
import Broker from '../../Screens/Broker/Broker';
import Exchange from '../../Screens/Exchange/Exchange';
import Country from '../../Screens/Country/Country';



const NavBarContainer = styled.div`
  background-color: #333;
  padding: 10px;
  height: 55px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-right: 20px;
  position: relative;

  &:hover {
    color: orange; /* Change text color to orange on hover */
  }
`;

const SubMenu = styled.ul`
  display: none;
  width: max-content;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #555;
  padding: 10px;
  list-style: none;
  ${MenuItem}:hover & {
    display: block;
  }

  ${MenuItem}:hover & li {
    color: #fff;
    &:hover {
      color: orange; /* Change text color to orange on hover */
    }
  }
`;

const SubMenuItem = styled.li`
  margin-bottom: 5px;
  position: relative;
`;

const SubSubMenu = styled.ul`
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  background-color: #777;
  padding: 10px;
  list-style: none;
  ${SubMenuItem}:hover & {
    display: block;
  }

  ${SubMenuItem}:hover & li {
    color: #fff;
    &:hover {
      color: orange; /* Change text color to orange on hover */
    }
  }
`;

const SubSubMenuItem = styled.li`
  margin-bottom: 5px;

  &:hover {
    color: #fff;
  }
`;

const Topbar = ({setSideBarOpen}) => {

  const navigate = useNavigate();
  const [selectedScreen, setSelectedScreen] = useState(null);

  const handleMenuItemClick = (screen) => {
    setSelectedScreen(screen);
    navigate(`/${screen.toLowerCase()}`);
  };

  const renderScreenContent = () => {
    switch (selectedScreen) {
      case 'Fund':
        return <StaticDataFund />;
      case 'Custodian':
        return <Custodian/>
      case 'Broker':
        return <Broker/>
      case 'Exchange':
        return <Exchange/>
      case 'Country':
        return <Country/>
      default:
        return null; // Render nothing if no screen is selected
    }
  };

  return (
    <NavBarContainer>
      <Menu>
        <MenuItem>
          Static Data
          <SubMenu>
            <SubMenuItem onClick={() => handleMenuItemClick('Fund')}>Fund</SubMenuItem>
            <SubMenuItem onClick={() => handleMenuItemClick('Custodian')}>Custodian</SubMenuItem>
            <SubMenuItem onClick={() => handleMenuItemClick('Broker')}>Broker</SubMenuItem>
            <SubMenuItem onClick={() => handleMenuItemClick('Exchange')}>Exchange</SubMenuItem>
            <SubMenuItem onClick={() => handleMenuItemClick('Country')}>Country</SubMenuItem>
            <SubMenuItem onClick={() => handleMenuItemClick('PriceSource')}>Price Source</SubMenuItem>
            <SubMenuItem onClick={() => handleMenuItemClick('Issuer')}>Issuer</SubMenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem>
          About
          <SubMenu>
            <SubMenuItem>
              Company
              <SubSubMenu>
                <SubSubMenuItem>History</SubSubMenuItem>
                <SubSubMenuItem>Team</SubSubMenuItem>
              </SubSubMenu>
            </SubMenuItem>
            <SubMenuItem>Services</SubMenuItem>
            <SubMenuItem>Contact</SubMenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem>
          Contact
        </MenuItem>
        <MenuItem onClick={setSideBarOpen} style={{marginLeft: "auto"}}>
          <DownArrowIcon/>
        </MenuItem>
      </Menu>
    </NavBarContainer>
  );
};

export default Topbar;
