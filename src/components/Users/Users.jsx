import React from 'react';
import styles from './users.module.css'
import *as axios from 'axios'
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);

            })
    }

onPageChanget =(pageNamber)=>{
    this.props.setCurrentPage(pageNamber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pageSize}`).then(
        response => {
            this.props.setUsers(response.data.items)

        })

}

    render() {
        let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let page = [];
        for(let i=1;i<=pageCount;i++){
            page.push(i);
        }
        return (
            <div>
                <div>
                    {page.map(p =>{
                       return <span className={this.props.currentPage === p && styles.selectePage} onClick={(e)=>{this.onPageChanget(p)}}> {p}</span>
                    })}


                </div>
                {
                    this.props.users.map(u => <div >
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo}/>
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

