import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory ,useLocation } from 'react-router-dom';
import useLocalStorage from "../../Utility/useLocalStorage";
import { isEmpty } from 'lodash';
import { TRAINER_ROLE_ID } from "../../Constants/App";

function TopNavigation() {
    const [showMenu, setShowMenu] = useState(false);
    const [profile] = useLocalStorage("POCKETTRAINER_PROFILE");
    const location = useLocation()
    if (location.pathname === "/login" || location.pathname === "/register") {
        return <div style={{paddingTop: "-70px"}}></div>;
    }

    function onHamburgerClick() {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <div className={`w3-deep-purple w3-top`} style={{height:"70px",}}>
                {showMenu && <div className="w3-sidebar w3-bar-block  w3-card w3-animate-right" style={{width:"200px",right:"0"}}>
                    <button onClick={onHamburgerClick}
                          className="w3-bar-item w3-large">Close &times;</button>
                    {isEmpty(profile)
                        ?<>
                            <a href="/login" className="w3-bar-item w3-button w3-text-black">
                                <i className="fa fa-sign-in" aria-hidden="true"></i>&nbsp;Login
                            </a>
                            <a href="/register" className="w3-bar-item w3-button w3-text-black">
                                <i className="fa fa-user-circle-o" aria-hidden="true"></i>&nbsp;Register
                            </a>
                        </>
                        : <>
                            <a href="/dashboard" className="w3-bar-item w3-button w3-text-black">
                                <i className="fa fa-dashboard" aria-hidden="true"></i>&nbsp;Dashboard
                            </a>
                            {profile && profile.roleId === TRAINER_ROLE_ID &&
                                <a href="/users" className="w3-bar-item w3-button w3-text-black">
                                    <i className="fa fa-users" aria-hidden="true"></i>&nbsp;Clients
                                </a>
                            }
                            <a href="/schedule" className="w3-bar-item w3-button w3-text-black">
                                <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;Schedule
                            </a>
                            <a href="/profile" className="w3-bar-item w3-button w3-text-black">
                                <i className="fa fa-cogs" aria-hidden="true"></i>&nbsp;Profile
                            </a>
                            <a href="/notifications" className="w3-bar-item w3-button w3-text-black">
                                <i className="fa fa-bell" aria-hidden="true"></i>&nbsp;Notifications
                            </a>
                            <a href="/logout" className="w3-bar-item w3-button w3-text-black">
                                <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Logout
                            </a>
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
