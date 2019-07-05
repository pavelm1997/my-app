import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";

let MyPost = () => {
    let postData = [
        {id: 1, message: 'Hi', like: '45'},
        {id: 2, message: 'It\'s my first post', like: '19'},
        {id: 3, message: 'It\'s my second post', like: '7'},
    ];
    let postelement = postData.map(post => <Post message={post.message} like={post.like}/>);
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
        {postelement}
    </div>);
};
export default MyPost;