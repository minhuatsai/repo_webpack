import React from 'react';
import Breadcrumb from '../../component/breadcrumb';

const Iamcoding = (props) => (
  <div className="pagcontainer" id="page-iamcoding">
    <Breadcrumb routerData={props} />
    <div className="page-content">
      <h1>線上課程 page</h1>
    </div>
  </div>
);

export default Iamcoding;
