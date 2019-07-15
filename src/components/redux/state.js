let renderEntierTree = () => {
  console.log('change');
};

let state = {
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
   ]}

};

window.state = state;


export const addPost = () => {
    let newpost = {
        id: 4,
        message: state.profilePage.newPostText,
        like: '0'
    };
    state.profilePage.postData.push(newpost);
    state.profilePage.newPostText ='';
    renderEntierTree(state);
};


export const updateNewTextPost = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntierTree(state);
};

export const addMessenge = () => {
    let newMessenge = {
        id: 1, message: state.messagePage.newMessemgeText
    };
    state.messagePage.massageData.push(newMessenge);
    state.messagePage.newMessemgeText ='';
    renderEntierTree(state);
};


export const updateNewMessenge = (newText)=>{
    state.messagePage.newMessemgeText = newText;
    renderEntierTree(state);
};


export const subscreib = (observer) => {
    renderEntierTree = observer;
};

export default state;