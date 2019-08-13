import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let page = [];
    for (let i = 1; i <= pageCount; i++) {
        page.push(i);
    }
    return (
        <div>
            <div>
                {page.map(p => {
                    return <span className={props.currentPage === p && styles.selectePage} onClick={(e) => {
                        props.onPageChanget(p)
                    }}> {p}</span>
                })}


            </div>
            {
                props.users.map(u => <div>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo}/>
                        </div>
                        {u.follower ? <button onClick={() => {
                            props.onfollow(u.id)
                        }}>unfollow</button> : <button onClick={() => {
                            props.follow(u.id)
                        }}>follow</button>}
                    </span>
                    <span>
                        <span><div>{u.name}</div>
                            <div>{u.status}</div></span>
                        <span><div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div></span>
                    </span>
                </div>)

            }

        </div>
    );
};
export default Users;