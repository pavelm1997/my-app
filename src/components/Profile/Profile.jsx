import React from 'react';
import c from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let Profile = (props) => {
    return ( <div className = {c.content}>
        <ProfileInfo/>
        <MyPost meyDate = {props.profilePost}/>

    </div>);};
export default Profile;