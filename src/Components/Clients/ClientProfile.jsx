import { React } from "react";


export default function ClientProfile(props) {
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
            <div className="w3-col m6">
              <div className="w3-container w3-margin-left w3-padding-32">
                   <span className="w3-text-grey">Hello</span>
                   <h4><strong>Fabian Levy</strong></h4>
              </div>
              <div className="w3-container w3-margin-left w3-padding-32">
                   <span className="w3-text-grey">Age</span>
                   <h4><strong>23</strong></h4>
              </div>
              <div className="w3-container w3-margin-left w3-padding-32">
                   <span className="w3-text-grey">Occupation</span>
                   <h4><strong>Web Developer</strong></h4>
              </div>
              <div className="w3-container w3-margin-left w3-padding-32">
                   <span className="w3-text-grey">Hobbies</span>
                   <h4><strong>Rock climbing, board games.</strong></h4>
              </div>
            </div>
            <div className="w3-col m6">
             <div className="w3-row">
              <div className="w3-container w3-margin-left w3-padding-32">
                <h3><strong>Goals</strong></h3>
                <ul className="">
                  <li>Get clear overview of nutritional information for his meals. </li>
                  <li>Set diet goals.</li>
                  <li>Track progress and meet deadlines.</li>
                </ul>
              </div>
            </div>
            <div className="w3-row">
             <div className="w3-container w3-margin w3-padding-64 w3-round-xxlarge w3-center" style={{background: "linear-gradient(45deg, rgba(2,0,36,1) 7%, rgba(72,64,136,0.9419117988992471) 95%)"}}>
             <h1><strong>Don't stop when you are tired. Stop when you are done.</strong></h1>
             <label className="w3-tiny w3-text-grey">quote by David Goggings.</label>
             </div>
           </div>
            </div>
          </div>
        </>
    );
}
