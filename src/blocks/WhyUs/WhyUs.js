//

import img1 from "../../img/svg/WhyUs-1.svg"
import img2 from "../../img/svg/WhyUs-2.svg"
import img3 from "../../img/svg/WhyUs-3.svg"
import img4 from "../../img/svg/WhyUs-4.svg"

export const WhyUs = (props) => {

  return (
    <section className='WhyUs section'>
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Us</h2>
        </div>
        <div className="WhyUs__row row">
          <WhyUsItem img={img1} title={'Safety'}/>
          <WhyUsItem img={img2} title={'Reasonable prices'}/>
          <WhyUsItem img={img3} title={'Best quality'}/>
          <WhyUsItem img={img4} title={'Instant delivery'}/>
        </div>
      </div>
    </section>
  )
}

export const WhyUsItem = (props) => {
  const {img, title} = props;

  return(
    <div className="col-6 col-lg-3">
      <div className="WhyUs__item">
        <div className="WhyUs__img">
          <img src={img} alt=""/>
        </div>
        <div className="WhyUs__title">{title}</div>
      </div>
    </div>
  )
}