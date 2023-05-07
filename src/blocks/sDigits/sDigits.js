import {useLanguage} from "../../Hooks/UseLang";

export const Digits = (props) => {
  const lang = useLanguage();

  return(
    <div className="sDigits">
      <div className="container">
        <div className="sDigits__row row">
          {lang.Digits.map((item, index) => {
            return <DigitsItem number={item.number} prefix={item.prefix} descr={item.descr}/>
          })}
        </div>
      </div>
    </div>
  )
}

const DigitsItem = (props) => {
  const {number, prefix, descr} = props;

  return(
    <div className="col-sm-6 col-lg-3">
      <div className="sDigits__box">
        <div className="sDigits__title">{number}{prefix}</div>
        <div className="sDigits__subtitle">{descr}</div>
      </div>
    </div>
  )
}