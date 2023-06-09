import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, EffectFade, Pagination, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

import {ChevronLeft, ChevronRight} from "../../SvgSpriptes";
import {useLanguage} from "../../Hooks/UseLang";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, getCurrencySymb, getItemChars, getServerToLink} from "../../Hooks/GetFunctions";
import {Link, useNavigate} from "react-router-dom";
import {addToCart} from "../../Hooks/cartFunctions";
import {useGetContent} from "../../Hooks/useGetContent";

export const HeaderBlock = (props) => {
  const config = useSelector(state => state);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(config, 1, config.digIds.sliderOnMain).then((data) => {
      if(data.product){
        setProducts([...data.product]);
      }
    })
  }, [config.lang, config.currency])

  //0
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="headerBlock">
      <div className="headerBlock__slider">
        <Swiper
          modules={[Thumbs, EffectFade, Autoplay]}
          effect="fade"
          thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
          slidesPerView={1}
          autoplay={true}
        >
          {products.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <HeaderBlockSlide
                  isAvailable={item.is_available}
                  img={`https://graph.digiseller.ru/img.ashx?id_d=${item.id}&w=1440&h=800&crop=true`}
                  id={item.id}
                  title={item.name}
                  subTitle={item.info}
                  price={Math.ceil(item.price)}
                  currency={getCurrencySymb(item.currency)}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      {/**/}
      <div className="headerBlock__overlay">
        <div className="container">
          <div className="headerBlock__thumb-wrap">
            <Swiper
              spaceBetween={16}
              slidesPerView={"auto"}
              modules={[Thumbs, Pagination]}
              pagination={{ clickable: true }}
              watchSlidesProgress
              onSwiper={setThumbsSwiper}
            >
              {products.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <HeaderBlockThumb id={item.id} img={`https://graph.digiseller.ru/img.ashx?id_d=${item.id}&w=176&h=176&crop=true`}/>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div className="headerBlock__thumb-btn swiper-btn prev" onClick={() => {
              thumbsSwiper.slidePrev();
            }}>
              <ChevronLeft/>
            </div>
            <div className="headerBlock__thumb-btn swiper-btn next" onClick={() => {
              thumbsSwiper.slideNext();
            }}>
              <ChevronRight/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const HeaderBlockThumb = (props) => {
  const {img, id} = props;
  const content = useGetContent(id);

  return(
    <div className='headerBlock__thumb-slide'>
      {content.imgGallery && (
        <img src={content.imgGallery[0]} alt=""/>
      )}
      {!content.imgGallery && (
        <img src={img} alt=""/>
      )}
    </div>
  )
}

const HeaderBlockSlide = (props) => {
  const {img, title, subTitle, id, price, currency, isAvailable} = props;
  const lang = useLanguage();
  const navigate = useNavigate();
  const config = useSelector(state => state);
  const dispatch = useDispatch();
  const content = useGetContent(id);

  //id
  const [itemChars, setItemChars] = useState();
  useEffect(() => {
    getItemChars(config, id).then((data) => {
      setItemChars(data);
    });
  }, [config.lang, config.currency, navigate]);

  return (
    <div className="headerBlock__slide" onClick={(e) => {
      if(!e.target.closest('.buy-now-js')){
        let win = window.open(`prod/${id}`, '_blank');
            win.focus();
      }
    }}>
      <div className="headerBlock__bg">
        {!content.imgGallery && itemChars && !itemChars.product.preview_imgs[1] && (
          <img src={img} alt=""/>
        )}
        {!content.imgGallery && itemChars && itemChars.product.preview_imgs[1] && (
          <img src={itemChars.product.preview_imgs[1].url} alt=""/>
        )}
        {content.imgGallery && (
          <img src={content.imgGallery[1]} alt=""/>
        )}
      </div>
      <div className="headerBlock__container container">
        <div className="headerBlock__box">
          <div className="headerBlock__title">{title}</div>
          <div className="headerBlock__subTitle" dangerouslySetInnerHTML={{__html: subTitle}}></div>
          <div className="headerBlock__btn-row row align-items-center">
            <div className="col-auto">
              <button className={`headerBlock__buy-btn ${isAvailable === 0 ? "disabled" : ""} buy-now-js`} onClick={(e) => {
                addToCart(id, config, 1).then((data) => {
                  dispatch({type: "CHANGE_CARTUID", payload: data.cart_uid});
                  dispatch({type: "SET_CARTRESPONSE", payload: data});
                }).then(() => {
                  navigate(`/${getServerToLink(config.lang)}/cart`);
                })
              }}>{lang.general.buyNow}</button>
            </div>
            <div className="headerBlock__col headerBlock__col--price col-auto">
              <div className="headerBlock__price">
                {price}
              </div>
              <div className="headerBlock__currency">
                {currency}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}