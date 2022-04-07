import { React , useState, useEffect } from "react";
import {
  Link
} from "react-router-dom";
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { Calendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import "./react-nice-dates-override.css";
import moment from 'moment';
import { getDay } from 'date-fns'
import { useLocation } from "react-router-dom";
import { isSameDay } from 'date-fns'


import { getAppoimentDetails } from "../../API/appoiments";


export default function AppoimentDetails(props){
  const [appoiment, setAppoiment] = useState({})
  const pathname = useLocation().pathname;
  const paths = pathname.split('/');
  const id = paths[paths.length-1];
  const [selectedDates, setSelectedDates] = useState([])

  const modifiers = {
selected: date => selectedDates.some(selectedDate => isSameDay(selectedDate, date))
}

  function onGetAppoimentDetailsSucces(response){
    var y = new Date(response.data.date_time);

    setSelectedDates([...selectedDates, y])
    setAppoiment(response.data)
  }
  function onGetAppoimentDetailsError(err){

  }
  function onGetAppoimentDetailsDone(){

  }

   useEffect(() => {
  setTimeout(() => {
    getAppoimentDetails(id, onGetAppoimentDetailsSucces, onGetAppoimentDetailsError, onGetAppoimentDetailsDone)
  }, 100)
     return () => console.log('unmounting...');
     }, [])

console.log(appoiment)
  return(
    <>
      <h1 className="w3-center"><b>Appointments Details</b></h1>
      <br /><br /><br />
      <div className="w3-row">
        <div className="w3-container w3-col l8">
          <div className="w3-container w3-center">
            <img className="w3-center w3-circle" src="https://www.w3schools.com/w3css/img_car.jpg" style={{width:"150px", height:"150px"}}></img>
            <h2 className=""><b>{appoiment.client_name}</b></h2>
            <h5 className="">{appoiment.client_age} Years Old</h5>
          </div>
          <div className="w3-hide-small">
            <div>
              <br /><br /><br />
            </div>
          </div>
          <div className="w3-row w3-padding">
            <div className="w3-row">
              <div className="w3-container w3-col l6">
                <p><label className="w3-xlarge"><b>Date</b></label>
                <input className="w3-input w3-border w3-border-purple w3-text-white w3-black" name="last" type="text" value={moment(appoiment.date_time).format('ll')}/></p>
              </div>
              <div className="w3-container w3-col l6">
                <p><label className="w3-xlarge"><b>Time</b></label>
                <input className="w3-input w3-border w3-border-purple w3-text-white w3-black" name="last" type="text" value={moment(appoiment.date_time).format('LT')}/></p>
              </div>
            </div>
            <div className="w3-row">
              <div className="w3-container w3-col l3">
              </div>
              <div className="w3-container w3-col l6">
                <p><label className="w3-xlarge"><b>Exercise Plan</b></label>
                <input className="w3-input w3-border w3-border-purple w3-text-white w3-black" name="last" type="text" value={appoiment.ex_plan}/></p>
              </div>
              <div className="w3-container w3-col l3">
              </div>
            </div>
          </div>
        </div>
        <div className="w3-container w3-col l4">
          <Calendar  modifiers={modifiers} locale={enGB} disabled={true} />
        </div>
      </div>
    </>
  )
}
