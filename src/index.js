import { StrictMode } from 'react';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";

import content from "./content.json";

let cartId = undefined;
let cartResponse = undefined;

if(localStorage.getItem('BroGamesCartId')){
  cartId = JSON.parse(localStorage.getItem('BroGamesCartId'))
}
if(localStorage.getItem('BroGamesCartResponse')){
  cartResponse = JSON.parse(localStorage.getItem('BroGamesCartResponse'))
}


const defaultState = {
  lang: 'en-US',//ru-Ru
  currency: "RUB",//USD

  prodType: "all",
  currentPlatform: undefined,//?
  sortOrder: "name",

  //
  scrollTo: undefined,

  //content override
  content: content,

  //search
  searchTxt: "",//heavy load
  searchResults: [],

  //cart
  cartUID: cartId,
  cartResponse: cartResponse,

  //
  digIds: {
    sellerId: "817785",
    categorySlider: "133593",
    sliderOnMain: "133594",
    preOrder: "133988",

    //categories
    categories: {
      all: {
        id: "133459",
        subCategories: [],
      },
      accounts: {
        id: "116325",
        subCategories: [],
      },
      activations: {
        id: "116368",
        subCategories: [],
      },
      keys: {
        id: "116327",
        subCategories: [],
      },
      topUp: {
        id: "133792",
        subCategories: [],
      },
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
    case "CHANGE_CARTUID":
      return {...state, cartUID: action.payload}
    case "SET_CARTRESPONSE":
      return {...state, cartResponse: action.payload}
    case "CHANGE_SORTORDER":
      return {...state, sortOrder: action.payload}
    case "CHANGE_PRODTYPE":
      return {...state, prodType: action.payload}
    case "CHANGE_SEARCHTXT":
      return {...state, searchTxt: action.payload}
    case "CHANGE_SEARCH_RESULTS":
      return {...state, searchResults: action.payload}
    case "CHANGE_CATEGORIES":
      return {...state, digIds: action.payload}
    case "CHANGE_SCROLLTO":
      return {...state, scrollTo: action.payload}
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
