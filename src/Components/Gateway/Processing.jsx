import { React } from "react";
import { BIOMETRICS_CLOUD_LOGIN_URL } from "../../Constants/App"
import { Link } from "react-router-dom"
import { useLocation } from 'react-router';
import queryString from 'query-string';


export default function Processing(props) {
  const location = useLocation();

   console.log(queryString.parse(location.search));
   const access_token = queryString.parse(location.search).t
   const refresh_token = queryString.parse(location.search).rt
   localStorage.setItem("ACCESS_TOKEN", access_token)
   localStorage.setItem("REFRESH_TOKEN", refresh_token)

    return (
        <>
            <h1>Processing</h1>
            <p>{access_token}</p>
            <p>{refresh_token}</p>
        </>
    );
}
