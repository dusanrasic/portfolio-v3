import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { SIDE_NAV_TYPE, SIDE_NAV_LABEL } from '../../../Types/sideNav';

import './SideNav.scss';

const CLASS = 'sv-SideNav';
const SideNav = () => {
  const loc = useLocation();

  const renderMenuItem = item => {
    const index = SIDE_NAV_TYPE[item];
    const name = SIDE_NAV_LABEL[index];

    const route = item === `home` ? `` : item;
    const active = `/${route}` === `${loc.pathname}` ? 'activeLink' : '';
    return (
      <NavLink
        className={`${CLASS}-item ${active}`}
        key={index}
        to={`/${route}`}
      >
        <span className={`${CLASS}-item-indicator`} />
        <span className={`${CLASS}-item-index`}>{index}</span>
        <span className={`${CLASS}-item-name`}>{name}</span>
      </NavLink>
    );
  };

  const renderMenu = () =>
    Object.keys(SIDE_NAV_TYPE).map(key => renderMenuItem(key));

  return <div className={CLASS}>{renderMenu()}</div>;
};
export default SideNav;
