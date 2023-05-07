import ppImg from '../../img/sBro-bg.jpg'
import logo from  '../../img/Logo.png'
import {useLanguage} from "../../Hooks/UseLang";

export const BroHeaderBlock = (props) => {
  const lang = useLanguage().BroHeaderBlock;

  return(
    <section className="section sBro">
      <div className="sBro__bg">
        <img src={ppImg} alt=""/>
      </div>
      <div className="sBro__container container">
        <div className="sBro__logo justify-content-center">
          <img src={logo} alt=""/>
          <h1 className="sBro__title">BroGamers</h1>
        </div>
        <div className="sBro__descr text-center">
          {lang.descr}
        </div>
      </div>
    </section>
  )
}