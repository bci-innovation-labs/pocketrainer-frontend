import { React } from "react";
import { LineChart, Line } from 'recharts';


export default function ClientDetails(props) {

    const data = [
      { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
      { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
      { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
      { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
      { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
      { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
    ];
    // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];

    return (
        <>
        <div className="w3-row w3-padding-top-64">
           <div className="w3-col s3">
              <p></p>
           </div>
           <div className="w3-col s6 w3-center">
              <img src="IconExample.png" className="w3-circle w3-center" style={{width:"25%", height:"25%"}}/>
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
        <div className="w3-row">
           <div className="w3-col m3">
              <p></p>
           </div>
           <div className="w3-col m6 w3-center">
              <h4>23 Years Old</h4>
           </div>
           <div className="w3-col m3 w3-right">
           </div>
        </div>
        <div className="w3-row">
           <div className="w3-col m1 w3-container">
           </div>
           <div className="w3-col m6 w3-container">
              <h3>Goals</h3>
              <ul>
                 <li>Get clear overview of nutritional information information for his meals.</li>
                 <li>Set diet goals.</li>
                 <li>Track progress and meet </li>
              </ul>
              <h3>Challenges</h3>
              <ul>
                 <li>Build muscle mass and gain weight.</li>
              </ul>
           </div>
           <div className="w3-col m5">
                <div className="w3-row w3-margin-top">
                     <div className="w3-col s1 w3-container">
                     </div>
                     <div className="w3-col s10 w3-container">
                         {/* https://recharts.org/en-US/guide/getting-started */}
                         <LineChart width={300} height={300} data={data} className="" style={{width:"100%"}}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                         </LineChart>
                     </div>
                     <div className="w3-col s1 w3-container">
                     </div>

                </div>
            </div>
        </div>
        </>
    );
}
