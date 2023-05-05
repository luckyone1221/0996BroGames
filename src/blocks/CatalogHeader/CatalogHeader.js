import {Link} from "react-router-dom";

export const CatalogHeader = (props) => {
  return(
    <div className="cHead">
      <div className="cHead__header">
        <div className="container">
          <div className="cHead__row row justify-content-center">
            <CatalogHeadItem href="" txt="PC"/>
            <CatalogHeadItem href="" txt="PlayStation"/>
            <CatalogHeadItem href="" txt="Xbox & PC"/>
            <CatalogHeadItem href="" txt="Nintendo"/>
            <CatalogHeadItem href="" txt="VPN & streaming"/>
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