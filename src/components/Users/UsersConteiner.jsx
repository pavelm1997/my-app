import React from 'react';
import Users from "./Users";
import {followAC, onfollowAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC} from "../../redux/users-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));

        },
        onfollow: (userId) => {
            dispatch(onfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount:(totalCount)=>{
            dispatch(setTotalUserCountAC (totalCount))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
