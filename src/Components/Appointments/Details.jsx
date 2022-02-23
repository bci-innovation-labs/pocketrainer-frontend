import { React, Component } from "react";
import {
  Link
} from "react-router-dom";
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { getDay } from 'date-fns'



class AppointmentDetails extends Component{
  constructor(props){
    super(props)
    this.state = {
      //date:new Date(localStorage.getItem("USER_PICKED_DATE")),
      date:new Date(),
    };
    this.onDateChange = this.onDateChange.bind(this)
  }

  onDateChange(pickedDate){
    console.log(pickedDate);
    this.setState({
      date:pickedDate
    })
    localStorage.setItem("USER_PICKED_DATE", pickedDate);
  }

  render(){
    const { onDateChange } = this.state
    const { date } = this.state
    //*new Date().setDate(new Date().getDate() - 1* === Yesterday Day

    return(
      <>
        <h1 className="w3-center"><b>Appointments Details</b></h1>
        <br /><br /><br />
        <div className="w3-row">
          <div className="w3-container w3-col l8">
            <div className="w3-container w3-center">
              <img className="w3-center w3-circle" src="https://www.w3schools.com/w3css/img_car.jpg" style={{width:"150px", height:"150px"}}></img>
              <h2 className=""><b>Chris James</b></h2>
              <h5 className="">23 Years Old</h5>
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
                  <input className="w3-input w3-border w3-border-purple w3-text-white w3-black" name="last" type="text" value="26/02/2022"/></p>
                </div>
                <div className="w3-container w3-col l6">
                  <p><label className="w3-xlarge"><b>Time</b></label>
                  <input className="w3-input w3-border w3-border-purple w3-text-white w3-black" name="last" type="text" value="9:00am"/></p>
                </div>
              </div>
              <div className="w3-row">
                <div className="w3-container w3-col l3">
                </div>
                <div className="w3-container w3-col l6">
                  <p><label className="w3-xlarge"><b>Exercise Plan</b></label>
                  <input className="w3-input w3-border w3-border-purple w3-text-white w3-black" name="last" type="text" value="Arm Muscle"/></p>
                </div>
                <div className="w3-container w3-col l3">
                </div>
              </div>
            </div>
          </div>
          <div className="w3-container w3-col l4">
            <DatePickerCalendar date={date} onDateChange={this.onDateChange} locale={enGB} />
          </div>
        </div>
      </>
    )
  }
}




export default AppointmentDetails;
