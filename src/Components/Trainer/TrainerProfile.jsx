import { React } from "react";


export default function TrainerProfile(props) {
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
         <div className="w3-col m6 w3-padding-16">
         <div className="w3-container w3-padding">
            <div className="w3-container w3-padding">
               <h3><strong>About Me</strong><span className="w3-right"><i class="fa fa-pencil "></i></span></h3>
               <p>Fabian Levy</p>
               <p>Personal Trainer with 4+ years of health and wellness experience across multiple fitness centers.
               Possess a proven track record in helping clients achieve fitness goals through customized exercise programs and diet plans.
               Consistently improves fitness center revenue targets by developing new programs and retaining clients.</p>
            </div>
          </div>
            <div className="w3-container w3-padding">
              <div className="w3-container w3-padding">
              <h3><strong>Education & Certification</strong><span className="w3-right"><i class="fa fa-pencil "></i></span></h3>
                  <ul className="">
                    <li><strong>ACE-Certification Health Coach</strong>| American Council on Exercise, 2014 to Present </li>
                    <li><strong>Certified Pilates Instructor</strong>| Peak Pilates, 2014 to Present </li>
                    <li><strong>CRP Certified </strong>| American Red Cross, 2011 to Present </li>
                    <li><strong>IFPA-Certified Sports Nutritionist </strong>| International Fitness Professionals Association, 2011 to Present </li>
                  </ul>
              </div>
            </div>

         </div>
          <div className="w3-col m6 w3-padding-16">
            <div className="w3-row">
               <div className="w3-container w3-margin-left w3-padding">
                  <h3><strong>Skills</strong><span className="w3-right"><i class="fa fa-pencil "></i></span></h3>
                  <ul className="">
                     <li>1-1 Personal trainig</li>
                     <li>Group fitness instruction</li>
                     <li>Client goal-setting & motivation</li>
                     <li>Customize exercise & meal</li>
                     <li>Strength & conditioning</li>
                     <li>Cardiovascular / endurance training</li>
                     <li>Nutrion Counselling</li>
                  </ul>
               </div>
               <div className="w3-container w3-margin-left w3-padding">
                  <h3><strong>Professional Experience</strong><span className="w3-right"><i class="fa fa-pencil "></i></span></h3>
                  <h7>September 2020-Present
                      Personal Trainer
                      PLANET FITNESS / Charleston, SC</h7>
                  <ul className="">
                     <li>Train with 80 customers each month, with 70% of clients reaching fitness goals within 6 months</li>
                     <li>Design personalized programs and nutritional plans for clients to achieve optimal results</li>
                     <li>Provide exceptional customer service, securing 40% of new clients through referrals</li>
                     <li>Check all gym equipment for proper use and functions, minimizing accidents or malfunctions</li>
                  </ul>
               </div>
            </div>
         </div>
        </div>
        </>
    );
}
