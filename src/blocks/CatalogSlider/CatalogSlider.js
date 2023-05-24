import slideImg1 from '../../img/headerBlock-slide.jpg'

import {Link, useNavigate} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectFade, Pagination, Autoplay} from "swiper";
import {useLanguage} from "../../Hooks/UseLang";
import {useEffect, useState} from "react";
import {getProducts} from "../../Hooks/GetFunctions";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../Hooks/cartFunctions";

export const CatalogSlider = (props) => {
  const config = useSelector(state => state);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(config, 1, config.digIds.categorySlider, 12).then((data) => {
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
                    itemId={item.id}
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
  const {title, img, itemId} = props;
  const lang = useLanguage();

  const navigate = useNavigate();
  const config = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="cSlider__wrap">
      <div className="cSlider__bg">
        <img loading="lazy" src={img} alt=""/>
      </div>
      <div className="cSlider__container container">
        <div className="cSlider__title">
          {title}
        </div>
        <button className="cSlider__btn" onClick={() => {
          addToCart(itemId, config).then((data) => {
            dispatch({type: "CHANGE_CARTUID", payload: data.cart_uid});
            dispatch({type: "SET_CARTRESPONSE", payload: data});
          }).then(() => {
            navigate('/cart');
          })
        }}>{lang.general.buyNow}</button>
      </div>
    </div>
  )
}