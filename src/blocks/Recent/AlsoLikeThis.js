import {Recent} from "./Recent";
import {useLanguage} from "../../Hooks/UseLang";
import {useEffect, useState} from "react";
import {getProducts} from "../../Hooks/GetFunctions";
import {useSelector} from "react-redux";
import {useGetTags} from "../../Hooks/useGetTags";
import {useNavigate} from "react-router-dom";

export const AlsoLikeThis = (props) => {
  const {itemId} = props;

  const config = useSelector(state => state);
  const tags = useGetTags(itemId);
  console.log(itemId, tags)
  const lang = useLanguage();
  const navigate = useNavigate();

  const [prodIds, setProdIds] = useState([]);

  useEffect(() => {
    let prodType = "all";
    let currentPlatform = "all";

    for(let item of ['accounts', 'activations', 'keys']){
      for (let tag of tags){
        if (item === tag.toLowerCase()){
          prodType = tag.toLowerCase();
        }
      }
    }
    for(let item of ['pc', 'ps', 'xBoxAndPC', 'nintendo', 'vpnAndStreaming']){
      for (let tag of tags){
        if (item === tag.toLowerCase()){
          currentPlatform = tag.toLowerCase();
        }
      }
    }


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
  }, []);


  if(prodIds.length > 0){
    return(
      <Recent itemsList={prodIds} title={lang.Recent.titleAlsoLike}/>
    )
  }
}