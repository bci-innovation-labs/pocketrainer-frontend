import { React, useState } from "react";
import { BIOMETRICS_CLOUD_LOGIN_URL } from "../../Constants/App"
import { Link, Navigate } from "react-router-dom"
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { putProfileDetail } from "../../API/profile";


export default function ProcessingSetRole(props) {
  const [forceURL, setForceURL] = useState("")
  let profile = localStorage.getItem("profile")

  profile = JSON.parse(profile)

  function onTrainerButtonClick(e){
    profile.role = 2
    putProfileDetail(profile, onPutProfileSucces, onPutProfileError, onPutProfileDone)
  }

  function onClientButtonClick(e){
    profile.role = 3
    putProfileDetail(profile, onPutProfileSucces, onPutProfileError, onPutProfileDone)
  }

  function onPutProfileSucces(response){
   const data = response.data;
   if (data.role === 2){
     setForceURL("/dashboard-trainer")
   }
   else if (data.role === 3){
     setForceURL("/dashboard-client")
   }
  }

  function onPutProfileError(err){
    // TODO
  }

  function onPutProfileDone(){
    // TODO
  }

  if (forceURL !== ""){
    return (
      <Navigate to={forceURL}/>
    )
  }
    return (
        <>
            <h1 className="w3-center">Processing set Role</h1>
            <h4 className="w3-center w3-margin-bottom ">Pick a role</h4>
            <div class="w3-row-padding">
              <div class="w3-half w3-margin-bottom">
                <ul class="w3-ul w3-border w3-center w3-hover-shadow">
                  <li class="w3-purple w3-xlarge w3-padding-32">Trainer</li>
                  <li class="w3-padding-16"><img src="../male3.png" className="w3-center" style={{width:"25%", height:"25%"}}/></li>
                  <li class="w3-padding-24">
                    <button onClick={onTrainerButtonClick} className="w3-purple w3-btn w3-padding-large">Select</button>
                  </li>
                </ul>
              </div>
              <div class="w3-half w3-margin-bottom">
                <ul class="w3-ul w3-border w3-center w3-hover-shadow">
                  <li class="w3-purple w3-xlarge w3-padding-32">Customer</li>
                  <li class="w3-padding-16"><img src="../man2.png" className="w3-center" style={{width:"25%", height:"25%"}}/></li>
                  <li class="w3-padding-24">
                    <button onClick={onClientButtonClick} className="w3-purple w3-btn w3-padding-large">Select</button>
                  </li>
                </ul>
              </div>
            </div>


        </>
    );
}
