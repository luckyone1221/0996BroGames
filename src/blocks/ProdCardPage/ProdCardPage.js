import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {ProdCardHeaderBlock} from "../ProdCardHeaderBlock/ProdCardHeaderBlock";
import {ProdGalery} from "../ProdGalery/ProdGalery";
import {GameInfo} from "../GameInfo/GameInfo";
import {Recent} from "../Recent/Recent";
import {Review} from "../Review/Review";
import {useLanguage} from "../../Hooks/UseLang";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getItemChars} from "../../Hooks/GetFunctions";
import {useNavigate, useParams} from "react-router-dom";
import {AlsoLikeThis} from "../Recent/AlsoLikeThis";

export const ProdCardPage = (props) => {
  const lang = useLanguage();
  const params = useParams();
  const navigate = useNavigate();
  const config = useSelector(state => state);

  const [itemChars, setItemChars] = useState();
  useEffect(() => {
    getItemChars(config, params.id).then((data) => {
      setItemChars(data);
      // console.log(data.product);
    });
  }, [config, navigate]);

  return (
    <div className="main-wrapper">
      <Header/>
      <main>
        {itemChars && (
          <>
            <ProdCardHeaderBlock product={itemChars.product}/>
            <ProdGalery imgArr={itemChars.product.preview_imgs}/>
            <GameInfo info={itemChars.product.info}/>
            <AlsoLikeThis itemId={itemChars.product.id}/>
            <Review/>
            {/*<Recent title={lang.Recent.titleRecent}/>*/}
          </>
        )}
      </main>
      <Footer/>
    </div>
  )
}