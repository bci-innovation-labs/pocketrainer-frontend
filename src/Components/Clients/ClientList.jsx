import { React, useState, useEffect } from "react";
import { getClientTrainerRelationshipList } from "../../API/client_trainer_relationship";
import moment from 'moment';
import { Link } from "react-router-dom";




export default function ClientList(props) {
  const [relationships, setRelationships] =useState(JSON.parse(localStorage.getItem("relationships")))

  function onGetClientTrainerRelationshipSucces(response){
  console.log(response.data)
  setRelationships(response.data.results)
  }
  function onGetClientTrainerRelationshipError(err){

  }
  function onGetClientTrainerRelationshipDone(){

  }

  useEffect(() => {
   // This gets called after every render, by default
   // (the first one, and every one after that)
  setTimeout(() => {
    getClientTrainerRelationshipList(onGetClientTrainerRelationshipSucces, onGetClientTrainerRelationshipError, onGetClientTrainerRelationshipDone)
  }, 100)


   // If you want to implement componentWillUnmount,
   // return a function from here, and React will call
   // it prior to unmounting.
   return () => console.log('unmounting...');
 }, [])
 console.log(relationships)
    return (
        <>

        <div className="w3-row">
           <div className="w3-col s3 w3-container">
           </div>
           <div className="w3-col s6 w3-center w3-container">
              <h1><strong>Clients</strong></h1>
           </div>
           <div className="w3-col s3 w3-container">
              <Link to="/add-client" className="w3-btn w3-blue w3-round-xlarge w3-margin w3-right" style={{paddingTop:"15px"}}><i className="fa fa-plus" aria-hidden="true"></i> Add</Link>
           </div>
        </div>

        {relationships && relationships.map((relationship) => (
        <>
        <div className="w3-col m4">
        <div className="w3-row">
           <div className="w3-container w3-margin w3-padding w3-round-xxlarge" style={{background: "linear-gradient(45deg, rgba(2,0,36,1) 7%, rgba(72,64,136,0.9419117988992471) 95%)"}}>
           <div className="w3-center">
              <div className="w3-row">
                 <img src="IconExample.png" className="w3-circle w3-padding-top-64" style={{width:"40%"}}/>
              </div>
              <div className="w3-row w3-text-white">
                 <h4><Link to={`/client-details/${relationship.client}`}><strong>{relationship.client_name}</strong></Link></h4>
              </div>
              <div className="w3-row w3-text-grey">
                 <p><strong>Age : </strong>{relationship.client_age}</p>
              </div>
              <hr className="w3-grey" />
              <div className="w3-row w3-text-white">
                 <h4><strong>Next Appoiment</strong></h4>
              </div>
              <div className="w3-row w3-text-grey">
                 <p>{moment(relationship.appoiment_date).calendar()}</p>
              </div>
           </div>
        </div>
        </div>
        </div>

        </>
        ))}
        <div class="w3-center">
           <div class="w3-bar w3-border">
             <a href="#" class="w3-bar-item w3-button">&laquo;</a>
             <a href="#" class="w3-bar-item w3-button">1</a>
             <a href="#" class="w3-bar-item w3-button">2</a>
             <a href="#" class="w3-bar-item w3-button">3</a>
             <a href="#" class="w3-bar-item w3-button">4</a>
             <a href="#" class="w3-bar-item w3-button">&raquo;</a>
           </div>
        </div>
        </>
    );
}
