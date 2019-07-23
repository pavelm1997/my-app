const ONFOLLOW = 'ONFOLLOW';
const FOLLOW = 'FOLLOW';
const SED_USERS ='SED-USERS';

let initialState = {
    users: [    ]
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

            return{...state, users:[ ...state.users, ...action.users]}
        }

        default:
            return state;
    }
    return state;
};

export const followAC = (userId) => ({type: FOLLOW, userId});

export const onfollowAC = (userId) => ({type: ONFOLLOW, userId});

export const setUsersAC = (users) => ({type: SED_USERS, users});

export default useresReducer;