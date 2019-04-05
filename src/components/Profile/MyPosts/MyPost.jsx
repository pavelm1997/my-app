import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";

let MyPost = () => {
    let postData = [
        {id: 1, message: 'Hi', like: '45'},
        {id: 2, message: 'It\'s my first post', like: '19'},
        {id: 3, message: 'It\'s my second post', like: '7'},
    ];
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
        <Post message={postData[0].message} like={postData[0].like}/>
        <Post message={postData[1].message}  like={postData[1].like}/>
        <Post message={postData[2].message}  like={postData[2].like}/>
    </div>);
};
export default MyPost;