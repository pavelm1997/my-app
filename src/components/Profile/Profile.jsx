import React from 'react';
import c from './Profile.module.css';
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let Profile = (props) => {

    return ( <div className = {c.content}>
        <ProfileInfo/>
        <MyPost meyDate = {props.profilePage.postData} newPost = {props.profilePage.newPostText} dispatch={props.dispatch}/>

    </div>);};
export default Profile;