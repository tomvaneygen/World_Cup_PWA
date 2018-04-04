import React from 'react'
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router'
import styled from 'styled-components';

const StyledMenu = styled(Menu)`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (min-width: 700px) {
    justify-content: center;
  }
`;
const MenuItem = styled(Menu.Item)`
  flex: 1;
  text-align: center;
  @media (min-width: 700px) {
    flex: 0;
  }
`;

const MenuTitle = styled.div`
  display: none;
  @media (min-width: 700px) {
    display: inline;
  }
`;

const Menubar = ({location}) => {
  const menuItems = [
    {path: '/', icon: 'home', title: 'Home'},
    {path: '/matches', icon: 'table', title: 'Matches'},
    {path: '/poules', icon: 'profile', title: 'Poules'}
  ]
  return (
    <StyledMenu mode="horizontal">
        {menuItems.map(menuItem => (
          <MenuItem
            key={menuItem.title}
            className={
              location.pathname === menuItem.path && 'ant-menu-item-selected'
            }
          >
            <NavLink to={menuItem.path}>
              <Icon type={menuItem.icon} />
              <MenuTitle>{menuItem.title}</MenuTitle>
            </NavLink>
          </MenuItem>
        ))}
      </StyledMenu>
  )
}

export default withRouter(Menubar)


