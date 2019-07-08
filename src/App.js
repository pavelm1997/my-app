import React from 'react';
import c from './App.module.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/nav.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialog from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className={c.app_wriper}>
                <Header/>
                <Navbar/>
                <div className={c.app_wriper_content}>
                    <Route path = '/profile' render= {() => <Profile profilePost = {props.appState.profilePage.postData}/>}/>
                    <Route path = '/dialogs' render= {() => <Dialog dialogpost = {props.appState.messagePage.dialogDat} massege = {props.appState.messagePage.massageData}/>}/>
                    <Route path = '/music' component={Music}/>
                    <Route path = '/news' component={News}/>
                    <Route path = '/setting' component={Setting}/>
                </div>
            </div>
        </BrowserRouter>
    );

};
export default App;
