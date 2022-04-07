import { Calendar, momentLocalizer } from "react-big-calendar";
import { React , useState, useEffect } from "react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getAppoimentList } from "../../API/appoiments";


const localizer = momentLocalizer(moment);


export default function TrainerDashboard (props){
    const [appoiments, setAppoiments] = useState([])


  function onGetAppoimentSucces(response){
  console.log(response.data)
  setAppoiments(response.data)

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

    const events = [
      {
        id: 0,
        start: moment("2022-02-17 09:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        end: moment("2022-02-17 11:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        title: "Workout #1"
      },
      {
        id: 1,
        start: moment("2022-02-17 10:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        end: moment("2022-02-17 11:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        title: "Workout #12"
      },
      {
        id: 2,
        start: moment("2022-02-17 12:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        end: moment("2022-02-17 13:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        title: "Workout #13"
      },
      {
        id: 3,
        start: moment("2022-02-17 15:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        end: moment("2022-02-17 16:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        title: "Workout #14"
      },
      {
        id: 4,
        start: moment("2022-02-17 09:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        end: moment("2022-02-17 11:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        title: "Workout #15"
      },
      {
        id: 5,
        start: moment("2022-02-17 09:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        end: moment("2022-02-17 11:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        title: "Workout #16"
      },
      {
        id: 6,
        start: moment("2022-02-17 09:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        end: moment("2022-02-17 11:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        title: "Workout #17"
      },
  ];

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
       events={null}
       style={{ height: "100vh" }}
     />
    </>
  )
}
