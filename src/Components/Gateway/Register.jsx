import { React } from "react";


export default function Register(props) {
    return (
        <>
        <div className="" style={{backgroundImage: `url("RegisterBg.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width:"auto",
        height:"100%",
        minHeight:"100%",
        }}>
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
                       <img src="LogoWthOutBg.png" style={{width:"100%",marginTop:"17px"}} className="w3-centered"/>
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
                    <button className="w3-btn w3-green w3-block w3-margin-bottom w3-round-large">Register</button>
                    <button className="w3-btn w3-red w3-block w3-margin-bottom w3-round-large">Cancel</button>
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
