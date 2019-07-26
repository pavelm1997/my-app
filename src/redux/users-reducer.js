const ONFOLLOW = 'ONFOLLOW';
const FOLLOW = 'FOLLOW';
const SED_USERS ='SED-USERS';
const SED_CURRENT_PAGE='SED_CURRENT_PAGE';
const SED_TOTAL_COUNT = 'SED_TOTAL_COUNT';

let initialState = {
    users: [    ],
    pageSize:5,
    totalUserCount:1,
    currentPage:1
};


export const useresReducer = (state = initialState, action) => {


    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, follower: true}
                    }
                    return u;
                })
            };
        case ONFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, follower: false}
                    }
                    return u;
                })
            };
        case SED_USERS:{
            return{...state, users:action.users}
        }
        case SED_CURRENT_PAGE:{

            return{...state, currentPage: action.currentPage}

        }
        case SED_TOTAL_COUNT:{
            return{...state, totalUserCount: action.count}
        }
        default:
            return state;
    }
    return state;
};

export const followAC = (userId) => ({type: FOLLOW, userId});

export const onfollowAC = (userId) => ({type: ONFOLLOW, userId});

export const setUsersAC = (users) => ({type: SED_USERS, users});

export const setCurrentPageAC = (currentPage) => ({type: SED_CURRENT_PAGE, currentPage});

export const setTotalUserCountAC = (totalUserCount) => ({type: SED_TOTAL_COUNT, count: totalUserCount});

export default useresReducer;