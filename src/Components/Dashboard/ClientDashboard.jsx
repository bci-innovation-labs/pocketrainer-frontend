import { React } from "react";
import { CircularProgressbar, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;


export default function ClientDashboard(props){
    return (
        <>
        <div className="w3-row">
           <div className="w3-col l7 w3-container w3-padding-32">
                 <div className="w3-display-container w3-text-white ">
                    <img src="DashboardImg1.png" className="w3-round-xxlarge" style={{width:"100%"}}/>
                    <div className="w3-padding w3-display-topleft"><p>Welcome back</p><p><span className="w3-xxlarge"><strong>Mark Jonson</strong></span></p><p>Glad to see you again</p><p>Ask me anything</p></div>
                 </div>
           </div>
           <div className="w3-col l5">
             <div className="w3-round-xxlarge w3-container w3-padding-32" style={{marginTop:"32px", marginRight:"16px", marginLeft:"16px",background: "linear-gradient(45deg, rgba(2,0,36,1) 7%, rgba(72,64,136,0.9419117988992471) 95%)"}}>
               <div className="w3-row">
                   <div className="w3-col s9">
                    <span className="w3-xxlarge"><strong>Trainer Tracking</strong></span>
                  </div>
                  <div className="w3-col s3 w3-center">
                      <button style={{marginTop:"8px"}} className="w3-button w3-indigo w3-circle"><strong><i className="fa fa-ellipsis-h" aria-hidden="true"></i></strong></button>
                 </div>
                </div>
                <div className="w3-row">
                <div className="w3-col m6">
                 <div className="w3-margin w3-center w3-round-xxlarge w3-padding">
                 <p className="w3-xxlarge">Sessions</p>
                 <p className="w3-xxlarge">123</p>
                 </div>
                </div>
                <div className="w3-col m6 w3-padding w3-center">
                <CircularProgressbarWithChildren value={72}>
                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                    <h3>Main goal</h3>
                      <span className="w3-xxlarge"><strong>72%</strong></span>
                      <p>Total Score</p>
                    </div>
                </CircularProgressbarWithChildren>
                </div>
                 </div>
              </div>
           </div>
        </div>
        </>
    );
}
