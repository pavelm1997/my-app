import React from 'react';

import {addPostActionCreator, updateNewTextPostActionCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";

let MyPostConteiner = (props) => {

    return (
        <StoreContext.Consumer>{
            (store) =>{

                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };
                    let onPostChange = (text) => {
                        store.dispatch(updateNewTextPostActionCreator(text));
                    };
          return    (
              <MyPost updateNewTextPost={onPostChange} addPost={addPost} posts={state.profilePage.postData}
                    newPost={state.profilePage.newPostText}/>)
            }
        }
        </StoreContext.Consumer>);
};

export default MyPostConteiner;