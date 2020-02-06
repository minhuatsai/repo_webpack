import React from 'react';
import Breadcrumb from '../../component/breadcrumb';

const AstroCamp = (props) => (
  <div className="pagcontainer" id="page-astrocamp">
    <Breadcrumb routerData={props} />
    <div className="page-content">
      <h1>ASTRO Camp  page</h1>
    </div>
  </div>
);

export default AstroCamp;
