import {useState} from "react";
import americanFlag from "../../img/american-flag.jpg";
import ruFlag from "../../img/ruFlag.jpg";

export const CurrencyLang = () => {
  let [lang, setLang] = useState('en');
  let [currency, setCurrency] = useState('usd');

  return (
    <div className="currency">
      <div className="currency__row row align-items-center">
        <div className="col-auto">
          <div className="currency__ball">
            <img src={lang === 'en' ? americanFlag : ruFlag} alt=""/>
          </div>
        </div>
        <div className="col-auto">
          <div className="currency__currency">
            {currency === 'usd' ? "USD" : "RUB"}
          </div>
        </div>
      </div>
      <div className="currency__dd">
        <div className="currency__dd-inner">
          <div className="currency__dd-title">Language</div>
          <div className="currency__box">
            <div className="currency__b-row row">
              <div className="col-6">
                <div className={`currency__btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>
                  <img src={americanFlag} alt=""/>
                  English
                </div>
              </div>
              <div className="col-6">
                <div className={`currency__btn ${lang === 'ru' ? 'active' : ''}`} onClick={() => setLang('ru')}>
                  <img src={ruFlag} alt=""/>
                  русский
                </div>
              </div>
            </div>
          </div>
          {/**/}
          <div className="currency__dd-title">Currency</div>
          <div className="currency__box">
            <div className="currency__b-row row">
              <div className="col-6">
                <div className={`currency__btn ${currency === 'usd' ? 'active' : ''}`} onClick={() => setCurrency('usd')}>
                  <strong>$ - USD</strong>
                </div>
              </div>
              <div className="col-6">
                <div className={`currency__btn ${currency === 'rub' ? 'active' : ''}`} onClick={() => setCurrency('rub')}>
                  <strong>₽ - Руб</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**/}
      </div>
    </div>
  )
}