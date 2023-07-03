import {getServerToLink} from "./GetFunctions"
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export function useTrackLang(){
  const params = useParams();
  const config = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [navigateEffectMute, setNavigateEffectMute] = useState(true);

  //converts en-US => en
  const getLinkToServer = (str) => {
    return str.replace("en", "en-US").replace("ru", "ru-Ru")
  }
  const changeLangInPathname = (configLang) => {
    return window.location.pathname.replace("en", getServerToLink(configLang)).replace("ru", getServerToLink(configLang))
  }

  let linkLang = params.lang;

  useEffect(() => {
    if(linkLang && getServerToLink(config.lang) !== linkLang){
      dispatch({type: "CHANGE_LANG", payload: getLinkToServer(linkLang)})
    }
    setNavigateEffectMute(false);
  }, [navigate]);

  useEffect(() => {
    if (!navigateEffectMute && linkLang && getServerToLink(config.lang) !== linkLang){
      navigate(changeLangInPathname(config.lang))
      // setNavigateEffectMute(true);
    }
  }, [config.lang])

  useEffect(() => {
    // console.log(linkLang);
    if(!linkLang){
      navigate(`/${getServerToLink(config.lang)}${window.location.pathname}`);
    }
  }, [navigate])


}