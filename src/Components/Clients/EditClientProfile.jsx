import { React } from "react";


export default function EditClientProfile(props) {
    return (
        <>
        <div className="w3-row">
           <div className="w3-container w3-padding w3-round-large" style={{background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(2,0,36,1) 37%, rgba(40,35,90,1) 71%, rgba(72,64,136,0.9419117988992471) 95%)"}}>
           <div className="w3-col m4">
              <p></p>
           </div>
           <div className="w3-col m4 w3-center">
              <img src="IconExample.png" className="w3-circle w3-center w3-padding-top-64" style={{width:"35%", height:"25%"}}/>
           </div>
           <div className="w3-col m4">
              <p></p>
           </div>
        </div>
        </div>
        <div className="w3-row">
           <div className="w3-col m1">
              <p></p>
           </div>
           <div className="w3-col m5 w3-padding w3-margin-top">
              <div className="w3-container">
                 <span className="w3-text-grey w3-large">Name</span>
                 <input className="w3-input w3-margin-top w3-black w3-border w3-border-indigo" type="text" placeholder="Edit your name."/>
              </div>
              <div className="w3-container w3-margin-top">
                 <span className="w3-text-grey w3-large">Age</span>
                 <input className="w3-input w3-margin-top w3-black w3-border w3-border-indigo" type="text" placeholder="Edit your age."/>
              </div>
              <div className="w3-container w3-margin-top">
                 <span className="w3-text-grey w3-large">Goals</span>
                 <input className="w3-input w3-margin-top w3-black w3-border w3-border-indigo" type="text" placeholder="Edit your Goals."/>
              </div>
           </div>
           <div className="w3-col m5 w3-padding w3-margin-top">
              <div className="w3-container">
                 <span className="w3-text-grey w3-large">Occupation</span>
                 <input className="w3-input w3-margin-top w3-black w3-border w3-border-indigo" type="text" placeholder="Edit your Occupation."/>
              </div>
              <div className="w3-container w3-margin-top">
                 <span className="w3-text-grey w3-large">Hobbies</span>
                 <input className="w3-input w3-margin-top w3-black w3-border w3-border-indigo" type="text" placeholder="Edit your Hobbies."/>
              </div>
           </div>
           <div className="w3-col m1">
              <p></p>
           </div>
        </div>
        <div className="w3-row">
        <div className="w3-col m1">
           <p></p>
        </div>
        <div className="w3-col s5 w3-center w3-padding-32 w3-margin-left">
         <button className="w3-button w3-block w3-margin w3-round-large w3-black" style={{height:"45px",width:"80%",background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(79,0,0,1) 35%, rgba(255,0,0,1) 100%)"}}>Cancel</button>
        </div>
        <div className="w3-col s5 w3-center w3-padding-32 w3-margin-left">
         <button className="w3-button w3-block w3-margin w3-round-large w3-black" style={{height:"45px",width:"80%",background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(2,0,36,1) 37%, rgba(40,35,90,1) 71%, rgba(72,64,136,0.9419117988992471) 95%)"}}>Update</button>
        </div>
        <div className="w3-col m1">
           <p></p>
        </div>
        </div>
        </>
    );
}
