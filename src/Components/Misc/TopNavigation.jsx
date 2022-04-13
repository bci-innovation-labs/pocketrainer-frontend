import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory ,useLocation } from 'react-router-dom';
import useLocalStorage from "../../Utility/useLocalStorage";
import { isEmpty } from 'lodash';
import { TRAINER_ROLE_ID, CLIENT_ROLE_ID } from "../../Constants/App";
import { BIOMETRICS_CLOUD_LOGIN_URL } from "../../Constants/App"


function TopNavigation() {
    const [showMenu, setShowMenu] = useState(false);
    const [profile] = useLocalStorage("profile");
    const location = useLocation()
    if (location.pathname === "/login" || location.pathname === "/register") {
        return <div style={{paddingTop: "-70px"}}></div>;
    }

    function onHamburgerClick() {
        setShowMenu(!showMenu);
    }

  console.log(profile)
    return (
        <>
            <div className={`w3-deep-purple w3-top`} style={{height:"70px",}}>
                {showMenu && <div className="w3-sidebar w3-bar-block  w3-card w3-animate-right" style={{width:"200px",right:"0"}}>
                    <button onClick={onHamburgerClick}
                          className="w3-bar-item w3-large">Close &times;</button>
                    {isEmpty(profile)
                        ?<>
                            <a href={BIOMETRICS_CLOUD_LOGIN_URL} className="w3-bar-item w3-button w3-text-black">
                                <i className="fa fa-sign-in" aria-hidden="true"></i>&nbsp;Login
                            </a>
                            <a href={BIOMETRICS_CLOUD_LOGIN_URL} className="w3-bar-item w3-button w3-text-black">
                                <i className="fa fa-user-circle-o" aria-hidden="true"></i>&nbsp;Register
                            </a>
                        </>
                      :<>
                        {profile && profile.role === TRAINER_ROLE_ID &&
                         <>
                            <a href="/dashboard-trainer" className="w3-bar-item w3-button w3-text-black">
                                <i className="fa fa-dashboard" aria-hidden="true"></i>&nbsp;Dashboard
                            </a>
                            <a href="/clients" className="w3-bar-item w3-button w3-text-black">
                                <i className="fa fa-dashboard" aria-hidden="true"></i>&nbsp;Clients
                            </a>
                            <a href="/clients" className="w3-bar-item w3-button w3-text-black">
                                <i className="fa fa-dashboard" aria-hidden="true"></i>&nbsp;Dashboard
                            </a>
                         </>
                        }
                        {profile && profile.role === CLIENT_ROLE_ID &&
                          <>
                            <a href="/dashboard-client" className="w3-bar-item w3-button w3-text-black">
                                <i className="fa fa-dashboard" aria-hidden="true"></i>&nbsp;Dashboard
                            </a>
                          </>
                        }
                      </>
                    }

                </div>}

                <div className="w3-bar w3-xxlarge">
                    <Link to={isEmpty(profile) ? "/login" : "/dashboard"}
                   className="w3-bar-item"
                       style={{textDecoration:"none"}}
                   >
                        <div className="w3-hide-small">
                            <img src={"logo512.png"} class="w3-round" width={45} alt="Pocketrainer" />
                            &nbsp;Pocketrainer
                        </div>
                    </Link>
                    <button onClick={onHamburgerClick}
                          className="w3-bar-item w3-button w3-right"
                           disabled={showMenu}
                          >&#9776;</button>
                </div>
            </div>
        </>
    );
}

export default TopNavigation;
