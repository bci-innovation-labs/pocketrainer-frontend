import { React, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';

import { getClientDetails } from "../../API/clientDetails";


export default function ClientDetails(props) {
  const pathname = useLocation().pathname;
  const paths = pathname.split('/');
  const id = paths[paths.length-1];

  function onGetClientDetailsSucces(response){
  console.log(response.data)

  }
  function onGetClientDetailsError(err){

  }
  function onGetClientDetailsDone(){

  }

  useEffect(() => {
 setTimeout(() => {
   getClientDetails(id, onGetClientDetailsSucces, onGetClientDetailsError, onGetClientDetailsDone)
 }, 100)
    return () => console.log('unmounting...');
    }, [])


    const data = [
      { name: '6', protein: 4000, fat: 2400, BurnCal: 2400 },
      { name: '7', protein: 3000, fat: 1398, BurnCal: 2210 },
      { name: '8', protein: 2000, fat: 9800, BurnCal: 2290 },
      { name: '10', protein: 2780, fat: 3908, BurnCal: 2000 },
      { name: '11', protein: 1890, fat: 4800, BurnCal: 2181 },
      { name: '12', protein: 2390, fat: 3800, BurnCal: 2500 }
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
                    <LineChart width={350} height={295} data={data} className="" style={{width:"100%"}}>
                       <Line type="monotone" dataKey="protein" stroke="#e60b0b" />
                       <Line type="monotone" dataKey="fat" stroke="#84d88e" />
                       <Line type="monotone" dataKey="BurnCal" stroke="#e00991" />
                       <XAxis dataKey="name" />
                       <CartesianGrid stroke="#fff" />
                       <Tooltip />
                    </LineChart>
                 </div>
                 <div className="w3-col s1 w3-container">
                 </div>
              </div>
           </div>
        </div>
        <div className="w3-row">
        <div className="w3-col m3">
           <div className="w3-container w3-margin w3-padding w3-round-xxlarge" style={{width:"175px", background: "linear-gradient(45deg, rgba(2,0,36,1) 7%, rgba(72,64,136,0.9419117988992471) 95%)"}}>
           <div className="w3-center">
              <div className="w3-container w3-padding">
                 <div className="w3-row">
                    <div className="w3-col m6 w3-center">
                       <h1><strong>18</strong></h1>
                    </div>
                    <div className="w3-col m6 w3-center">
                       <h5>May</h5>
                    </div>
                 </div>
                 <div className="w3-row">
                    <p>11:00AM-12:00PM</p>
                 </div>
              </div>
           </div>
        </div>
        </div>
          <div className="w3-col m3">
              <div className="w3-container w3-margin w3-padding w3-round-xxlarge" style={{width:"175px", background: "linear-gradient(45deg, rgba(2,0,36,1) 7%, rgba(72,64,136,0.9419117988992471) 95%)"}}>
              <div className="w3-center">
                 <div className="w3-container w3-padding">
                    <div className="w3-row">
                       <div className="w3-col m6 w3-center">
                          <h1><strong>18</strong></h1>
                       </div>
                       <div className="w3-col m6 w3-center">
                          <h5>May</h5>
                       </div>
                    </div>
                    <div className="w3-row">
                       <p>11:00AM-12:00PM</p>
                    </div>
                 </div>
              </div>
           </div>
          </div>
          <div className="w3-col m3">
              <div className="w3-container w3-margin w3-padding w3-round-xxlarge" style={{width:"175px", background: "linear-gradient(45deg, rgba(2,0,36,1) 7%, rgba(72,64,136,0.9419117988992471) 95%)"}}>
              <div className="w3-center">
                 <div className="w3-container w3-padding">
                    <div className="w3-row">
                       <div className="w3-col m6 w3-center">
                          <h1><strong>18</strong></h1>
                       </div>
                       <div className="w3-col m6 w3-center">
                          <h5>May</h5>
                       </div>
                    </div>
                    <div className="w3-row">
                       <p>11:00AM-12:00PM</p>
                    </div>
                 </div>
              </div>
           </div>
          </div>
          <div className="w3-col m3">
              <div className="w3-container w3-margin w3-padding w3-round-xxlarge" style={{width:"175px", background: "linear-gradient(45deg, rgba(2,0,36,1) 7%, rgba(72,64,136,0.9419117988992471) 95%)"}}>
              <div className="w3-center">
                 <div className="w3-container w3-padding">
                    <div className="w3-row">
                       <div className="w3-col m6 w3-center">
                          <h1><strong>18</strong></h1>
                       </div>
                       <div className="w3-col m6 w3-center">
                          <h5>May</h5>
                       </div>
                    </div>
                    <div className="w3-row">
                       <p>11:00AM-12:00PM</p>
                    </div>
                 </div>
              </div>
           </div>
          </div>
        </div>
        </>
    );
}
