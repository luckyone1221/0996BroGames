import {Recent} from "./Recent";
import {useLanguage} from "../../Hooks/UseLang";
import {useEffect, useState} from "react";
import {getProducts} from "../../Hooks/GetFunctions";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useGetPlatform} from "../../Hooks/useGetPlatform"

export const AlsoLikeThis = (props) => {
  const {itemId} = props;

  const config = useSelector(state => state);
  const lang = useLanguage();
  const navigate = useNavigate();
  const [prodType, currentPlatform] = useGetPlatform();
  const [prodIds, setProdIds] = useState([]);

  useEffect(() => {
    getProducts(config, 0, prodType, currentPlatform).then((data) => {
      let prodArr = [];
      if(data.product) {
        for(let item of data.product){
          if(item.id !== itemId){
            prodArr.push(item.id);
          }
        }
      }

      setProdIds(prodArr);
    });
  }, [navigate, config]);


  if(prodIds.length > 0){
    return(
      <Recent itemsList={prodIds} title={lang.Recent.titleAlsoLike}/>
    )
  }
}