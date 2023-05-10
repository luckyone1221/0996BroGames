import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";

export function useTrackRecent(id){
  const navigate = useNavigate();

  let idList = JSON.parse(localStorage.getItem('BroGamesRecentList'));
  if(idList && Array.isArray(idList)){
    if(idList.indexOf(id) < 0){
      idList.push(id);
    }
  }
  else{
    idList = new Array(id);
  }

  window.localStorage.setItem('BroGamesRecentList', JSON.stringify(idList));

  const [recentItems, setRecentItems] = useState(idList);
  return recentItems
}