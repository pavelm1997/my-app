import React from 'react';
import c from './App.module.css';
import Header from "./components/Header";
import Navbar from "./components/nav";
import Profile from "./components/Profile";
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
