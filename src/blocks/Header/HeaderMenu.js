import {MenuAbout, MenuAccounts, MenuActivations, MenuKeys, MenuMarket, MenuTop} from "../../SvgSpriptes";
import {Link} from "react-router-dom";

export const HeaderMenu = () => {

  return(
    <div className="menu">
      <div className="menu__row row">
        <HeaderMenuBtn href="/" txt="Market" img={<MenuMarket/>}/>
        <HeaderMenuBtn href="/" txt="Accounts" img={<MenuAccounts/>}/>
        <HeaderMenuBtn href="/" txt="Activation" img={<MenuActivations/>}/>
        <HeaderMenuBtn href="/" txt="Keys" img={<MenuKeys/>}/>
        <HeaderMenuBtn href="/" txt="Top-UP" img={<MenuTop/>}/>
        <HeaderMenuBtn href="/" txt="About BroGamers" img={<MenuAbout/>}/>
      </div>
    </div>
  )
}

const HeaderMenuBtn = (props) => {
  const {href, txt, img} = props;

  return (
    <div className="col-xl-auto">
      <Link className="menu__link" to={href}>
        {img}
        {txt}
      </Link>
    </div>
  )
}