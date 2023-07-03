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

if(window.localStorage.getItem('BroGamesCartId')){
  try {
    cartId = JSON.parse(window.localStorage.getItem('BroGamesCartId'))
  }
  catch (e){
    console.log(e)
  }
}
if(window.localStorage.getItem('BroGamesCartResponse')){
  try {
    cartResponse = JSON.parse(window.localStorage.getItem('BroGamesCartResponse'))
  }
  catch (e){
    console.log(e)
  }
}

const defaultState = {
  lang: 'ru-Ru',//ru-Ru
  currency: "RUB",//USD//UAH

  prodType: "all",
  currentPlatform: undefined,//?
  sortOrder: "",

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
    sellerId: "988672",
    categorySlider: "134490",
    sliderOnMain: "134491",
    preOrder: "134492",

    //categories
    categories: {
      all: {
        id: "134288",
        subCategories: [],
      },
      accounts: {
        id: "126555",
        subCategories: [],
      },
      keys: {
        id: "126557",
        subCategories: [],
      },
      topUp: {
        id: "132945",
        subCategories: [],
      },
      currency: {
        id: "134299",
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
