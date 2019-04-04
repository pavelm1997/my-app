import React from 'react';
import c from './nav.module.css';
let Navbar = () => {
    return ( <nav className = {c.nav}>
    <div className={c.item}>
        <a href='profile'> Profile</a>
    </div>
    <div className={c.item}>
        <a href='dialogs'> Messages</a>
    </div>
    <div className={c.item}>
        <a href='news'> News</a>
    </div>
    <div  className={c.item}>
        <a href='music'> Music</a>
    </div>
    <div className={c.item}>
        <a href='setting'> Setting</a>
    </div>
</nav>);};
export default Navbar;