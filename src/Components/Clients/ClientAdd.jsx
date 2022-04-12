import { React, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { postClientTrainerRelationship } from "../../API/client_trainer_relationship"


export default function ClientAdd(props) {
    const [email, setEmail] = useState("")
    const [forceURL, setForceURL] = useState("")


    function onSuccessCallback(response){
    console.log(response.data)
    setForceURL("/clients")
    }
    function onErrorCallBack(err){

    }
    function onDoneCallback(){

    }

    function onEmailChange(e){
      let newEmail =e.target.value
      setEmail(newEmail)
    }

    function onSubmitClick(e) {
      const postData = {
        "email": email,
        "trainer_id": 2,
      }
      postClientTrainerRelationship(postData, onSuccessCallback, onErrorCallBack, onDoneCallback)
    }


    if (forceURL !==""){
      return <Navigate to={forceURL} />
    }

    return (
        <>
          <div>
            <form className="w3-container">

            <label>Email</label>
            <input className="w3-input" type="text" onChange={onEmailChange} value={email}/>

            <button class="w3-btn w3-blue-grey" type="button" onClick={onSubmitClick}> Add Client</button>
            <Link to="/clients" class="w3-btn w3-blue-grey">Cancel</Link>


            </form>
          </div>
        </>
    );
}
