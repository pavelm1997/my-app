import React from 'react';
import c from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/nav";
import Profile from "./components/Profile/Profile";
const App = () => {

    return (
        <div className = {c.app_wriper}>
             <Header/>
            <Navbar/>
            <Profile/>
        </div>

    );

};
export default App;
