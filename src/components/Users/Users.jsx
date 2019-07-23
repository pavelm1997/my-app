import React from 'react';
import styles from './users.module.css'
import *as axios from 'axios'
import userPhoto from '../../assets/images/user.jpg'

let Users = (props) => {

    let getUser = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
                response => {
                    props.setUsers(response.data.items)

                }
            );
        }
    };

    return (
        <div>
            <button onClick={getUser}>Get User</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={ u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo}/>
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

