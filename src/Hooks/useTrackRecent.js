import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";

export function useTrackRecent(id){
  const navigate = useNavigate();

  let idList;
  if (localStorage.getItem('BroGamesRecentList')){
    idList = JSON.parse(localStorage.getItem('BroGamesRecentList'));
  }

  if(idList && Array.isArray(idList)){
    if(id && idList.indexOf(id) < 0){
      idList.unshift(id);
    }

    //make them no more then 12
    if(idList.length > 12){
     let result = [];
     for(let i = 0; i < 12; i++){
       result.push(idList[i]);
     }
      idList = result;
    }
  }
  else{
    idList = id ? new Array(id) : new Array();
  }

  window.localStorage.setItem('BroGamesRecentList', JSON.stringify(idList));

  const [recentItems, setRecentItems] = useState(idList);
  return recentItems
}