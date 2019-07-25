import React from 'react';
import styles from './users.module.css'
import *as axios from 'axios'
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component{
       getUser = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
                response => {
                    this.props.setUsers(response.data.items)

                }
            );
        }
    };

    render() {
        return (
            <div>
                <button onClick={this.getUser}>Get User</button>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={ u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo}/>
                        </div>
                        {u.follower ? <button onClick={() => {
                            this.props.onfollow(u.id)
                        }}>unfollow</button> : <button onClick={() => {
                            this.props.follow(u.id)
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
    }
}

export default Users;

