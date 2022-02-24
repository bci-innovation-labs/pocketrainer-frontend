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
      date:new Date(localStorage.getItem("USER_PICKED_DATE")),
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
    const modifiers = {
      disabled: date => (date <  new Date().setDate(new Date().getDate() - 1)) || (getDay(date) === 0),
    }
    return(
      <>
        <h1 className="w3-center">Appointments Details</h1>
        <br /><br /><br />
        <div class="w3-row">
          <div class="w3-container w3-threequarter">
            <div class="w3-container w3-center">
              <img className="w3-center w3-circle" src="https://www.w3schools.com/w3css/img_car.jpg" style={{width:"200px"}}></img>
              <h2 class="">Chris James</h2>
              <h5 class="">23 Years Old</h5>
            </div>
            <div class="w3-row w3-padding">
              <div class="w3-half w3-container">
              <form class="w3-container">
                <div class="w3-col" style={{width:"50px"}}><i class="w3-xxlarge fa fa-pencil"></i></div>
                  <div class="w3-rest">
                    <input class="w3-input w3-border" name="message" type="text" placeholder="Message" />
                    <label class="w3-text-blue"><b>Date</b></label>
                  </div>
              </form>
              </div>
              <div class="w3-half w3-container">
                <form class="w3-container">
                  <div class="w3-col" style={{width:"50px"}}><i class="w3-xxlarge fa fa-pencil"></i></div>
                    <div class="w3-rest">
                      <input class="w3-input w3-border" name="message" type="text" placeholder="Message" />
                      <label class="w3-text-blue"><b>Time</b></label>
                    </div>
                </form>
              </div>
            </div>
            <div class="w3-row w3-padding">
              <div class="w3-container w3-quarter">
              </div>
              <div class="w3-container w3-half w3-center">
                <form class="w3-container">
                  <div class="w3-col" style={{width:"50px"}}><i class="w3-xxlarge fa fa-pencil"></i></div>
                    <div class="w3-rest">
                      <input class="w3-input w3-border" name="message" type="text" placeholder="Message" />
                      <label class="w3-text-blue"><b>Exersice Plan</b></label>
                    </div>
                </form>
              </div>
              <div class="w3-container w3-quarter">
              </div>
            </div>
          </div>
          <div class="w3-container w3-quarter">
            <DatePickerCalendar date={date} onDateChange={this.onDateChange} locale={enGB} modifiers={modifiers} />
          </div>
        </div>
      </>
    )
  }
}




export default AppointmentDetails;
