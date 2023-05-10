import slideImg1 from '../../img/headerBlock-slide.jpg'

import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectFade, Pagination, Autoplay} from "swiper";
import {useLanguage} from "../../Hooks/UseLang";
import {useEffect, useState} from "react";
import {getProducts} from "../../Hooks/GetFunctions";
import {useSelector} from "react-redux";

export const CatalogSlider = (props) => {
  const config = useSelector(state => state);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(config, 1, undefined, undefined, config.digIds.categorySlider).then((data) => {
      if(data.product){
        setProducts([...data.product]);
      }
    })
  }, [])

  if(products.length > 0){
    return(
      <div className="cSlider">
        <div className="container">
          <Swiper
            modules={[Pagination, EffectFade, Autoplay]}
            pagination={{ clickable: true }}
            effect="fade"
            className={'cSlider__slider'}
            slidesPerView={1}
            autoplay={true}
            loop={true}
          >
            {products.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <CatalogSlide
                    title={item.name}
                    img={`https://graph.digiseller.ru/img.ashx?id_d=${item.id}&w=1216&h=1216&crop=true`}
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
}

//?
const CatalogSlide = (props) => {
  const {title, img, href} = props;

  const lang = useLanguage();

  return (
    <div className="cSlider__wrap">
      <div className="cSlider__bg">
        <img loading="lazy" src={img} alt=""/>
      </div>
      <div className="cSlider__container container">
        <div className="cSlider__title">
          {title}
        </div>
        <Link to={href} className="cSlider__btn">{lang.general.buyNow}</Link>
      </div>
    </div>
  )
}