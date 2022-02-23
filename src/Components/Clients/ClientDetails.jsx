import { React } from "react";


export default function ClientDetails(props) {
    return (
        <>
            <div className="w3-row">
             <div className="w3-col s3">
              <p></p>
             </div>
             <div className="w3-col s6 w3-center">
              <img src="IconExample.png" className="w3-circle w3-center w3-padding-top-64" style={{width:"25%"}}/>
             </div>
             <div className="w3-col s3 w3-right">
               <button className="w3-btn w3-blue w3-round-xlarge w3-margin w3-right" style={{paddingTop:"20px"}}><i className="fa fa-plus" aria-hidden="true"></i> Add</button>
             </div>
            </div>
            <div className="w3-row">
             <div className="w3-col m3">
             <p></p>
             </div>
             <div className="w3-col m6 w3-center">
             <h1><strong>Chris James</strong></h1>
             </div>
             <div className="w3-col m3 w3-right">
             </div>
            </div>
        </>
    );
}
