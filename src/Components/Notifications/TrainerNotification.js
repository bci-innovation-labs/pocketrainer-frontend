import { React, useState, useEffect, useCallback } from "react";
import { BIOMETRICS_CLOUD_LOGIN_URL } from "../../Constants/App"
import { Link } from "react-router-dom"
import { getAppoimentList } from "../../API/appoiments";
import moment from "moment";



export default function TrainerNotification(props) {

  const [appoiments, setAppoiments] = useState([])
  const [events, setEvents] = useState({})
  const [forceURL, setForceURL] = useState("")

  useEffect(() => {
  setTimeout(() => {
    const trainerString = localStorage.getItem("profile")
    const trainerObj = JSON.parse(trainerString)
    const filter = {
      trainer_id: trainerObj.id,
      has_trainer_read: false
    }
    getAppoimentList(onGetAppoimentSucces, onGetAppoimentError, onGetAppoimentDone, filter )
  }, 100)
   return () => console.log('unmounting...');
 }, [])

 function onGetAppoimentSucces(response){
   let e = []

   for (let item of response.data.results){
     console.log(item)
     e.push({
       id: item.id,
       start: moment(item.date_time, "YYYY-MM-DD hh:mm:ss").toDate(),
       end: moment(item.date_time, "YYYY-MM-DD hh:mm:ss").toDate(),
       title: item.ex_plan,
     })
   }
 console.log(response.data)
 setAppoiments(response.data.results)
 setEvents(e)
 }
 function onGetAppoimentError(err){

 }
 function onGetAppoimentDone(){

 }


    return (
        <>
            <div className="w3-row">
              <div className="w3-container w3-padding w3-round-large" style={{background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(2,0,36,1) 37%, rgba(40,35,90,1) 71%, rgba(72,64,136,0.9419117988992471) 95%)"}}>
               <div className="w3-col m4">
                  <p></p>
               </div>
               <div className="w3-col m4 w3-center">
                  <p src="bell3.png" className="w3-circle w3-center w3-padding-top-32" style={{width:"85%", height:"85%"}}></p>
               </div>
               <div className="w3-col m4">
                  <p></p>
               </div>
              </div>
            </div>
            <div className="w3-container w3-padding-16">
              <h3 className="w3-center w3-xxxlarge"><strong>Trainer Notifications<span> <i class="fa fa-bell-o"></i></span></strong></h3>
            </div>
            <div className="w3-container w3-padding">
            {appoiments && appoiments.map((appoiment) => (
              <ul class="w3-ul w3-card-4 w3-padding-16">
                <li class="w3-bar">
                  <span class="w3-bar-item w3-button w3-white w3-xlarge w3-right">×</span>
                  <span class="w3-bar-item w3-circle w3-hide-small" style={{width:"95px"}}><i class="fa fa-bell-o fa-3x" ></i></span>
                  <div class="w3-bar-item">
                    <span class="w3-large"><strong>{appoiment.ex_plan}</strong></span><br />
                    <span>{appoiment.date_time}</span>
                  </div>
                </li>
              </ul>
            ))}
            </div>
        </>
    );
}
