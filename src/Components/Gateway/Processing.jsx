import { React, useState } from "react";
import { BIOMETRICS_CLOUD_LOGIN_URL } from "../../Constants/App"
import { Link, Navigate } from "react-router-dom"
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { getProfileDetail } from "../../API/profile";


export default function Processing(props) {
  const [forceURL, setForceURL] = useState("");
  const location = useLocation();

   console.log(queryString.parse(location.search));
   const access_token = queryString.parse(location.search).t
   localStorage.setItem("ACCESS_TOKEN", access_token)


  function onGetProfileSucces(response){
     const profile = JSON.stringify(response.data)
     localStorage.setItem("profile", profile)
     console.log(response.data)
     let role = response.data.role
     let fURL = ""

     if (role === 1){
       fURL = "/processing/set-role"
     }
     else if (role === 2){
       fURL = "/dashboard-trainer"
     }
     else if (role === 3){
       fURL = "/dashboard-client"
     }
     setForceURL(fURL)
   }

  function onGetProfileError(err){

   }

  function onGetProfileDone(){

   }

   getProfileDetail(onGetProfileSucces, onGetProfileError, onGetProfileDone)
   if (forceURL !== ""){
     return(
     <Navigate to={forceURL}/>
     )
   }
    return (
        <>
            <h1>Processing</h1>
            <p>{access_token}</p>
        </>
    );
}
