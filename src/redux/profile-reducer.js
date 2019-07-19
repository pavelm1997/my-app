const ADD_POSTE = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';

let initialState = {
    newPostText: 'Введіть новий пост',
    postData: [
        {id: 1, message: 'Hi', like: '45'},
        {id: 2, message: 'It\'s my first post', like: '19'},
        {id: 3, message: 'It\'s my second post', like: '7'}
    ]
};


export const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case (ADD_POSTE): {
            let newpost = {
                id: 4,
                message: state.newPostText,
                like: '0'
            };
            return {
                ...state,
                postData: [...state.postData, newpost],
                newPostText: ''
            };
        }
        case (UPDATE_NEW_TEXT_POST): {
            return {
                ...state,
                newPostText: action.newText
            };

        }
        default:
            return state;
    }
    return state;
};

export const updateNewTextPostActionCreator = (text) => ({type: UPDATE_NEW_TEXT_POST, newText: text});

export const addPostActionCreator = () => ({type: ADD_POSTE});
export default profileReducer;