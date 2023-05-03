import {Link} from "react-router-dom";
import logo from "../../img/Logo.png"
import {Discord, Mail, Telegram} from "../../SvgSpriptes";

export const Footer = (props) => {
  let currYear = new Date().getFullYear();

  return(
    <footer className="footer">
      <div className="container">
        <div className="footer__row row align-items-center">
          <div className="footer__col--left col col-lg-auto">
            <Link className="footer__logo" to="/">
              <img loading="lazy" src={logo} alt=""/>
              <span className="footer__logo-txt">BroGames</span>
            </Link>
          </div>
          <div className="footer__col--middle col-lg order-last order-lg-0">
            <div className="footer__menu">
              <Link to="/">Accounts</Link>
              <Link to="/">Activation</Link>
              <Link to="/">Keys</Link>
              <Link to="/">About BroGamerss</Link>
              <Link to="/">Privacy&Policy</Link>
            </div>
          </div>
          <div className="footer__col--right col-auto">
            <div className="footer__soc">
              <a href="#">
                <Discord/>
              </a>
              <a href="#">
                <Telegram/>
              </a>
              <a href="#">
                <Mail/>
              </a>
            </div>
          </div>
        </div>
        <div className="footer__all-rights text-lg-center">
          © {currYear} BroGames. All rights reserved.
        </div>
      </div>
    </footer>
  )
}