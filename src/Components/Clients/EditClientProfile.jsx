import { React, useState } from "react";


import { putProfileDetail } from "../../API/profile";
import { BrowserRouter as Router, Switch, Route, Navigate, Link } from "react-router-dom";


export default function EditClientProfile(props) {
  const [forceURL, setForceURL] = useState("")
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem("profile")))
  const [name, setName] = useState(profile.name)
  const [age, setAge] = useState(profile.age)
  const [goals, setGoals] = useState(profile.goals)
  const [occupation, setOccupation] = useState(profile.occupation)
  const [hobbies, setHobbies] = useState(profile.hobbies)

  function onPutProfileSucces(response){
    const data = response.data
    alert("Succesfully updated")
    setForceURL("/client-profile")

   }
   function onPutProfileError(err){
    }
  function onPutProfileDone(){
   }

  function onNameChange(e){
    let newName =e.target.value
    setName(newName)
  }
  function onAgeChange(e){
    let newAge =e.target.value
    setAge(newAge)
  }
  function onGoalsChange(e){
    let newGoal =e.target.value
    setGoals(newGoal)
  }
  function onOccupationChange(e){
    let newOccupation =e.target.value
    setOccupation(newOccupation)
  }
  function onHobbiesChange(e){
    let newHobbies =e.target.value
    setHobbies(newHobbies)
  }
  function onClickSubmit(e){
    const data = {
      "role": profile.role,
      "name": name,
      "age": age,
      "goals": goals,
      "occupation": occupation,
      "hobbies": hobbies,
    }
    putProfileDetail(data, onPutProfileSucces, onPutProfileError, onPutProfileDone)
  }

  if (forceURL != ""){
     return <Navigate to={forceURL}/>
   }

    return (
        <>
        <div className="w3-row">
           <div className="w3-container w3-padding w3-round-large" style={{background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(2,0,36,1) 37%, rgba(40,35,90,1) 71%, rgba(72,64,136,0.9419117988992471) 95%)"}}>
           <div className="w3-col m4">
              <p></p>
           </div>
           <div className="w3-col m4 w3-center">
              <img src="IconExample.png" className="w3-circle w3-center w3-padding-top-64" style={{width:"35%", height:"25%"}}/>
           </div>
           <div className="w3-col m4">
              <p></p>
           </div>
        </div>
        </div>
        <div className="w3-row">
           <div className="w3-col m1">
              <p></p>
           </div>
           <div className="w3-col m5 w3-padding w3-margin-top">
              <div className="w3-container">
                 <span className="w3-text-grey w3-large">Name</span>
                 <input className="w3-input w3-margin-top w3-black w3-border w3-border-indigo" type="text" onChange={onNameChange} placeholder="Edit your name." value={name}/>
              </div>
              <div className="w3-container w3-margin-top">
                 <span className="w3-text-grey w3-large">Age</span>
                 <input className="w3-input w3-margin-top w3-black w3-border w3-border-indigo" type="text" onChange={onAgeChange} placeholder="Edit your age." value={age}/>
              </div>
              <div className="w3-container w3-margin-top">
                 <span className="w3-text-grey w3-large">Goals</span>
                 <input className="w3-input w3-margin-top w3-black w3-border w3-border-indigo" type="text" onChange={onGoalsChange} placeholder="Edit your Goals." value={goals}/>
              </div>
           </div>
           <div className="w3-col m5 w3-padding w3-margin-top">
              <div className="w3-container">
                 <span className="w3-text-grey w3-large">Occupation</span>
                 <input className="w3-input w3-margin-top w3-black w3-border w3-border-indigo" type="text" onChange={onOccupationChange} placeholder="Edit your Occupation." value={occupation}/>
              </div>
              <div className="w3-container w3-margin-top">
                 <span className="w3-text-grey w3-large">Hobbies</span>
                 <input className="w3-input w3-margin-top w3-black w3-border w3-border-indigo" type="text" onChange={onHobbiesChange} placeholder="Edit your Hobbies." value={hobbies}/>
              </div>
           </div>
           <div className="w3-col m1">
              <p></p>
           </div>
        </div>
        <div className="w3-row">
        <div className="w3-col m1">
           <p></p>
        </div>
        <div className="w3-col s5 w3-center w3-padding-32 w3-margin-left">
         <button className="w3-button w3-block w3-margin w3-round-large w3-black" style={{height:"45px",width:"80%",background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(79,0,0,1) 35%, rgba(255,0,0,1) 100%)"}}>Cancel</button>
        </div>
        <div className="w3-col s5 w3-center w3-padding-32 w3-margin-left">
         <button className="w3-button w3-block w3-margin w3-round-large w3-black" onClick={onClickSubmit} type="button" style={{height:"45px",width:"80%",background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(2,0,36,1) 37%, rgba(40,35,90,1) 71%, rgba(72,64,136,0.9419117988992471) 95%)"}}>Update</button>
        </div>
        <div className="w3-col m1">
           <p></p>
        </div>
        </div>
        </>
    );
}
