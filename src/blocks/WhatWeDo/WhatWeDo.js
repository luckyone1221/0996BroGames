//WhatWeDo

import whatWeDoImg1 from '../../img/sWhat-1.jpg'
import whatWeDoImg2 from '../../img/sWhat-2.jpg'
import whatWeDoImg3 from '../../img/sWhat-3.jpg'

export const WhatWeDo = (props) => {

  return(
    <div className="section sWhat">
      <div className="container">
        <div className="section-title d-lg-none">
          <h2>What we do?</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p>
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
                <h2>What we do?</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p>
              </div>
              <h4>Have I can help?</h4>
              <ol>
                <li>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</li>
                <li>Lorem Ipsum is that it has a more-or-less </li>
                <li>Lorem Ipsum is that it has a more-or-less normal distribution</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
