import React from 'react';
import {addPostActionCreator, updateNewTextPostActionCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


let mapStateToProps =(state)=>{
    return{
        posts:state.profilePage.postData,
    newPost:state.profilePage.newPostText
    }
};

let mapDispatchToProps =(dispatch)=>{
    return {
        updateNewTextPost:(text)=>{dispatch(updateNewTextPostActionCreator(text));},
        addPost:()=>{dispatch(addPostActionCreator());}
    }
};

const MyPostConteiner = connect(mapStateToProps,mapDispatchToProps)(MyPost);

export default MyPostConteiner;