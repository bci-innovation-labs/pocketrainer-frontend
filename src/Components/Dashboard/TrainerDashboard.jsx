import { Calendar, momentLocalizer } from "react-big-calendar";
import { React , useState, useEffect, useCallback } from "react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getAppoimentList } from "../../API/appoiments";
import { Link, Navigate } from "react-router-dom"



const localizer = momentLocalizer(moment);
export default function TrainerDashboard (props){
    const [appoiments, setAppoiments] = useState([])
    const [events, setEvents] = useState({})
    const [forceURL, setForceURL] = useState("")

    const handleSelectEvent = useCallback(
       (event) => {
         console.log(event.id)
         setForceURL("/appoiment/" + event.id)
       },
       []
     )
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
  setAppoiments(response.data)
  setEvents(e)
  }
  function onGetAppoimentError(err){

  }
  function onGetAppoimentDone(){

  }

  useEffect(() => {
  setTimeout(() => {
    getAppoimentList(onGetAppoimentSucces, onGetAppoimentError, onGetAppoimentDone)
  }, 100)
   return () => console.log('unmounting...');
 }, [])

  if (forceURL !== ""){
   return(
   <Navigate to={forceURL}/>
   )
  }
  return(
    <>
      <div class="w3-display-container">
      <h1>Trainer Dashboard</h1><button class="w3-button w3-circle w3-black w3-display-right">+</button>
      </div>
      <Calendar
       popup ={true}
       localizer={localizer}
       defaultDate={new Date()}
       onSelectEvent={handleSelectEvent}
       defaultView="month"
       events={events}
       style={{ height: "100vh" }}
     />
    </>
  )
}
