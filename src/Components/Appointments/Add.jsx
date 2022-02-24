import { React, Component } from "react";
import {
  Link
} from "react-router-dom";
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { getDay } from 'date-fns'
import Select from 'react-select'



class AddAppointment extends Component{
  constructor(props){
    super(props)
    this.state = {
      date:new Date(localStorage.getItem("USER_PICKED_DATE")),
      options : [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
      ]
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
    const { options } = this.state
    console.log(options)
    const { onDateChange } = this.state
    const { date } = this.state
    //*new Date().setDate(new Date().getDate() - 1* === Yesterday Day
    const modifiers = {
      disabled: date => (date <  new Date().setDate(new Date().getDate() - 1)) || (getDay(date) === 0),
    }

    //https://stackoverflow.com/a/51844542
    //https://codesandbox.io/s/react-select-css-styling-chy20?from-embed=&file=/src/index.js
    const customStyles = {
      control: (base, state) => ({
        ...base,
        background: "black",
        borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
        borderColor: state.isFocused ? "purple" : "purple",
        boxShadow: state.isFocused ? null : null,
        "&:hover": {
          borderColor: state.isFocused ? "blue" : "blue"
        }
      }),
      menu: (base) => ({
        ...base,
        borderRadius: 0,
        marginTop: 0
      }),
      menuList: (base) => ({
        ...base,
        padding: 0
      }),
      option: (provided, state) => ({
          ...provided,
          fontWeight: state.isSelected ? "bold" : "normal",
          color: "white",
          backgroundColor: "black",
          fontSize: state.selectProps.myFontSize
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: "white",

          }),
    };

    return(
      <>
        <h1 className="w3-center">Add Appointment</h1>
        <div className="w3-row">
          <div className="w3-half w3-container">
            <form className="w3-container">
              <Select styles={customStyles} options={options} placeholder={'Select Customer'} />
            </form>
          <br />
          <DatePickerCalendar date={date} onDateChange={this.onDateChange} locale={enGB} modifiers={modifiers} />
          </div>
          <div className="w3-half w3-container">
            <div className="w3-cell w3-center" style={{width:"30%"}}>
                <input className="w3-check" type="checkbox" />
                <img className="w3-padding w3-center w3-round-large" src="Abdomen .jpeg" style={{width:"300px", height:"150px"}}></img>
            </div>
          </div>
          <div className="w3-half w3-container">
            <div className="w3-cell w3-center" style={{width:"30%"}}>
                <input className="w3-check" type="checkbox" />
                <label className="w3-text-blue"><b>Client</b></label>

                <img className="w3-padding w3-center w3-round-large" src="Arm.jpeg" style={{width:"300px", height:"150px"}}></img>
            </div>
          </div>
          <div className="w3-half w3-container">
            <div className="w3-cell w3-center" style={{width:"30%"}}>
                <input className="w3-check" type="checkbox" />
                <img className="w3-padding w3-center w3-round-large" src="chest.jpeg" style={{width:"300px", height:"150px"}}></img>
            </div>
          </div>
          <div className="w3-half w3-container">
            <div class="w3-display-container w3-text-white">
              <input className="w3-check" type="checkbox" />
              <img src="Leg.jpeg" alt="Lights" style={{width:"300px", height:"150px"}}></img>
              <div class="w3-display-left w3-container w3-padding"><p>Hola</p></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}




export default AddAppointment;
