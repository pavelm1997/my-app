import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/nav";
import Profile from "./components/Profile";
const App = () => {

    return (
        <div className = 'app-wriper'>
             <Header/>
            <Navbar/>
            <Profile/>
        </div>

    );

};
export default App;
