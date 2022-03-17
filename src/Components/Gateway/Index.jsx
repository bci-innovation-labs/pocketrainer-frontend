import { React } from "react";
import { BIOMETRICS_CLOUD_LOGIN_URL } from "../../Constants/App"
import { Link } from "react-router-dom"


export default function Index(props) {
    return (
        <>
            <h1>Login or Register</h1>
            <a href={BIOMETRICS_CLOUD_LOGIN_URL } className="w3-btn">Sign in with BIOCloud</a>
            <p></p>
            <p></p>
        </>
    );
}
