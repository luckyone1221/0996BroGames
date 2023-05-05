import slideImg1 from '../../img/headerBlock-slide.jpg'

import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectFade, Pagination} from "swiper";

export const CatalogSlider = (props) => {

  let emptyArray = [];
  for(var i = 1; i <= 7; i++){
    emptyArray.push('');
  }

  return(
    <div className="cSlider">
      <div className="container">
        <Swiper
          modules={[Pagination, EffectFade]}
          pagination={{ clickable: true }}
          effect="fade"
          className={'cSlider__slider'}
          slidesPerView={1}
          autoplay={true}
        >
          {emptyArray.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <CatalogSlide
                  title={`Survival is only the beginning ${index}`}
                  img={slideImg1}
                  href={"#"}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

//?
const CatalogSlide = (props) => {
  const {title, img, href} = props; 

  return (
    <div className="cSlider__wrap">
      <div className="cSlider__bg">
        <img src={img} alt=""/>
      </div>
      <div className="cSlider__container container">
        <div className="cSlider__title">
          {title}
        </div>
        <Link to={href} className="cSlider__btn">BUY NOW</Link>
      </div>
    </div>
  )
}