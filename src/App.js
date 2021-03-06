import { React } from "react";
import "./w3.css";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import TopNavigation from "./Components/Misc/TopNavigation";
import Index from "./Components/Gateway/Index";
import Login from "./Components/Gateway/Login";
import ProcessingSetRole from "./Components/Gateway/ProcessingSetRole";
import ClientList from "./Components/Clients/ClientList";
import ClientProfile from "./Components/Clients/ClientProfile";
import EditClientProfile from "./Components/Clients/EditClientProfile";
import ClientDetails from "./Components/Clients/ClientDetails";
import Processing from "./Components/Gateway/Processing";
import Register from "./Components/Gateway/Register";
import NotFoundError from "./Components/Misc/NotFoundError";
import TrainerDashboard from "./Components/Dashboard/TrainerDashboard";
import ClientDashboard from "./Components/Dashboard/ClientDashboard";
import AppoimentDetails from "./Components/Appointments/Details";
import AddAppointment from "./Components/Appointments/Add";
import TrainerProfile from "./Components/Trainer/TrainerProfile";
import TrainerProfileEdit from "./Components/Trainer/TrainerProfileEditProfile";
import ClientAdd from "./Components/Clients/ClientAdd";
import ClientNotification from "./Components/Notifications/ClientNotification";
import TrainerNotification from "./Components/Notifications/TrainerNotification";





function App() {
    return (
        <>
            <Router>
                <div>
                    <TopNavigation />
                </div>
                <Routes>
                    <Route path="/add-client" element={<ClientAdd/>}/>
                    <Route path="/processing/set-role" element={<ProcessingSetRole/>}/>
                    <Route path="/processing" element={<Processing/>}/>
                    <Route path="/edit-profile" element={<EditClientProfile/>}/>
                    <Route path="/trainer-profile-edit" element={<TrainerProfileEdit/>}/>
                    <Route path="/client-notification" element={<ClientNotification/>}/>
                    <Route path="/trainer-notification" element={<TrainerNotification/>}/>
                    <Route path="/trainer-profile" element={<TrainerProfile/>}/>
                    <Route path="/add-appointment" element={<AddAppointment/>}/>
                    <Route path="/appoiment/:id" element={<AppoimentDetails/>}/>
                    <Route path="/client-profile" element={<ClientProfile/>}/>
                    <Route path="/client-details/:id" element={<ClientDetails/>}/>
                    <Route path="/clients" element={<ClientList/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/dashboard-client" element={<ClientDashboard/>}/>
                    <Route path="/dashboard-trainer" element={<TrainerDashboard/>}/>
                    <Route exact path="/" element={<Login/>}/>
                    <Route path="*" element={<NotFoundError/>}/>
                </Routes>
                <div>
                   {/* DEVELOPERS NOTE: Mobile tab-bar menu can go here */}
                </div>
            </Router>
        </>
    );
}

export default App;
