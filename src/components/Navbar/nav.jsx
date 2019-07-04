import React from 'react';
import c from './nav.module.css';
import {NavLink} from "react-router-dom";
let Navbar = () => {
    return ( <nav className = {c.nav}>
    <div >
        <NavLink to='/profile' className={c.myButton}> Profile</NavLink>
    </div>
    <div >
        <NavLink to='/dialogs' className={c.myButton}> Messages</NavLink>
    </div>
    <div>
        <NavLink to='/news' className={c.myButton}> News</NavLink>
    </div>
    <div  >
        <NavLink to='/music' className={c.myButton}> Music</NavLink>
    </div>
    <div >
        <NavLink to='/setting' className={c.myButton}> Setting</NavLink>
    </div>
</nav>);};
export default Navbar;