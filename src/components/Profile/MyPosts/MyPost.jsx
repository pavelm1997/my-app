import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
let MyPost = () => {
    return ( <div >
        <div className={c.item}>
            my-post
            <div>
            <textarea>This write your post....</textarea>
            <button>Add post</button>
            </div>
        </div>
      <Post/>
    </div>);};
export default MyPost;