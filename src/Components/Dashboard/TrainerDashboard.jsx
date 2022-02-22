import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);


export default function TrainerDashboard (props){

    const events = [
      {
        start: moment("2022-02-17 09:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        end: moment("2022-02-17 11:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        title: "Workout #1"
      },
      {
        start: moment("2022-02-17 10:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        end: moment("2022-02-17 11:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        title: "Workout #12"
      },
      {
        start: moment("2022-02-17 12:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        end: moment("2022-02-17 13:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        title: "Workout #13"
      },
      {
        start: moment("2022-02-17 15:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        end: moment("2022-02-17 16:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        title: "Workout #14"
      },
      {
        start: moment("2022-02-17 09:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        end: moment("2022-02-17 11:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        title: "Workout #15"
      },
      {
        start: moment("2022-02-17 09:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        end: moment("2022-02-17 11:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        title: "Workout #16"
      },
      {
        start: moment("2022-02-17 09:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        end: moment("2022-02-17 11:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        title: "Workout #17"
      },
      {
        start: moment("2022-02-25 09:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        end: moment("2022-02-25 10:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        title: "Workout #3"
      },
      {
        start: moment("2022-02-18 09:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        end: moment("2022-02-18 10:00:00", "YYYY-MM-DD hh:mm:ss").toDate(),
        title: "Workout #2"
      }
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
       events={events}
       style={{ height: "100vh" }}
     />
    </>
  )
}
