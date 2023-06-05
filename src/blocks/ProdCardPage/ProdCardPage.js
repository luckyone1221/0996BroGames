import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {ProdCardHeaderBlock} from "../ProdCardHeaderBlock/ProdCardHeaderBlock";
import {ProdGalery} from "../ProdGalery/ProdGalery";
import {GameInfo} from "../GameInfo/GameInfo";
import {Recent} from "../Recent/Recent";
import {Review} from "../Review/Review";


import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getItemChars} from "../../Hooks/GetFunctions";
import {useNavigate, useParams} from "react-router-dom";
import {AlsoLikeThis} from "../Recent/AlsoLikeThis";
import {useTrackRecent} from "../../Hooks/useTrackRecent";
import {useScrollTop} from "../../Hooks/useScrollTop";

export const ProdCardPage = (props) => {
  const params = useParams();
  const srollTopOnUpdate = useScrollTop();
  const navigate = useNavigate();
  const recentIdList = useTrackRecent(params.id);
  const config = useSelector(state => state);

  const [itemChars, setItemChars] = useState();

  useEffect(() => {
    getItemChars(config, params.id).then((data) => {
      setItemChars(data);
    });
  }, [config.lang, config.currency, navigate]);


  return (
    <div className="main-wrapper">
      <Header/>
      <main>
        {itemChars && (
          <>
            <ProdCardHeaderBlock product={itemChars.product} imgArr={itemChars.product.preview_imgs}/>
            {/*<ProdGalery imgArr={itemChars.product.preview_imgs}/>*/}
            <GameInfo info={itemChars.product.info}/>
            <AlsoLikeThis itemId={params.id}/>
            <Review itemId={params.id}/>
            {recentIdList.length > 4 && (
              <Recent itemsList={recentIdList}/>
            )}
          </>
        )}
      </main>
      <Footer/>
    </div>
  )
}