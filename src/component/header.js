import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import './header.scss';

const Header = (props) => {
  const { staticData } = props;

  return (
    <div className="componentcontainer-header">
      <div className="imgcontainer-logo">
        <Link to={staticData.imgcontainer.url}>
          <img src={staticData.imgcontainer.src} alt="logo" />
        </Link>
      </div>
      <ul className="navbar">
        {
          staticData.navbar.map((list, i) => (
            <li key={`navbar${i}`}>
              <NavLink to={
                  {
                    pathname: list.url,
                    state: {
                      breadcrumbPath: list.breadcrumbPath,
                      headerDescription: list.headerDescription,
                    },
                  }
                }
              >
                {
                  list.fontIcon
                  && <i className={list.fontIcon} />
                }
                {list.title}
                {
                  list.remind
                  && <span className="animate-sharp-red">{list.remind}</span>
                }
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Header;
