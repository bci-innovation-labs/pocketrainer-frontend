import { React } from "react";
import { Link } from "react-router-dom";


export default function Register(props) {
    return (
        <>

        {/*
            See index.html for more details as to HOW this image becomes full-screen. Also checkout
            this useful link explaining how to make a picture full screen in an app:
            https://css-tricks.com/perfect-full-page-background-image/#aa-css-only-technique-1
        */}
        <img src="RegisterBg.jpg" className="bg" style={{  zIndex: -1, }}/>

        <div className="b" style={{    }}>
            <br />
            <div className="w3-row">
               <div className="w3-third w3-container">
               </div>
               <div className="w3-third w3-container">
                  <div className="w3-light-grey w3-container w3-round-xlarge">
                     <div className="w3-row">
                        <div className="w3-col s4 w3-container">
                        </div>
                        <div className="w3-col s4" style={{height:"100px"}}>
                           <img src="LogoWthOutBg.png" className="w3-margin"style={{width:"100%",marginTop:"17px", marginBottom: "25px"}} className="w3-centered"/>
                        </div>
                        <div className="w3-col s4 w3-container">
                        </div>
                     </div>
                     <hr className="w3-black" style={{marginLeft:"-16px",marginRight:"-16px",height:"2px"}}/>
                     <h1><strong>Register</strong></h1>
                     <p className="w3-text-orange">Welcome to Pocketrainer</p>
                     <br />
                     <p>
                        <label> First Name (*)</label>
                        <input className="w3-input w3-round-xlarge" type="text" name="first_name"/>
                     </p>
                     <p>
                        <label> Last Name (*)</label>
                        <input className="w3-input w3-round-xlarge" type="text" name="last_name"/>
                     </p>
                     <p>
                        <label> Email (*)</label>
                        <input className="w3-input w3-round-xlarge" type="email" name="email"/>
                     </p>
                     <p>
                        <label> Password (*)</label>
                        <input className="w3-input w3-round-xlarge" type="password" name="password"/>
                     </p>
                     <p>
                        <button className="w3-btn w3-green w3-block w3-margin-bottom w3-round-large">REGISTER</button>
                        <button className="w3-btn w3-red w3-block w3-margin-bottom w3-round-large">CANCEL</button>
                        <p>
                        Already have an account?. <Link to="/login" className="w3-text-orange">Login Now</Link>
                        </p>
                     </p>
                  </div>
               </div>
               <div className="w3-third w3-container">
               </div>
            </div>

        </div>
        </>
    );
}
