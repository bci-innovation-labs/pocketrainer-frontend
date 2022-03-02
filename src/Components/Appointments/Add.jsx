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
import { groupExerciseOptions, chestMuscleExerciseOptions, armMuscleExerciseOptions, legMuscleExerciseOptions, abdominalMuscleExerciseOptions } from '../../Constants/Fields'



class AddAppointment extends Component{
  constructor(props){
    super(props)
    this.state = {
      specific_exercise_is_disabled: true,
      date:new Date(localStorage.getItem("USER_PICKED_DATE")),
      client_options : [
      { value: '1', label: 'Adam' },
      { value: '2', label: 'Jacob' },
      { value: '3', label: 'Ana' }
    ],
      specificExerciseOptions : [],
      reps : "",
      series : "",
      routines : [
        {
          groupExercise : { value: 'chest_muscle', label: 'Chest Muscle' },
          specificExercise : { value: 'a', label: 'A' },
          reps : 50,
          series : 4,

        }
      ]
    };
    this.onDateChange = this.onDateChange.bind(this)
    this.onGroupExerciseChange = this.onGroupExerciseChange.bind(this)
    this.onRepsChange = this.onRepsChange.bind(this)
    this.onSeriesChange = this.onSeriesChange.bind(this)
  }

  onDateChange(pickedDate){
    console.log(pickedDate);
    this.setState({
      date:pickedDate
    })
    localStorage.setItem("USER_PICKED_DATE", pickedDate);
  }

  onGroupExerciseChange(e){
    console.log(e)
    let specificExerciseOptions;
    if (e.value === "chest_muscle") {
      specificExerciseOptions = chestMuscleExerciseOptions
    }
    else if (e.value === "arm_muscle") {
      specificExerciseOptions = armMuscleExerciseOptions
    }
    else if (e.value === "leg_muscle") {
      specificExerciseOptions = legMuscleExerciseOptions
    }
    else if (e.value === "abdonimal_muscle") {
      specificExerciseOptions = abdominalMuscleExerciseOptions
    }
    this.setState({
      groupExercise:e,
      specificExerciseOptions : specificExerciseOptions,
      specific_exercise_is_disabled: false,
    })
  }

  onRepsChange(e){
    const value = e.target.value;
    this.setState({
      reps:value
    })
  }

  onSeriesChange(e){
    const value = e.target.value;
    this.setState({
      series:value
    })
  }

  render(){
    const { client_options, specificExerciseOptions, reps, series, routines } = this.state
    console.log(routines)
    const { onDateChange } = this.state
    const { date, specific_exercise_is_disabled } = this.state
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
           <div className="w3-col l6">
            <h3 className="w3-padding">Client</h3>
            <form className="w3-container">
              <p><Select styles={customStyles} options={client_options} placeholder={'Select Customer'} /></p>
            </form>
          <br />
          <DatePickerCalendar date={date} onDateChange={this.onDateChange} locale={enGB} modifiers={modifiers} />
          </div>
          <div className="w3-col l6">
            <h3 className="w3-padding">Exercise Plan</h3>
            {/* start form */}
            <form className="w3-container">
              <p><Select styles={customStyles} options={groupExerciseOptions} placeholder={'Group Exercise'} onChange={this.onGroupExerciseChange} /></p>
              <p><Select styles={customStyles} options={specificExerciseOptions} placeholder={'Specific Exercise'} isDisabled={specific_exercise_is_disabled} /></p>
              <p>
                  <input className="w3-input w3-border w3-black w3-border-purple w3-round" name="first" type="text" placeholder="Reps" onChange={this.onRepsChange} value={reps} /></p>
                  <p>
                  <input className="w3-input w3-border w3-black w3-border-purple w3-round" name="last" type="text" placeholder="Series" onChange={this.onSeriesChange} value={series} /></p>
              <p><button className="w3-button w3-block w3-white w3-round-large w3-text-purple"> <b><i className="fa fa-plus"></i> Add</b></button></p>
            </form>
            {/* end form */}
          {/* begin table */}
          <div className="w3-padding">
          <h3 className="w3-padding">Routine</h3>
          <table className="w3-table w3-black w3-border w3-border-purple w3-centered">
            <tr>
              <th style={{width:"30%"}}>Group Exercise</th>
              <th>Specific Exercise</th>
              <th>Reps</th>
              <th>Series</th>
            </tr>
            {routines.map((item,key)=>
               (
                <tr key={key}>
                <td>{item.groupExercise.label}</td>
                <td>{item.specificExercise.label}</td>
                <td>{item.reps}</td>
                <td>{item.series}</td>
              </tr>

              ))}
            <tr>
              <td>Arm</td>
              <td>Push Up</td>
              <td>50</td>
              <td>4</td>
            </tr>
          </table>
          </div>
          {/* end table */}
          </div>
          <br/>
          <div className="w3-padding w3-right">
            <button class="w3-button w3-purple w3-round w3-large">Submit</button>
          </div>
        </div>
      </>
    )
  }
}




export default AddAppointment;
