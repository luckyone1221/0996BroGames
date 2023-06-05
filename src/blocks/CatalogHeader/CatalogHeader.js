import {Link} from "react-router-dom";
import {useLanguage} from "../../Hooks/UseLang";
import {useDispatch, useSelector} from "react-redux";

export const CatalogHeader = (props) => {
  const lang = useLanguage().CatalogHeader;
  const config = useSelector(state => state);

  if(config.digIds.categories[config.prodType].subCategories.length > 0){
    return(
      <div className="cHead">
        <div className="cHead__header">
          <div className="container">
            <div className="cHead__row row justify-content-center">
              {config.digIds.categories[config.prodType].subCategories.map((item, index) => {
                return <CatalogHeadItem key={index} id={item.id} txt={item.name}/>
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const CatalogHeadItem = (props) => {
  const {id, txt} = props;
  const dispatch = useDispatch();
  const currentPlatform = useSelector(state => state.currentPlatform);

  return (
    <div className="col-auto">
      <div className={`cHead__h-link ${currentPlatform === id ? "active" : ""}`} onClick={() => {
        dispatch({type: "CHANGE_PLATFORM", payload: id})
      }}>{txt}</div>
    </div>
  )
}