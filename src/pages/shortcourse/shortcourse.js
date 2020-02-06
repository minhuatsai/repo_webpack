import React from 'react';
import Breadcrumb from '../../component/breadcrumb';

const Shortcourse = (props) => (
  <div className="pagcontainer" id="page-shortcourse">
    <Breadcrumb routerData={props} />
    <div className="page-content">
      <h1>短期課程 page</h1>
    </div>
  </div>
);

export default Shortcourse;
