import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'//library
import { Provider } from 'react-redux'//wraps the app and provides the store to all of the components


const initialState = {//create properties for each dragon
    stylist_id: [],
    user_id: []

}

const reducer = (currentState, action) =>  {//pure function takes in state and returns a new state
    switch(action.type) {// respond to actions a plain JS object. all actions have types
        case 'ENTER_ROOM':
            return { chatRoom: currentState.chatRoom + 1 }
        break;

        case 'EXIT_ROOM':
            return { chatRoom: currentState.chatRoom - 1}
        break;
    }
    return currentState
}
const store = createStore(reducer, 
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())//function that returns the store
                                                //protector of state

store.dispatch({ type: 'ENTER_ROOM'})
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
