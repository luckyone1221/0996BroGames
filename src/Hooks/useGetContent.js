import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export function useGetContent(itemId){
  const config = useSelector(state => state);
  const content = config.content;
  const navigate = useNavigate();

  const [itemContent, setItemContent] = useState({
    tags: [],
  });
  useEffect(() => {
    if(content[itemId]){
      let tags = content[itemId].tags ? content[itemId].tags : [];
      let imgGallery = content[itemId].imgGallery && content[itemId].imgGallery.length > 0 ? content[itemId].imgGallery : [];
      let descr = content[itemId][config.lang] && content[itemId][config.lang].descr ? content[itemId][config.lang].descr : undefined;
      let addDescr = content[itemId][config.lang] && content[itemId][config.lang].addDescr ? content[itemId][config.lang].addDescr : undefined;

      setItemContent({
        imgGallery: imgGallery,
        tags: tags,
        descr: descr,
        addDescr: addDescr,
      });
    }
    else{
      setItemContent({
        tags: [],
      });
    }

  }, [config.lang, navigate])

  return itemContent
}
