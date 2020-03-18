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
        <p className={`${CLASS}-item-index`}>{index}</p>
        <p className={`${CLASS}-item-name`}>{name}</p>
      </NavLink>
    );
  };

  const renderMenu = () =>
    Object.keys(SIDE_NAV_TYPE).map(key => renderMenuItem(key));

  return <div className={CLASS}>{renderMenu()}</div>;
};
export default SideNav;
