import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {log} from "util";

export function useTrackSubcategories(productType) {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const config = useSelector(state => state);
  const [primarySetup, setPrimarySetup] = useState(false);

  useEffect(() => {
    let platformId;

    if(params.subcategory){
      for (let subcategory of config.digIds.categories[config.prodType].subCategories){
        if (Number(subcategory.id) === Number(params.subcategory)){
          platformId = subcategory.id;
        }
      }
    }

    dispatch({type: "CHANGE_PRODTYPE", payload: productType});
    dispatch({type: "CHANGE_PLATFORM", payload: platformId});

    setPrimarySetup(true);
  }, [config.digIds, productType])
  //happens after subcategories is loaded

  useEffect(() => {
    if(config.currentPlatform && Number(params.subcategory) !== Number(config.currentPlatform)) {
      navigate(`${window.location.pathname.replace(/\/(\d*)$/, '')}/${config.currentPlatform}`)
    }
    if(primarySetup && !config.currentPlatform){
      navigate(`${window.location.pathname.replace(/\/(\d*)$/, '')}`)
    }
  }, [config.currentPlatform])

  return primarySetup
}