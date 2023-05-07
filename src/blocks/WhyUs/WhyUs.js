import img1 from "../../img/svg/WhyUs-1.svg"
import img2 from "../../img/svg/WhyUs-2.svg"
import img3 from "../../img/svg/WhyUs-3.svg"
import img4 from "../../img/svg/WhyUs-4.svg"
import {useLanguage} from "../../Hooks/UseLang";

export const WhyUs = (props) => {
  const lang = useLanguage().WhyUs;

  return (
    <section className='WhyUs section'>
      <div className="container">
        <div className="section-title">
          <h2>{lang.title}</h2>
        </div>
        <div className="WhyUs__row row">
          <WhyUsItem img={img1} title={lang.item1}/>
          <WhyUsItem img={img2} title={lang.item2}/>
          <WhyUsItem img={img3} title={lang.item3}/>
          <WhyUsItem img={img4} title={lang.item4}/>
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
          <img loading="lazy" src={img} alt=""/>
        </div>
        <div className="WhyUs__title">{title}</div>
      </div>
    </div>
  )
}