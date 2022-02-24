import { React } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart} from 'recharts';


const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


export default function ClientDetails(props) {
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
           <div className="w3-col m1 w3-padding">
           </div>
           <div className="w3-col m6 w3-padding">
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
           <h1>Graph</h1>
            <AreaChart data={data}>
             <LineChart width={300} height={100} data={data}>
               <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
             </LineChart>
             </AreaChart>

           </div>
        </div>
        </>
    );
}
