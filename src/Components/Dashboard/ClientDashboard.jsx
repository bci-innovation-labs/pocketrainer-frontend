import { React , useState, useEffect } from "react";
import { CircularProgressbar, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar, Calendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { isSameDay } from 'date-fns'
import { getProfileDetail } from "../../API/profile";
import { getAppoimentList } from "../../API/appoiments";
import moment from 'moment';



const percentage = 66;

export default function ClientDashboard(props){
    const [profile, setProfile] =useState(JSON.parse(localStorage.getItem("profile")))
    const [appoiments, setAppoiments] = useState([])
    const [selectedDates, setSelectedDates] = useState([])

    const modifiers = {
  selected: date => selectedDates.some(selectedDate => isSameDay(selectedDate, date))
}
    const handleDayClick = date => {
      setSelectedDates([...selectedDates, date])
    }



    function onGetAppoimentSucces(response){
      setAppoiments(response.data.results)
      var dates = []

      for (let x of response.data.results){
        console.log(x.date_time)
        // var y = moment(x.date_time).date()
        var y = new Date(x.date_time);
        dates.push(y)
      }
      console.log(y)

      setSelectedDates(dates)
     }

    function onGetAppoimentError(err){
     }
    function onGetAppoimentDone(){
     }

      useEffect(() => {
       // This gets called after every render, by default
       // (the first one, and every one after that)
      setTimeout(() => {
        getAppoimentList(onGetAppoimentSucces, onGetAppoimentError, onGetAppoimentDone)
      }, 100)


       // If you want to implement componentWillUnmount,
       // return a function from here, and React will call
       // it prior to unmounting.
       return () => console.log('unmounting...');
     }, [])

    function onGetProfileSucces(response){
       const profile = JSON.stringify(response.data)
       localStorage.setItem("profile", profile)
     }

    function onGetProfileError(err){
     }

    function onGetProfileDone(){
     }

     getProfileDetail(onGetProfileSucces, onGetProfileError, onGetProfileDone)
    return (
        <>
        <div className="w3-row">
           <div className="w3-col l7 w3-container w3-padding-32">
              <div className="w3-display-container w3-text-white ">
                 <img src="DashboardImg1.png" className="w3-round-xxlarge" style={{width:"100%"}}/>
                 <div className="w3-padding w3-display-topleft">
                    <p>Welcome back</p>
                    <p><span className="w3-xxlarge"><strong>{profile.name}</strong></span></p>
                    <p>Glad to see you again</p>
                    <p>Ask me anything</p>
                 </div>
              </div>
           </div>
           <div className="w3-col l5">
              <div className="w3-round-xxlarge w3-container w3-padding-32" style={{marginTop:"32px", marginRight:"16px", marginLeft:"16px",background: "linear-gradient(45deg, rgba(2,0,36,1) 7%, rgba(72,64,136,0.9419117988992471) 95%)"}}>
              <div className="w3-row">
                 <div className="w3-col s9">
                    <span className="w3-xxlarge"><strong>Trainer Tracking</strong></span>
                 </div>
                 <div className="w3-col s3 w3-center">
                    <button style={{marginTop:"8px"}} className="w3-button w3-indigo w3-circle"><strong><i className="fa fa-ellipsis-h" aria-hidden="true"></i></strong></button>
                 </div>
              </div>
              <div className="w3-row">
                 <div className="w3-col m6">
                    <div className="w3-margin w3-center w3-round-xxlarge w3-padding">
                       <p className="w3-xxlarge">Sessions</p>
                       <p className="w3-xxlarge">123</p>
                    </div>
                 </div>
                 <div className="w3-col m6 w3-padding w3-center">
                    <CircularProgressbarWithChildren value={72}>
                       {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                       <div style={{ fontSize: 12, marginTop: -5 }}>
                       <h3>Main goal</h3>
                       <span className="w3-xxlarge"><strong>72%</strong></span>
                       <p>Total Score</p>
                 </div>
                 </CircularProgressbarWithChildren>
                 <br /> <br />
              </div>
           </div>
        </div>
        </div>
        </div>
        <div className="w3-row">
          <div className="w3-col l7 w3-padding">
            <h1 className="w3-padding w3-margin-left">Upcoming appointment</h1>
            {/* ROW 1 */}
          {appoiments.map((appoiment) => (
            <div ClassName="w3-row w3-margin-left">
               <div className="w3-col l4 w3-center">
                 <div className="w3-hide-large">
                    <p>{moment(appoiment.date_time).format('LT')}</p>
                    <p>{moment(appoiment.date_time).format('ll')}</p>
                 </div>
                 <div className="w3-hide-small w3-hide-medium">
                 <p>{moment(appoiment.date_time).format('LLL')}</p>
                 </div>
               </div>
               <div className="w3-col l6">
                  <div className="w3-container w3-round-xxlarge" style={{backgroundColor:"#E9EAF4"}}>
                     <div className="w3-col s4 w3-margin-top">
                        <img src="IconExample.png" className="w3-image w3-circle" style={{width:"50%"}}/>
                     </div>
                     <div className="w3-col s6 w3-text-indigo w3-margin-top">
                        <span className="w3-large w3-text-indigo w3-margin-left"><strong>{appoiment.ex_plan}</strong></span>
                        <p>Trainer : {appoiment.trainer_name}</p>
                     </div>
                     <div className="w3-col s2 w3-text-indigo w3-margin-top">
                        <p>{appoiment.location}</p>
                     </div>
                  </div>
               </div>
               <div className="w3-col l2">
               </div>
            </div>
            ))}
            {/* end ROW1 */}
          <br />
           </div>
           <div className="w3-col l5 w3-padding">
             <Calendar onDayClick={handleDayClick} modifiers={modifiers} locale={enGB} />
           </div>
        </div>
        <div className="w3-margin-bottom">
        </div>
        </>
    );
}
