import { getClientTrainerRelationshipList } from "../../API/client_trainer_relationship";
import { React, Component } from "react";
import {
  Link,
  Navigate
} from "react-router-dom";
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { getDay } from 'date-fns'
import Select from 'react-select'
import { groupExerciseOptions, sessionExerciseOptions, chestMuscleExerciseOptions, armMuscleExerciseOptions, legMuscleExerciseOptions, abdominalMuscleExerciseOptions, timeOptions } from '../../Constants/Fields'
import { postAppoiment } from "../../API/appoiments"


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
      clientOptions : [],
      forceURL: "",
      client : 0,
    };
    this.onSubmitClick = this.onSubmitClick.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
    this.onTimeChange = this.onTimeChange.bind(this)
    this.onGetClientTrainerRelationshipSucces = this.onGetClientTrainerRelationshipSucces.bind(this)
    this.onGetClientTrainerRelationshipError = this.onGetClientTrainerRelationshipError.bind(this)
    this.onGetClientTrainerRelationshipDone = this.onGetClientTrainerRelationshipDone.bind(this)
    this.onPostAppoimentSucces = this.onPostAppoimentSucces.bind(this)
    this.onPostAppoimentError = this.onPostAppoimentError.bind(this)
    this.onPostAppoimentDone = this.onPostAppoimentDone.bind(this)
    this.onClientChange = this.onClientChange.bind(this)
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

  onGetClientTrainerRelationshipSucces(response){
  console.log(response.data)
  let arr = []
    for (let i = 0; i < response.data.results.length; i++){
      let client = response.data.results[i];
      console.log(client)
      let clientOption = {
        value: client.client,
        label: client.client_name
      }
      arr.push (clientOption)
    }
    console.log(arr)
    this.setState({
      clientOptions: arr
    })
  }

  onGetClientTrainerRelationshipError(err){

  }

  onGetClientTrainerRelationshipDone(){

  }

  componentDidMount(){
    getClientTrainerRelationshipList(this.onGetClientTrainerRelationshipSucces, this.onGetClientTrainerRelationshipError, this.onGetClientTrainerRelationshipDone)
  }

  onPostAppoimentSucces(response){
    this.setState({
      forceURL:"/dashboard-trainer", //TODO Redirect based on the profile role
    })
  }

  onPostAppoimentError(err){

  }

  onPostAppoimentDone(){

  }

  onClientChange(e){
    console.log(e)
    this.setState({
      client: e.value
    })
  }

  onSubmitClick(e){
    const { date, time, client } = this.state

    const dt = new Date(date.toDateString());

    const timeValue = time["value"]

    const minutes = 60 * timeValue;

    const newDate = addMinutes(dt, minutes);

       console.log("your date is:", newDate);

    const trainerString = localStorage.getItem("profile")
    const trainerObj = JSON.parse(trainerString)

    const data = {
      client: client,
      trainer: parseInt(trainerObj.id),
      date_time: newDate.toISOString(),
      exercise_plan: "testing",
      status: 1,
    }

    postAppoiment(data,this.onPostAppoimentSucces,this.onPostAppoimentError,this.onPostAppoimentDone)

    }

    render(){
      const { clientOptions, specificExerciseOptions, reps, series, routines, specificExercise, groupExercise } = this.state
      const { onDateChange, forceURL } = this.state
      const { date, time, specific_exercise_is_disabled } = this.state
      if (forceURL !==""){
        return <Navigate to={forceURL} />
      }
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
      console.log(clientOptions)
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
              <p><Select styles={customStyles} options={clientOptions} onChange={this.onClientChange} placeholder={'Select Customer'} /></p>
            </form>
            <br />
            <div>
              <h3 className="w3-padding">Time</h3>
              <p><Select styles={customStyles} options={timeOptions} placeholder={'Select Time'} className="w3-padding" value={time} onChange={this.onTimeChange} /></p>
            </div>
            <h3 className="w3-padding">Date</h3>
            <DatePickerCalendar date={date} onDateChange={this.onDateChange} locale={enGB} />
            <br />
            <div>
              <button type="button" onClick={this.onSubmitClick} className="w3-button w3-green w3-left">Accept</button>
              <Link to="/dashboard-trainer" className="w3-button w3-red w3-right">Decline</Link>
            </div>
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
