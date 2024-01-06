// NavBar.js
import React from 'react';
import styled from 'styled-components';
import { DownArrowIcon } from '../../Icons/Icons';
import StaticDataFund from '../../Screens/Fund/StaticDataFund';

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


  return (
    <NavBarContainer>
      <Menu>
        <MenuItem>
          Static Data
          <SubMenu>
            <SubMenuItem >Fund</SubMenuItem>
            <SubMenuItem>Custodian</SubMenuItem>
            <SubMenuItem>Broker</SubMenuItem>
            <SubMenuItem>Exchange</SubMenuItem>
            <SubMenuItem>Country</SubMenuItem>
            <SubMenuItem>Price Source</SubMenuItem>
            <SubMenuItem>Issuer</SubMenuItem>
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
