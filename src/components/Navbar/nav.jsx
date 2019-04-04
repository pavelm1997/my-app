import React from 'react';
import c from './nav.module.css';
import {NavLink} from "react-router-dom";
let Navbar = () => {
    return ( <nav className = {c.nav}>
    <div className={c.item}>
        <NavLink to='/profile' activeClassName={c.active}> Profile</NavLink>
    </div>
    <div className={c.item}>
        <NavLink to='/dialogs' activeClassName={c.active}> Messages</NavLink>
    </div>
    <div className={c.item}>
        <NavLink to='/news' activeClassName={c.active}> News</NavLink>
    </div>
    <div  className={c.item}>
        <NavLink to='/music' activeClassName={c.active}> Music</NavLink>
    </div>
    <div className={c.item}>
        <NavLink to='/setting' activeClassName={c.active}> Setting</NavLink>
    </div>
</nav>);};
export default Navbar;