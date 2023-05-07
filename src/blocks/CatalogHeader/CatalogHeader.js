import {Link} from "react-router-dom";
import {useLanguage} from "../../Hooks/UseLang";

export const CatalogHeader = (props) => {
  const lang = useLanguage().CatalogHeader;

  return(
    <div className="cHead">
      <div className="cHead__header">
        <div className="container">
          <div className="cHead__row row justify-content-center">
            <CatalogHeadItem href="" txt={lang.pc}/>
            <CatalogHeadItem href="" txt={lang.playStation}/>
            <CatalogHeadItem href="" txt={lang.xBoxAndPc}/>
            <CatalogHeadItem href="" txt={lang.nintendo}/>
            <CatalogHeadItem href="" txt={lang.vpnAndSteaming}/>
          </div>
        </div>
      </div>
    </div>
  )
}

const CatalogHeadItem = (props) => {
  const {href, txt} = props;

  return (
    <div className="col-auto">
      <Link className={`cHead__h-link`} to={href}>{txt}</Link>
    </div>
  )
}