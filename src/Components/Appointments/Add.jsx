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
import { groupExerciseOptions, sessionExerciseOptions, chestMuscleExerciseOptions, armMuscleExerciseOptions, legMuscleExerciseOptions, abdominalMuscleExerciseOptions, timeOptions } from '../../Constants/Fields'


function addMinutes(dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
}


class AddAppointment extends Component{
  constructor(props){
    super(props)
    this.state = {
      specific_exercise_is_disabled: true,
      //date:new Date(localStorage.getItem("USER_PICKED_DATE")),
      date:new Date(),
      time: null,
      client_options : [
      { value: '1', label: 'Adam' },
      { value: '2', label: 'Jacob' },
      { value: '3', label: 'Ana' }
    ],
    };
    this.onSubmitClick = this.onSubmitClick.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
    this.onTimeChange = this.onTimeChange.bind(this)
  }

  onDateChange(pickedDate){
    console.log(pickedDate);
    this.setState({
      date:pickedDate
    })
    localStorage.setItem("USER_PICKED_DATE", pickedDate);
  }

  onTimeChange(e){
  console.log(e)
  this.setState({
    time: e,
    })
  }

  onSubmitClick(e){
    const { date, time } = this.state

    const dt = new Date(date.toDateString());

    const timeValue = time["value"]

    const minutes = 60 * timeValue;

    const newDate = addMinutes(dt, minutes);

       console.log("your date is:", newDate);

    }

    render(){
      const { client_options, specificExerciseOptions, reps, series, routines, specificExercise, groupExercise } = this.state
      console.log(routines)
      const { onDateChange } = this.state
      const { date, time, specific_exercise_is_disabled } = this.state
      //*new Date().setDate(new Date().getDate() - 1* === Yesterday Day

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
        <div class="w3-row">
          <div class="w3-col s2  w3-center">
            <p></p>
          </div>
          <div class="w3-col s8  w3-center">
            <h1 className="w3-center">Add Appointment</h1>
            <br />
            <h3 className="w3-padding">Client</h3>
            <form className="w3-container">
              <p><Select styles={customStyles} options={client_options} placeholder={'Select Customer'} /></p>
            </form>
            <br />
            <div>
              <h3 className="w3-padding">Time</h3>
              <p><Select styles={customStyles} options={timeOptions} placeholder={'Select Time'} className="w3-padding" value={time} onChange={this.onTimeChange} /></p>
            </div>
            <h3 className="w3-padding">Date</h3>
            <DatePickerCalendar date={date} onDateChange={this.onDateChange} locale={enGB} />
          </div>
          <div class="w3-col s2  w3-center">
            <p></p>
          </div>
        </div>
        </>
      )
    };
  }


export default AddAppointment;
