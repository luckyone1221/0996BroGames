import ppImg from '../../img/sBro-bg.jpg'
import logo from  '../../img/Logo.png'

export const BroHeaderBlock = (props) => {

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
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis
        </div>
      </div>
    </section>
  )
}