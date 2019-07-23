import React from 'react';
import Users from "./Users";
import {followAC, onfollowAC, setUsersAC} from "../../redux/users-reducer";
import {connect} from "react-redux";

debugger
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
