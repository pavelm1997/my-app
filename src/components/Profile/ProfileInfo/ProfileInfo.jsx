import React from 'react';
import c from './ProfileInfo.module.css';
let ProfileInfo = () => {
    return ( <div className = {c.content}>
        <img src = 'https://millionmilesecrets.com/wp-content/uploads/denali-national-park-1733313_1280.jpg'/>
        <div className={c.item}>
            ava+description
        </div>

    </div>);};
export default ProfileInfo;