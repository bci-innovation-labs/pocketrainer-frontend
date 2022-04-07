import { Calendar, momentLocalizer } from "react-big-calendar";
import { React , useState, useEffect } from "react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getAppoimentList } from "../../API/appoiments";


const localizer = momentLocalizer(moment);

/*const events = [
  {
    id: 0,
    start: moment("2022-04-16 09:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
    end: moment("2022-04-17 11:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
    title: "Workout #1"
  },
  {
    id: 1,
    start: moment("2022-04-18 09:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
    end: moment("2022-04-19 11:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
    title: "Workout #2"
  },
];*/

export default function TrainerDashboard (props){
    const [appoiments, setAppoiments] = useState([])
    const [events, setEvents] = useState({})


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



  return(
    <>
      <div class="w3-display-container">
      <h1>Trainer Dashboard</h1><button class="w3-button w3-circle w3-black w3-display-right">+</button>
      </div>
      <Calendar
       popup ={true}
       localizer={localizer}
       defaultDate={new Date()}
       defaultView="month"
       events={events}
       style={{ height: "100vh" }}
     />
    </>
  )
}
