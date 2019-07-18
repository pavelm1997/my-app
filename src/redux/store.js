import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

let store ={
_renderEntierTree() {
  console.log('change');
},

    _state : {
    profilePage:{
        newPostText:'Введіть новий пост',
        postData:[
            {id: 1, message: 'Hi', like: '45'},
            {id: 2, message: 'It\'s my first post', like: '19'},
            {id: 3, message: 'It\'s my second post', like: '7'},
        ],

    },
   messagePage:{
        newMessemgeText:'Введіть повідомлення!!!',
        dialogDat:[
       {id: 1, name: 'Vasiliy'},
       {id: 2, name: 'Pavlo'},
       {id: 3, name: 'Petrovich'},
       {id: 4, name: 'Eugen'},
       {id: 5, name: 'I'},
       {id: 6, name: 'Shura'},
       {id: 7, name: 'Mikola'}
   ],
       massageData:[
       {id: 1, message: 'Hi'},
       {id: 2, message: 'I'},
       {id: 3, message: 'I go to the school'},
       {id: 4, message: 'Yo'},
       {id: 5, message: 'Yo'},
       {id: 6, message: 'Yo'},
       {id: 7, message: 'Yo'}
   ]},
        sidebar:{}

},
    getState(){
    return this._state;
    },
    subscreib (observer) {
        this._renderEntierTree = observer;
    },

    dispatch(action) {

        profileReducer(this._state.profilePage,action);
        dialogReducer(this._state.messagePage,action);
        sidebarReducer(this._state.sidebar,action);

        this._renderEntierTree(this._state);

    }
};

window.store = store;
export default store;