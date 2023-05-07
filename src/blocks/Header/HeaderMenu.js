// import {MenuAbout, MenuAccounts, MenuActivations, MenuKeys, MenuMarket, MenuTop} from "../../SvgSpriptes";
import {Link} from "react-router-dom";

import menuMarket from '../../img/svg/MenuMarket.svg'
import menuAccounts from '../../img/svg/MenuAccounts.svg'
import menuActivation from '../../img/svg/MenuActivations.svg'
import menuKeys from '../../img/svg/MenuKeys.svg'
import menuTopUp from '../../img/svg/MenuTop.svg'
import menuAbout from '../../img/svg/MenuAbout.svg'

import menuMarketActive from '../../img/svg/MenuMarket-active.svg'
import menuAccountsActive from '../../img/svg/MenuAccounts-active.svg'
import menuActivationActive from '../../img/svg/MenuActivations-active.svg'
import menuKeysActive from '../../img/svg/MenuKeys-active.svg'
import menuTopUpActive from '../../img/svg/MenuTop-active.svg'
import menuAboutActive from '../../img/svg/MenuAbout-active.svg'
import {useLanguage} from "../../Hooks/UseLang";

export const HeaderMenu = (props) => {
  const {currLocation} = props;
  const lang = useLanguage();
  
  return(
    <div className="menu">
      <div className="menu__row row">
        <HeaderMenuBtn img={menuMarket} imgActive={menuMarketActive} currLocation={currLocation} href="/catalog" txt={lang.header.market}/>
        <HeaderMenuBtn img={menuAccounts} imgActive={menuAccountsActive} currLocation={currLocation} href="/catalog/accounts" txt={lang.header.accounts}/>
        <HeaderMenuBtn img={menuActivation} imgActive={menuActivationActive} currLocation={currLocation} href="/catalog/activation" txt={lang.header.activation}/>
        <HeaderMenuBtn img={menuKeys} imgActive={menuKeysActive} currLocation={currLocation} href="/catalog/keys" txt={lang.header.keys}/>
        <HeaderMenuBtn img={menuTopUp} imgActive={menuTopUpActive} currLocation={currLocation} href="/catalog/top-up" txt={lang.header.top}/>
        <HeaderMenuBtn img={menuAbout} imgActive={menuAboutActive} currLocation={currLocation} href="/about" txt={lang.header.about}/>
      </div>
    </div>
  )
}

const HeaderMenuBtn = (props) => {
  const {href, currLocation, txt, img, imgActive} = props;

  return (
    <div className="col-xl-auto">
      <Link className={`menu__link ${currLocation === href ? "active" : ''}`} to={href}>
        <img src={currLocation === href ? imgActive : img} alt=""/>
        {txt}
      </Link>
    </div>
  )
}