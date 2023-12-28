// NavBar.js
import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  background-color: #333;
  padding: 10px;
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

const Topbar = () => {
  return (
    <NavBarContainer>
      <Menu>
        <MenuItem>
          Home
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
      </Menu>
    </NavBarContainer>
  );
};

export default Topbar;
