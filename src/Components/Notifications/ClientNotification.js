import { React, useEffect, useState } from "react";
import { BIOMETRICS_CLOUD_LOGIN_URL } from "../../Constants/App"
import { Link } from "react-router-dom"
import { getAppoimentList,  putAppointmentClientReadDetail  } from "../../API/appoiments";
import moment from 'moment';



export default function ClientNotification(props) {
  const [appoiments, setAppoiments] = useState([])
  useEffect(() => {
  setTimeout(() => {
    const trainerString = localStorage.getItem("profile")
    const trainerObj = JSON.parse(trainerString)
    const filter = {
      client_id: trainerObj.id,
      has_client_read: false,
    }
    getAppoimentList(onGetAppoimentSucces, onGetAppoimentError, onGetAppoimentDone, filter)
  }, 100)
   return () => console.log('unmounting...');
 }, [])

   function onGetAppoimentSucces(response){
     let e = []

     setAppoiments(response.data.results)
   }

  function onGetAppoimentError(err){
   }
  function onGetAppoimentDone(){
   }

   function onSuccesAppointmentClientRead(response){
   console.log(response.data)

   }
   function onErrorAppointmentClientRead(err){

   }
   function onDoneAppointmentClientRead(){

   }

   function onClick(e, id){
     console.log(id)
     let data = {
       id:id,
       has_client_read:true,
     }
     putAppointmentClientReadDetail(data, onSuccesAppointmentClientRead, onErrorAppointmentClientRead, onDoneAppointmentClientRead)
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
            <h3 className="w3-center w3-xxxlarge"><strong>Client Notifications<span> <i class="fa fa-bell-o"></i></span></strong></h3>
          </div>
          <div className="w3-container w3-padding">
          {appoiments && appoiments.map ((appoiment) => (
          <ul className="w3-ul w3-card-4 w3-padding-16">
            <li className="w3-bar">
              <button type="button" onClick={(e, id) => onClick(e, appoiment.id)} className="w3-bar-item w3-button w3-white w3-xlarge w3-right">×</button>
              <span className="w3-bar-item w3-circle w3-hide-small" style={{width:"95px"}}><i className="fa fa-bell-o fa-3x" ></i></span>
              <div className="w3-bar-item">
                <span className="w3-large"><strong><Link to={`/appoiment/${appoiment.id}`}>{appoiment.trainer_name}</Link></strong></span><br />
                <span>{moment(appoiment.date_time).format('MMMM Do YYYY, h:mm:ss a')}</span>
              </div>
            </li>
          </ul>
            ))}
          </div>
      </>
  );
}
