import React from 'react';
import c from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
let Profile = () => {
    return ( <div className = {c.content}>
        <ProfileInfo/>
        <MyPost/>
    </div>);};
export default Profile;