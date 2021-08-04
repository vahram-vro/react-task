import './App.css';
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Home from "./components/home/Home";
import {BrowserRouter, Switch} from 'react-router-dom';
import PublicRoute from "./routers/PublicRoute";
import PrivateRoute from "./routers/PrivateRoute";
import RegistrationFirstStep from "./components/registration/RegistrationFirstStep";
import PersonalData from "./components/personalData/PersonalData";
import Suggestion from "./components/suggestion/Suggestion";
import SuggestionEdit from "./components/suggestionEdit/SuggestionEdit";
import PersonalDataEdit from "./components/personalDataEdit/PersonalDataEdit";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute restricted={false} component={Home} path="/" exact/>
                <PublicRoute restricted={false} component={Home} path="/home" exact/>
                <PublicRoute restricted={false} component={Login} path="/login" exact/>
                <PublicRoute restricted={false} component={RegistrationFirstStep} path="/registration_step_1" exact/>
                <PublicRoute restricted={false} component={PersonalData} path="/registration_step_2" exact/>
                <PublicRoute restricted={false} component={Suggestion} path="/registration_step_3" exact/>
                <PrivateRoute component={Profile} path="/profile" exact/>
                <PrivateRoute component={SuggestionEdit} path="/suggestion_edit" exact/>
                <PrivateRoute component={PersonalDataEdit} path="/personal_data_edit" exact/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
