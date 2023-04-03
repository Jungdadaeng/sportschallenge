import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

const initial = {
  goalcount: 10000,
  donecount: 0,
  recordcount: 0,
  history: [],
}


function reducer(state = initial, action) {
  switch (action.type) {
    case 'save':
      return state = {
        ...state,
        goalcount: state.goalcount - action.payload.recordcount,
        history: [...state.history, action.payload.recordcount]
      }
    case 'add':
      return {
        ...state,
        history: [...state.history, action.payload]
      }
    case 'remove':
      return {
        ...state,
        goalcount: state.goalcount + state.history.find((data, index) => index == action.payload.index),
        history: state.history.filter((data, index) => index !== action.payload.index)
      }
    default:
      return state;
  }
}

let store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
