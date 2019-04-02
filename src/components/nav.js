import React from 'react';
import c from './nav.module.css';
let Navbar = () => {
    return ( <nav className = {c.nav}>
    <div className={c.item}>
        <a> Profile</a>
    </div>
    <div className={c.item}>
        <a> Messages</a>
    </div>
    <div className={c.item}>
        <a> News</a>
    </div>
    <div  className={c.item}>
        <a> Music</a>
    </div>
    <div className={c.item}>
        <a> Setting</a>
    </div>
</nav>);};
export default Navbar;