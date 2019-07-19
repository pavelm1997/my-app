const UPDATE_NEW_MESSENGE = 'UPDATE-NEW-MESSENGE';
const ADD_MESSENGE = 'ADD-MESSENGE';

let initialState = {
    newMessemgeText: 'Введіть повідомлення!!!',
    dialogDat: [
        {id: 1, name: 'Vasiliy'},
        {id: 2, name: 'Pavlo'},
        {id: 3, name: 'Petrovich'},
        {id: 4, name: 'Eugen'},
        {id: 5, name: 'I'},
        {id: 6, name: 'Shura'},
        {id: 7, name: 'Mikola'}
    ],
    massageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'I'},
        {id: 3, message: 'I go to the school'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
        {id: 7, message: 'Yo'}
    ]
};

const dialogReducer = (state = initialState, action) => {


    switch (action.type) {
        case (ADD_MESSENGE): {
            let newMessenge = {
                id: 1, message: state.newMessemgeText
            };
            return{
                ...state,
                massageData: [...state.massageData, newMessenge],
                newMessemgeText: ''
            };

        }
        case(UPDATE_NEW_MESSENGE): {
            return {
                ...state,
                newMessemgeText: action.newText
            };

        }


        default:
            return state;
    }


    return state;
};

export const addMessengeActionCreator = () => ({type: ADD_MESSENGE});

export const uppdateNewMessengeActionCreator = (text) => ({type: UPDATE_NEW_MESSENGE, newText: text});
export default dialogReducer;

