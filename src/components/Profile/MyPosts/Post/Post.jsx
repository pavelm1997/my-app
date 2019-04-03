import React from 'react';
import c from './Post.module.css';
let Post = (props) => {
    return ( <div >
        <div className={c.item}>
            <img src='https://scientificrussia.ru/data/shared/top_10/10_faktov_sbornik/1351943349_11.jpg' className={c.item_img}/>
            {props.message}
            <div>
                <span>Like:{props.like}</span>
            </div>
        </div>
    </div>);};
export default Post;