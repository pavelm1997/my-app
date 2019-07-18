import React from 'react';
import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostConteiner from "./MyPosts/MyPostContainer";

let Profile = (props) => {

    return ( <div className = {c.content}>
        <ProfileInfo/>
        <MyPostConteiner store={props.store}/>

    </div>);};
export default Profile;