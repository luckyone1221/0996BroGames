//sDigits

export const Digits = (props) => {

  return(
    <div className="sDigits">
      <div className="container">
        <div className="sDigits__row row">
          <DigitsItem number='5' prefix=' years' descr='experience selling games'/>
          <DigitsItem number='130' prefix='K' descr='Happy clients'/>
          <DigitsItem number='99.5' prefix='%' descr='Positive Reviews'/>
          <DigitsItem number='2400' prefix='+' descr='Games on sale'/>
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