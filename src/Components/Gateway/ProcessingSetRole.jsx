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
            <h1>Processing set Role</h1>
            <h2>Pick a role</h2>
            <button onClick={onTrainerButtonClick} className="w3-green w3-btn">Trainer (2)</button>
            <button onClick={onClientButtonClick} className="w3-green w3-btn">Client (3)</button>
        </>
    );
}
