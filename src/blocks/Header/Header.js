//logo.svg
import logo from "../../img/Logo.png"

import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {CartIcon} from "../../SvgSpriptes";
import {CurrencyLang} from "./CurrencyLang";
import {HeaderSearch} from "./HeaderSearch";
import {HeaderMenu} from "./HeaderMenu";
import {MobMenu} from "./MobMenu";

function useCalcHeaderHeight(header){
  const [headerAddClasses, setHeaderAddClass] = useState('');

  const calcHeaderHeight = () => {
    document.documentElement.style.setProperty('--header-h', header.current.offsetHeight + 'px');

    if (window.pageYOffset > 0) {
      setHeaderAddClass('fixed');
    } else {
      setHeaderAddClass('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', calcHeaderHeight, {passive: true});
    window.addEventListener('resize', calcHeaderHeight, {passive: true});

    calcHeaderHeight();
    window.setTimeout(calcHeaderHeight, 0);
    window.setTimeout(calcHeaderHeight, 100);

    return () => {
      window.removeEventListener('scroll', calcHeaderHeight);
      window.removeEventListener('resize', calcHeaderHeight);
    };
  })

  return headerAddClasses;
}
function useMobMenu(){
  const [mobMenuActive, setMobMenuActive] = useState(false);
  const mobMenuMissclick = (event) => {
    if(!event.target.closest('.mobMenu-inner-js, .header-js')){
      setMobMenuActive(false);
      document.body.classList.remove('fixed');
    }
  }

  const closeMenuOnXL = () => {
    if (window.matchMedia("(min-width: 1200px)").matches){
      setMobMenuActive(false);
      document.body.classList.remove('fixed');
    }
  }
  useEffect(() => {
    document.body.addEventListener('click', mobMenuMissclick);
    window.addEventListener('resize', closeMenuOnXL);
    return () => {
      document.body.removeEventListener('click', mobMenuMissclick);
      window.removeEventListener('resize', closeMenuOnXL);
    };
  })

  return [mobMenuActive, setMobMenuActive]
}

export const Header = (props) => {
  const header = useRef(null);
  const headerAddClasses = useCalcHeaderHeight(header);

  //mob menu
  const [mobMenuActive, setMobMenuActive] = useMobMenu();

  return(
    <>
      <header className={`header header-js ${headerAddClasses} ${mobMenuActive ? "menu-open" : ''}`} ref={header}>
        <div className="container">
          <div className="header__row align-items-center row">
            <div className="col col-xl-auto">
              <Link className="header__logo" to='/'>
                <img src={logo} alt="logo"/>
              </Link>
            </div>
            <div className="col d-none d-xl-block">
              <HeaderMenu/>
            </div>
            <div className="col-auto d-none d-md-block">
              <HeaderSearch/>
            </div>
            <div className="col-auto">
              <Link to="/cart" className="header__cart">
                <CartIcon/>
              </Link>
            </div>
            <div className="col-auto d-none d-md-block">
              <CurrencyLang/>
            </div>
            <div className="col-auto d-xl-none">
              <div className={`header__burger ${mobMenuActive ? "active" : ''}`} onClick={() => {
                document.body.classList.toggle('fixed');
                setMobMenuActive(!mobMenuActive);
              }}>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobMenu isVible={mobMenuActive}/>
    </>
  )
}