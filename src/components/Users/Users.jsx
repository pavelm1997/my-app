import React from 'react';
import styles from './users.module.css'

let Users = (props) => {
    if(props.users.length ===0){
    props.setUsers(
        [
        {
            id: 1,
            urlImage: 'https://st.depositphotos.com/1001951/3657/i/950/depositphotos_36578821-stock-photo-deer-with-beautiful-big-horns.jpg',
            follower: false,
            fullName: 'Pavlo',
            status: 'It`s beautiful!!!',
            location: {country: 'Ukraine', city: 'Vinnitsa'}
        },
        {
            id: 2,
            urlImage: 'https://ua-reporter.com/sites/default/files/styles/640x420/public/pictures/4123-.jpg?itok=mssYGeTP',
            follower: true,
            fullName: 'Ivan',
            status: 'It`s good!!!',
            location: {country: 'Ukraine', city: 'Kiev'}
        },
        {
            id: 3,
            urlImage: 'https://img3.badfon.ru/wallpaper/big/f/8b/risunok-kartina-nebo-olen.jpg',
            follower: false,
            fullName: 'Eugen',
            status: 'It`s fine!!!',
            location: {country: 'Ukraine', city: 'Odessa'}
        }
    ]
    )
}
    return (
        <div>
            {
                props.users.map(u => <div>
                    <span>
                        <div>
                            <img src={u.urlImage} className={styles.photo}/>
                        </div>
                        {u.follower ? <button onClick={() => {
                            props.onfollow(u.id)
                        }}>unfollow</button> : <button onClick={() => {
                            props.follow(u.id)
                        }}>follow</button>}
                    </span>
                    <span>
                        <span><div>{u.fullName}</div>
                            <div>{u.status}</div></span>
                        <span><div>{u.location.country}</div>
                            <div>{u.location.city}</div></span>
                    </span>
                </div>)

            }

        </div>
    );
};

export default Users;

