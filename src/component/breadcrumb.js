import React from 'react';
import { FacebookProvider, Like } from 'react-facebook';
import './breadcrumb.scss';

const Breadcrumb = (props) => {
  const { routerData } = props;
  const { location: { pathname, state: { breadcrumbPath, headerDescription } } } = routerData;

  return (
    <div className="componentcontainer-breadcrumb">
      <div className="facebook-like-share-container">
        {
          // contacts page 再塞facebook api
          pathname === '/contacts' && (
          <FacebookProvider appId="511040962329986">
            <Like
              href="https://5xruby.tw/"
              colorScheme="dark"
              layout="button_count"
              share
              size="large"
            />
          </FacebookProvider>
          )
      }
      </div>
      <div className="route-navigation">
        {breadcrumbPath}
      </div>
      <h1 className="breadcrumb-header">
        {headerDescription}
      </h1>
    </div>
  );
};

export default Breadcrumb;
