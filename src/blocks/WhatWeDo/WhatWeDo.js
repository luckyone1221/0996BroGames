//WhatWeDo

import whatWeDoImg1 from '../../img/sWhat-1.jpg'
import whatWeDoImg2 from '../../img/sWhat-2.jpg'
import whatWeDoImg3 from '../../img/sWhat-3.jpg'
import {useLanguage} from "../../Hooks/UseLang";

export const WhatWeDo = (props) => {
  const lang = useLanguage().WhatWeDo;

  return(
    <div className="section sWhat">
      <div className="container">
        <div className="section-title d-lg-none">
          <h2>{lang.title}</h2>
          <p>{lang.descr}</p>
        </div>
        <div className="sWhat__row row align-items-center">
          <div className="sWhat__col sWhat__col--left col-lg-5 col-xl-6">
            <div className="sWhat__img">
              <img src={whatWeDoImg1} loading="lazy" alt=""/>
            </div>
            <div className="sWhat__img">
              <img src={whatWeDoImg2} loading="lazy" alt=""/>
            </div>
            <div className="sWhat__img d-none d-sm-block">
              <img src={whatWeDoImg3} loading="lazy" alt=""/>
            </div>
          </div>
          <div className="sWhat__col sWhat__col--right col-lg-7 col-xl-6">
            <div className="sWhat__content">
              <div className="section-title d-none d-lg-block">
                <h2>{lang.title}</h2>
                <p>{lang.descr}</p>
              </div>
              <h4>{lang.subTitle}</h4>
              <ol>
                {lang.list.map((item,index) => {
                  return <li key={index}>{item}</li>
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
