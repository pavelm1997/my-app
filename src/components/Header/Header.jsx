import React from 'react';
import c from './Header.module.css';
const Header = () => {
    return <header className= {c.header}>
        <img className={c.img} src='https://upload.wikimedia.org/wikipedia/commons/9/9b/Logo_F%C3%A9d%C3%A9ration_Ukraine_Football_2016.svg' />
    </header>
};

export default Header;