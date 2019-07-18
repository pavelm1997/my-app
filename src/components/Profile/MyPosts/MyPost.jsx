import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewTextPostActionCreator} from "../../../redux/profile-reducer";

let MyPost = (props) => {

    let newPostCreate = React.createRef();
let addPost = ()=>{
    props.dispatch (addPostActionCreator());
};
let onPostChange = ()=>{
    let text = newPostCreate.current.value;
    props.dispatch (updateNewTextPostActionCreator(text));
};
    let postelement = props.meyDate.map(post => <Post message={post.message} like={post.like}/>);
    return (<div>
        <div className={c.postBlock}>
            <h3 className={c.post}> my-posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostCreate} value={props.newPost}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
        </div>
        {postelement}
    </div>);
};
export default MyPost;