import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";

import content from "./content.json";

const defaultState = {
  lang: 'en-US',//ru-Ru
  currency: "RUB",//USD
  currentPlatform: undefined,
  prodType: "all",
  sortOrder: "name",
  cart: [],
  content: content,
  digIds: {
    sellerId: "817785",
    categorySlider: "133593",
    sliderOnMain: "133594",

    //categories
    all: {
      all: "133459",
      pc: "133563",
      ps: "133564",
      xBoxAndPC: "133565",
      nintendo: "133566",
      vpnAndStreaming: "133567",
    },
    accounts: {
      all: "116325",
      pc: "133467",
      ps: "133468",
      xBoxAndPC: "133469",
      nintendo: "133470",
      vpnAndStreaming: "133471",
    },
    activations: {
      all: "116368",
      pc: "133462",
      ps: "133463",
      xBoxAndPC: "133464",
      nintendo: "133465",
      vpnAndStreaming: "133466",
    },
    keys: {
      all: "116327",
      pc: "133454",
      ps: "133455",
      xBoxAndPC: "133456",
      nintendo: "133457",
      vpnAndStreaming: "133458",
    },
  },
}

const reducer = (state=defaultState, action) => {
  switch (action.type){
    case "CHANGE_LANG":
      return {...state, lang: action.payload}
    case "CHANGE_CURRENCY":
      return {...state, currency: action.payload}
    case "CHANGE_PLATFORM":
      return {...state, currentPlatform: action.payload}
    case "ADD_TO_CART":
      if ([...state.cart].indexOf(action.payload) <= -1) {
        return {...state, cart: [...state.cart, action.payload]}
      }
      else {
        return state
      }
    case "REMOVE_FROM_CART":
      const cart = [...state.cart];
      const index = cart.indexOf(action.payload);
      if (index > -1) {
        cart.splice(index, 1);
      }
      return {...state, cart: cart}
    case "CHANGE_SORTORDER":
      return {...state, sortOrder: action.payload}
    case "CHANGE_PRODTYPE":
      return {...state, prodType: action.payload}
    default:
      return state
  }
}
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
