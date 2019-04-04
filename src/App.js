import React from 'react';
import c from './App.module.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/nav.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialog from "./components/Dialogs/Dialogs";

const App = () => {

    return (
        <div className={c.app_wriper}>
            <Header/>
            <Navbar/>
            <div className={c.app_wriper_content}>

                <Dialog/>
            </div>
            {/*<Profile/>*/}
        </div>

    );

};
export default App;
