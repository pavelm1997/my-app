import React from 'react';
import c from './MyPosts.module.css';
let MyPost = () => {
    return ( <div >
        <div className={c.item}>
            my-post
        </div>
        <div className={c.item}>
            New post
        </div>
        <div className={c.item}>
            1post
        </div>
        <div className={c.item}>
            2post
        </div>
        <div className={c.item}>
            3post
        </div>
    </div>);};
export default MyPost;