import React from 'react';
import c from './App.module.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/nav.jsx";
import Profile from "./components/Profile/Profile.jsx";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import DialogContainer from "./components/Dialogs/DialogsContainer";
import UsersConteiner from "./components/Users/UsersConteiner";

const App = (props) => {

    return (

            <div className={c.app_wriper}>
                <Header/>
                <Navbar/>
                <div className={c.app_wriper_content}>
                    <Route path = '/profile' render= {() => <Profile />}/>
                    <Route path = '/dialogs' render= {() => <DialogContainer />}/>
                    <Route path = '/users' render={()=><UsersConteiner/>}/>
                    <Route path = '/music' component={Music}/>
                    <Route path = '/news' component={News}/>
                    <Route path = '/setting' component={Setting}/>
                </div>
            </div>
    );

};
export default App;
