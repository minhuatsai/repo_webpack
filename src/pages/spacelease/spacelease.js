import React from 'react';
import Breadcrumb from "../../component/breadcrumb";

const SpaceLease = (props)=>{
    return(
        <div className="pagcontainer" id="page-spacelease">
            <Breadcrumb routerData={props} />
            <div className="page-content">
                <h1>空間租借 page</h1>
            </div>
        </div>
    )
}

export default SpaceLease;