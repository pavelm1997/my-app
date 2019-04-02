import React from 'react';
import c from './Profile.module.css';
let Profile = () => {
    return ( <div className = {c.content}>
        <img src = 'https://millionmilesecrets.com/wp-content/uploads/denali-national-park-1733313_1280.jpg'/>
        <div className={c.item}>
            ava+description
        </div>
        <div className={c.item}>
            my-post
        </div>
        <div className={c.item}>
            New post
        </div>
        <div className={c.item}>
            1post
        </div>
        <div className={c.item}>
            2post
        </div>
        <div className={c.item}>
            3post
        </div>
    </div>);};
export default Profile;