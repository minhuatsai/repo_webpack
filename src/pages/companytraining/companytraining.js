import React from 'react';
import Breadcrumb from '../../component/breadcrumb';

const CompanyTraining = (props) => (
  <div className="pagcontainer" id="page-companytraining">
    <Breadcrumb routerData={props} />
    <div className="page-content">
      <h1>企業代訓 page</h1>
    </div>
  </div>
);

export default CompanyTraining;
