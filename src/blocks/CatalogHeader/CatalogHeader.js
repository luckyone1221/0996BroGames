import {Link} from "react-router-dom";
import {useLanguage} from "../../Hooks/UseLang";
import {useDispatch, useSelector} from "react-redux";

export const CatalogHeader = (props) => {
  const lang = useLanguage().CatalogHeader;

  return(
    <div className="cHead">
      <div className="cHead__header">
        <div className="container">
          <div className="cHead__row row justify-content-center">
            <CatalogHeadItem platform="pc" txt={lang.pc}/>
            <CatalogHeadItem platform="ps" txt={lang.playStation}/>
            <CatalogHeadItem platform="xBoxAndPC" txt={lang.xBoxAndPc}/>
            <CatalogHeadItem platform="nintendo" txt={lang.nintendo}/>
            <CatalogHeadItem platform="vpnAndStreaming" txt={lang.vpnAndSteaming}/>
          </div>
        </div>
      </div>
    </div>
  )
}

const CatalogHeadItem = (props) => {
  const {platform, txt} = props;
  const dispatch = useDispatch();
  const currentPlatform = useSelector(state => state.currentPlatform);

  return (
    <div className="col-auto">
      <div className={`cHead__h-link ${currentPlatform === platform ? "active" : ""}`} onClick={() => {
        dispatch({type: "CHANGE_PLATFORM", payload: currentPlatform !== platform ? platform : undefined})
      }}>{txt}</div>
    </div>
  )
}