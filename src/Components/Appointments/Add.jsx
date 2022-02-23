import { React, Component } from "react";
import {
  Link
} from "react-router-dom";
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { getDay } from 'date-fns'



class AddAppointment extends Component{
  constructor(props){
    super(props)
    this.state = {
      date:new Date(localStorage.getItem("USER_PICKED_DATE")),
    };
    this.onDateChange = this.onDateChange.bind(this)
    this.onClickSelectCustomer = this.onClickSelectCustomer.bind(this);
  }

  onDateChange(pickedDate){
    console.log(pickedDate);
    this.setState({
      date:pickedDate
    })
    localStorage.setItem("USER_PICKED_DATE", pickedDate);
  }

  onClickSelectCustomer(id){
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") === -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }

  render(){
    const { onClickSelectCustomer } = this.state
    const { onDateChange } = this.state
    const { date } = this.state
    //*new Date().setDate(new Date().getDate() - 1* === Yesterday Day
    const modifiers = {
      disabled: date => (date <  new Date().setDate(new Date().getDate() - 1)) || (getDay(date) === 0),
    }
    return(
      <>
        <h1 className="w3-center">Add Appointment</h1>
        <div className="w3-row">
          <div className="w3-half w3-container">
            <form className="w3-container">
                <div className="w3-rest">
                  <label className="w3-text-blue"><b>Client</b></label>
                  <div className="w3-light-grey w3-section" style={{width:"75%"}}>
                    <button onClick={this.onClickSelectCustomer} className="w3-button w3-block">75%<i className="fa fa-caret-down"></i></button>
                    <div id="Demo3" className="w3-hide w3-container">
                      <p>Lorem ipsum 75% width</p>
                    </div>
                  </div>
                </div>
            </form>
          <br />
          <DatePickerCalendar date={date} onDateChange={this.onDateChange} locale={enGB} modifiers={modifiers} />
          </div>
          <div className="w3-half w3-container">
            <div className="w3-cell w3-center" style={{width:"30%"}}>
                <input className="w3-check" type="checkbox" />
                <img className="w3-padding w3-center w3-round-large" src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" style={{width:"300px", height:"150px"}}></img>
            </div>
          </div>
          <div className="w3-half w3-container">
            <div className="w3-cell w3-center" style={{width:"30%"}}>
                <input className="w3-check" type="checkbox" />
                <label className="w3-text-blue"><b>Client</b></label>

                <img className="w3-padding w3-center w3-round-large" src="https://images.unsplash.com/photo-1583500179017-12d75b04e351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" style={{width:"300px", height:"150px"}}></img>
            </div>
          </div>
          <div className="w3-half w3-container">
            <div className="w3-cell w3-center" style={{width:"30%"}}>
                <input className="w3-check" type="checkbox" />
                <img className="w3-padding w3-center w3-round-large" src="https://images.unsplash.com/photo-1532384661798-58b53a4fbe37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" style={{width:"300px", height:"150px"}}></img>
            </div>
          </div>
          <div className="w3-half w3-container">
            <div class="w3-display-container w3-text-white">
              <input className="w3-check" type="checkbox" />
              <img src="https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80" alt="Lights" style={{width:"380px", height:"230px"}}></img>
              <div class="w3-display-middle w3-container"><p>Hola</p></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}




export default AddAppointment;
