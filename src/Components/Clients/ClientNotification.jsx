import { React } from "react";


export default function ClientNotification(props) {
    return (
        <>
        <div className="w3-row">
          <div className="w3-container w3-padding w3-round-large" style={{background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(2,0,36,1) 37%, rgba(40,35,90,1) 71%, rgba(72,64,136,0.9419117988992471) 95%)"}}>
           <div className="w3-col m4">
              <p></p>
           </div>
           <div className="w3-col m4 w3-center">
              <p src="bell3.png" className="w3-circle w3-center w3-padding-top-32" style={{width:"85%", height:"85%"}}></p>
           </div>
           <div className="w3-col m4">
              <p></p>
           </div>
          </div>
        </div>
        <div className="w3-container w3-padding-16">
          <h3 className="w3-center w3-xxxlarge"><strong>Notifications<span> <i class="fa fa-bell-o"></i></span></strong></h3>
        </div>
        <div className="w3-container w3-padding">
          <ul class="w3-ul w3-card-4 w3-padding-16">
            <li class="w3-bar">
              <span class="w3-bar-item w3-button w3-white w3-xlarge w3-right">×</span>
              <span class="w3-bar-item w3-circle w3-hide-small" style={{width:"95px"}}><i class="fa fa-bell-o fa-3x" ></i></span>
              <div class="w3-bar-item">
                <span class="w3-large"><strong>Trainer</strong></span><br />
                <span>See you tomorrow</span>
              </div>
            </li>
          </ul>
          <ul class="w3-ul w3-card-4 w3-padding-16">
            <li class="w3-bar">
              <span class="w3-bar-item w3-button w3-white w3-xlarge w3-right">×</span>
              <span class="w3-bar-item w3-circle w3-hide-small" style={{width:"95px"}}><i class="fa fa-bell-o fa-3x" ></i></span>
              <div class="w3-bar-item">
                <span class="w3-large"><strong>Pocket Trainer</strong></span><br />
                <span>New appointment</span>
              </div>
            </li>
          </ul>
          <ul class="w3-ul w3-card-4 w3-padding-16">
            <li class="w3-bar">
              <span class="w3-bar-item w3-button w3-white w3-xlarge w3-right">×</span>
              <span class="w3-bar-item w3-circle w3-hide-small" style={{width:"95px"}}><i class="fa fa-bell-o fa-3x" ></i></span>
              <div class="w3-bar-item">
                <span class="w3-large"><strong>Trainer</strong></span><br />
                <span>See you tomorrow</span>
              </div>
            </li>
          </ul>
          <ul class="w3-ul w3-card-4 w3-padding-16">
            <li class="w3-bar">
              <span class="w3-bar-item w3-button w3-white w3-xlarge w3-right">×</span>
              <span class="w3-bar-item w3-circle w3-hide-small" style={{width:"95px"}}><i class="fa fa-bell-o fa-3x" ></i></span>
              <div class="w3-bar-item">
                <span class="w3-large"><strong>Trainer</strong></span><br />
                <span>See you tomorrow</span>
              </div>
            </li>
          </ul>
        </div>
        </>
    );
}
