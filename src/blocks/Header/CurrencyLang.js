import {useState} from "react";
import americanFlag from "../../img/american-flag.jpg";
import ruFlag from "../../img/ruFlag.jpg";
import {useDispatch, useSelector} from "react-redux";
import {useLanguage} from "../../Hooks/UseLang";

export const CurrencyLang = () => {
  //
  const dispatch = useDispatch();
  const langState = useSelector(state => state.lang);
  const currency = useSelector(state => state.currency);

  //
  const lang = useLanguage();


  return (
    <div className="currency">
      <div className="currency__row row align-items-center">
        <div className="col-auto">
          <div className="currency__ball">
            <img src={langState === 'ru-Ru' ? ruFlag : americanFlag} alt=""/>
          </div>
        </div>
        <div className="col-auto">
          <div className="currency__currency">
            {currency}
          </div>
        </div>
      </div>
      <div className="currency__dd">
        <div className="currency__dd-inner">
          <div className="currency__dd-title">{lang.header.language}</div>
          <div className="currency__box">
            <div className="currency__b-row row">
              <div className="col-6">
                <div className={`currency__btn ${langState === 'en-US' ? 'active' : ''}`} onClick={() => {
                  dispatch({type: "CHANGE_LANG", payload: 'en-US'})
                }}>
                  <img src={americanFlag} alt=""/>
                  English
                </div>
              </div>
              <div className="col-6">
                <div className={`currency__btn ${langState === 'ru-Ru' ? 'active' : ''}`} onClick={() => {
                  dispatch({type: "CHANGE_LANG", payload: 'ru-Ru'})
                }}>
                  <img src={ruFlag} alt=""/>
                  русский
                </div>
              </div>
            </div>
          </div>
          {/**/}
          <div className="currency__dd-title">{lang.header.currency}</div>
          <div className="currency__box">
            <div className="currency__b-row row">
              <div className="col-4">
                <div className={`currency__btn ${currency === 'USD' ? 'active' : ''}`} onClick={() => {
                  dispatch({type: "CHANGE_CURRENCY", payload: 'USD'})
                }}>
                  <strong>$ - USD</strong>
                </div>
              </div>
              <div className="col-4">
                <div className={`currency__btn ${currency === 'RUB' ? 'active' : ''}`} onClick={() => {
                  dispatch({type: "CHANGE_CURRENCY", payload: 'RUB'})
                }}>
                  <strong>₽ - Руб</strong>
                </div>
              </div>
              <div className="col-4">
                <div className={`currency__btn ${currency === 'UAH' ? 'active' : ''}`} onClick={() => {
                  dispatch({type: "CHANGE_CURRENCY", payload: 'UAH'})
                }}>
                  <strong>₴ - Грн</strong>
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