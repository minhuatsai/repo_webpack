import React from 'react';
import Breadcrumb from '../../component/breadcrumb';

const LatestNews = (props) => (
  <div className="pagcontainer" id="page-latestnews">
    <Breadcrumb routerData={props} />
    <div className="page-content">
      <h1>最新消息 page</h1>
    </div>
  </div>
);

export default LatestNews;
