import React from 'react';
import c from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
let Profile = () => {
    return ( <div className = {c.content}>
        <img src = 'https://millionmilesecrets.com/wp-content/uploads/denali-national-park-1733313_1280.jpg'/>
        <div className={c.item}>
            ava+description
        </div>
        <MyPost/>
    </div>);};
export default Profile;