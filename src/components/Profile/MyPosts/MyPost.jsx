import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";

let MyPost = () => {
    return (<div>
        <div className={c.postBlock}>
            <h3 className={c.post}> my-posts</h3>
            <div>
                <div>
                    <textarea>This write your post....</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </div>
        <Post message="How are you" like="15"/>
        <Post message="It's my first post" like="19"/>
        <Post message="It's my second post" like="5"/>
    </div>);
};
export default MyPost;