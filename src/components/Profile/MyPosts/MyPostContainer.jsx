import React from 'react';

import {addPostActionCreator, updateNewTextPostActionCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";

let MyPostConteiner = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let onPostChange = (text) => {
        props.store.dispatch(updateNewTextPostActionCreator(text));
    };
    return (<MyPost updateNewTextPost={onPostChange} addPost={addPost} posts={state.profilePage.postData}
                    newPost={state.profilePage.newPostText}/>);

};

export default MyPostConteiner;