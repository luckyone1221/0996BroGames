import {HeaderMenu} from "./HeaderMenu";
import {CurrencyLang} from "./CurrencyLang";
import {HeaderSearch} from "./HeaderSearch";

export const MobMenu = (props) => {
  const {isVible, currLocation, hideSearch} = props;

  return (
    <div className={`mobMenu ${isVible ? "active" : ''}`}>
      <div className="mobMenu__container container">
        <div className="mobMenu__inner mobMenu-inner-js">
          <div className="mobMenu__content">
            <HeaderMenu currLocation={currLocation}/>
            {!hideSearch && (
              <HeaderSearch/>
            )}
            <CurrencyLang/>
          </div>
        </div>
      </div>
    </div>
  )
}