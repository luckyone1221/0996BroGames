import {Link} from "react-router-dom";
import logo from "../../img/Logo.png"
import {Discord, Mail, Telegram} from "../../SvgSpriptes";
import {useLanguage} from "../../Hooks/UseLang";
import {useSelector} from "react-redux";
import {getServerToLink} from "../../Hooks/GetFunctions";

export const Footer = (props) => {
  const config = useSelector(state => state);
  let lang = useLanguage().Footer;

  return(
    <footer className="footer">
      <div className="container">
        <div className="footer__row row align-items-center">
          <div className="footer__col--left col col-lg-auto">
            <Link className="footer__logo" to={`/${getServerToLink(config.lang)}/`}>
              <img loading="lazy" src={logo} alt=""/>
              <span className="footer__logo-txt">BroGames</span>
            </Link>
          </div>
          <div className="footer__col--middle col-lg order-last order-lg-0">
            <div className="footer__menu">
              <Link to={`/${getServerToLink(config.lang)}/catalog/accounts`}>{lang.accounts}</Link>
              <Link to={`/${getServerToLink(config.lang)}/catalog/keys`}>{lang.keys}</Link>
              <Link to={`/${getServerToLink(config.lang)}/catalog/topUp`}>{lang.topUp}</Link>
              <Link to={`/${getServerToLink(config.lang)}/catalog/currency`}>{lang.currency}</Link>
              <Link to={`/${getServerToLink(config.lang)}/about`}>{lang.about}</Link>
              <Link to={`/${getServerToLink(config.lang)}/policy`}>{lang.policy}</Link>
            </div>
          </div>
          <div className="footer__col--right col-auto">
            <div className="footer__soc">
              <a href={process.env.REACT_APP_DISCORD_LINK} target="_blank">
                <Discord/>
              </a>
              <a href={config.lang === "ru-Ru" ? process.env.REACT_APP_TELEGRAM_LINK_RU : process.env.REACT_APP_TELEGRAM_LINK_EN} target="_blank">
                <Telegram/>
              </a>
              <a href="mailto:makegameprofit@gmail.com">
                <Mail/>
              </a>
            </div>
          </div>
        </div>
        <div className="footer__all-rights text-lg-center">
          {lang.allRights.replace("{currYear}", new Date().getFullYear())}
        </div>
      </div>
    </footer>
  )
}