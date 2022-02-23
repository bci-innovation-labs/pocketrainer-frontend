import { React } from "react";


export default function ClientList(props) {
    return (
        <>
        <div className="w3-row">
           <div className="w3-third w3-container w3-indigo">
              <div className="w3-row">
                 <br />
                 <div className="w3-card-4 w3-round-xxlarge">
                    <header className="w3-container w3-indigo">
                      <div className="w3-col s2">
                        <img src="IconExample.png" style={{width:"100px"}}className="w3-centered w3-circle" />
                      </div>
                    </header>
                    <div className="w3-container">
                       <h3>John Doe</h3>
                       <p> xx kg</p>
                       <hr />
                       <p>Next Appoiment xx/xx/xx</p>
                    </div>
                 </div>
                 <br />
                 <div className="w3-card-4 w3-round-xxlarge">
                    <header className="w3-container w3-indigo">
                      <div className="w3-col s2">
                        <img src="IconExample.png" style={{width:"100px"}}className="w3-centered w3-circle" />
                      </div>
                    </header>
                    <div className="w3-container">
                       <h3>John Doe</h3>
                       <p> xx kg</p>
                       <hr />
                       <p>Next Appoiment xx/xx/xx</p>
                    </div>
                 </div>
                 <br />
              </div>
              <div className="w3-third w3-container">

              </div>
              <div className="w3-third w3-container">
              <p> example </p>
              </div>
           </div>
        </div>
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
