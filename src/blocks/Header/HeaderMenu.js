// import {MenuAbout, MenuAccounts, MenuActivations, MenuKeys, MenuMarket, MenuTop} from "../../SvgSpriptes";
import {Link, useNavigate} from "react-router-dom";

import menuMarket from '../../img/svg/MenuMarket.svg'
import menuAccounts from '../../img/svg/MenuAccounts.svg'
import menuActivation from '../../img/svg/MenuActivations.svg'
import menuCurrency from '../../img/svg/menuCurrency.svg'
import menuKeys from '../../img/svg/MenuKeys.svg'
import menuTopUp from '../../img/svg/MenuTop.svg'
import menuAbout from '../../img/svg/MenuAbout.svg'

import menuMarketActive from '../../img/svg/MenuMarket-active.svg'
import menuAccountsActive from '../../img/svg/MenuAccounts-active.svg'
import menuActivationActive from '../../img/svg/MenuActivations-active.svg'
import menuCurrencyActive from '../../img/svg/menuCurrency-active.svg'
import menuKeysActive from '../../img/svg/MenuKeys-active.svg'
import menuTopUpActive from '../../img/svg/MenuTop-active.svg'
import menuAboutActive from '../../img/svg/MenuAbout-active.svg'
import {useLanguage} from "../../Hooks/UseLang";
import {useSelector} from "react-redux";
import {getServerToLink} from "../../Hooks/GetFunctions"
import {useEffect, useState} from "react";
import {log} from "util";

export const HeaderMenu = (props) => {
  const {currLocation} = props;
  const lang = useLanguage();
  const config = useSelector(state => state);
  
  return(
    <div className="menu">
      <div className="menu__row row">
        <HeaderMenuBtn img={menuMarket} imgActive={menuMarketActive} currLocation={currLocation} href={`/${getServerToLink(config.lang)}/catalog`} txt={lang.header.market}/>
        <HeaderMenuBtn img={menuAccounts} imgActive={menuAccountsActive} currLocation={currLocation} href={`/${getServerToLink(config.lang)}/catalog/accounts`} txt={lang.header.accounts}/>
        {/*<HeaderMenuBtn img={menuActivation} imgActive={menuActivationActive} currLocation={currLocation} href={`/${getServerToLink(config.lang)}/catalog/activations`} txt={lang.header.activation}/>*/}
        <HeaderMenuBtn img={menuKeys} imgActive={menuKeysActive} currLocation={currLocation} href={`/${getServerToLink(config.lang)}/catalog/keys`} txt={lang.header.keys}/>
        <HeaderMenuBtn img={menuTopUp} imgActive={menuTopUpActive} currLocation={currLocation} href={`/${getServerToLink(config.lang)}/catalog/top-up`} txt={lang.header.top}/>
        <HeaderMenuBtn img={menuCurrency} imgActive={menuCurrencyActive} currLocation={currLocation} href={`/${getServerToLink(config.lang)}/catalog/currency`} txt={lang.header.currencyCategory}/>
        <HeaderMenuBtn img={menuAbout} imgActive={menuAboutActive} currLocation={currLocation} href={`/${getServerToLink(config.lang)}/about`} txt={lang.header.about}/>
      </div>
    </div>
  )
}

const HeaderMenuBtn = (props) => {
  const {href, currLocation, txt, img, imgActive} = props;
  const navigate = useNavigate();
  const [isMenuPunkActive, setIsMenuPunkActive] = useState(false);

  useEffect(() => {
    if(href.match(/catalog$/)){
      if(currLocation === href){
        setIsMenuPunkActive(true);
      }
      else {
        setIsMenuPunkActive(false);
      }
    }
    else{
      if(currLocation.includes(href)){
        setIsMenuPunkActive(true);
      }
      else {
        setIsMenuPunkActive(false);
      }
    }

  }, [currLocation])

  return (
    <div className="col-xl-auto">
      <Link className={`menu__link ${isMenuPunkActive ? "active" : ''}`} to={href}>
        <div className="menu__link-img">
          <img src={img} alt=""/>
          <img src={imgActive} alt=""/>
        </div>
        {txt}
      </Link>
    </div>
  )
}