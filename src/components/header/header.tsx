import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css';

const HeaderApp = () => {
  const navLinkArr = [
    { id: 1, navName: 'Main Page', link: '/' },
    { id: 2, navName: 'About Us', link: 'about' },
    { id: 3, navName: 'Forms', link: 'forms' },
  ];
  return (
    <div className={style.header}>
      <div style={{ width: '50%' }}>
        {navLinkArr.map((item) => {
          return (
            <NavLink
              key={item.id}
              to={item.link}
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: 150,
              }}
            >
              {item.navName}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderApp;
