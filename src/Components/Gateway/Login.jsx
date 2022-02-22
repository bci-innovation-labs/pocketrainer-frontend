import { React } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default function Login(props) {
    return (
        <>
        <img src="LoginBg.jpg" className="bg" style={{  zIndex: -1, }}/>

        <div className="b" style={{    }}>
           <br />
           <div className="w3-row">
              <div className="w3-third w3-container">
                 <div className="w3-light-grey w3-container w3-round-xlarge">
                    <div className="w3-row">
                       <div className="w3-col s4 w3-container">
                       </div>
                       <div className="w3-col s4" style={{height:"100px"}}>
                          <img src="LogoWthOutBg.png" style={{width:"100%",marginTop:"17px", marginBottom:"17px"}} className="w3-centered"/>
                       </div>
                       <div className="w3-col s4 w3-container">
                       </div>
                    </div>
                    <hr className="w3-black" style={{marginLeft:"-16px",marginRight:"-16px",height:"2px"}}/>
                    <br />
                    <p className="w3-text-orange">Welcome back</p>
                    <h1><strong>Login to your account</strong></h1>
                    <br />
                    <p>
                       <label> Email </label>
                       <input className="w3-input w3-round-xlarge" type="email" name="email"/>
                    </p>
                    <p>
                       <label> Password </label>
                       <input className="w3-input w3-round-xlarge" type="password" name="password"/>
                    </p>
                    <p>
                       <br />
                       <button className="w3-btn w3-green w3-block w3-margin-bottom w3-round-large">LOGIN</button>
                       <br />
                    <p>
                       Don't have an account?
                       <Link to="/register" className="w3-text-orange">
                        Join free today</Link>
                    </p>
                    </p>
                 </div>
              </div>
              <div className="w3-third w3-container">
              </div>
              <div className="w3-third w3-container">
                 <button className="w3-btn w3-green w3-right w3-margin-bottom w3-round-large">SIGN UP</button>
              </div>
           </div>
           <br />
        </div>
        </>
    );
}
