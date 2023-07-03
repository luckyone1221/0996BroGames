import {CartIcon, ChevronLeft, ChevronRight, Vimeo, YouTube} from "../../SvgSpriptes";
import {useLanguage} from "../../Hooks/UseLang";
import {TagBox} from "../Catalog/ProdCard";
import {useGetContent} from "../../Hooks/useGetContent";
import React, {useEffect, useState} from "react";
import {getCurrencySymb, getServerToLink} from "../../Hooks/GetFunctions";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../Hooks/cartFunctions";
import {useCartActiveClasses} from "../../Hooks/useCartActiveClasses";
import {Link, useNavigate} from "react-router-dom";


import 'swiper/css';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, EffectFade, Pagination, Autoplay} from 'swiper';

export const ProdCardHeaderBlock = (props) => {
  const {product, imgArr, videoArr} = props;

  const config = useSelector(state => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lang = useLanguage().ProdCardHeaderBlock;
  const cartBtnActiveClasses = useCartActiveClasses(product.id);
  const content = useGetContent(product.id);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="section sProd">
      <div className="sProd__bg"></div>
      <div className="container">
        <div className="sProd__row row align-items-xxl-center">
          <div className="sProd__col sProd__col--left col-lg-6">
            {(!imgArr || !(imgArr.length > 1)) && !videoArr && (
              <div className="sProd__single-img">
                <img src={`https://graph.digiseller.ru/img.ashx?id_d=${product.id}&w=548&h=548&crop=true`} alt=""/>
              </div>
            )}
            {imgArr && (imgArr.length > 1 || videoArr) && (
              <>
                <Swiper
                  className="sProd__slider"
                  modules={[Thumbs, EffectFade, Autoplay]}
                  effect="fade"
                  thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                  slidesPerView={1}
                  autoplay={true}
                >
                  {content.imgGallery && content.imgGallery.map((item,index) => {
                    return <SwiperSlide key={index}>
                      <div className="sProd__img">
                        <img src={item} alt=""/>
                      </div>
                    </SwiperSlide>
                  })}
                  {!content.imgGallery && imgArr.map((item, index) => {
                    return <SwiperSlide key={index}>
                      <div className="sProd__img">
                        <img src={item.url} alt=""/>
                      </div>
                    </SwiperSlide>
                  })}
                  {/*new*/}
                  {videoArr && videoArr.map((item, index) => {
                    return <SwiperSlide key={index}>
                      <div className="sProd__img sProd__img--video">
                        {item.type === "youtube" && (
                          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${item.id}`}
                                  title="YouTube video player" frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen>
                          </iframe>
                        )}
                        {item.type === "vimeo" && (
                          <iframe src={`https://player.vimeo.com/video/${item.id}`} width="640" height="360"
                                  frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                        )}
                      </div>
                    </SwiperSlide>
                  })}
                  {/*new*/}
                </Swiper>
                <div className="sProd__thumb-wrap">
                  <Swiper
                    className="sProd__slider-thumb"
                    spaceBetween={16}
                    slideToClickedSlide={true}
                    slidesPerView={"auto"}
                    modules={[Thumbs]}
                    watchSlidesProgress
                    onSwiper={setThumbsSwiper}
                  >
                    {content.imgGallery && content.imgGallery.map((item,index) => {
                      return <SwiperSlide key={index}>
                        <div className="sProd__thumb-img">
                          <img src={item} alt=""/>
                        </div>
                      </SwiperSlide>
                    })}
                    {!content.imgGallery && imgArr.map((item, index) => {
                      return <SwiperSlide key={index}>
                        <div className="sProd__thumb-img">
                          <img src={item.url} alt=""/>
                        </div>
                      </SwiperSlide>
                    })}
                    {videoArr && videoArr.map((item,index) => {
                      return <SwiperSlide key={index}>
                        <div className="sProd__thumb-img">
                          <img src={item.preview} alt=""/>
                          {item.type === "youtube" && (<YouTube/>)}
                          {item.type === "vimeo" && (<Vimeo/>)}
                        </div>
                      </SwiperSlide>
                    })}
                  </Swiper>
                  <div className="sProd__thumb-btn swiper-btn prev" onClick={() => {
                    thumbsSwiper.slidePrev();
                  }}>
                    <ChevronLeft/>
                  </div>
                  <div className="sProd__thumb-btn swiper-btn next" onClick={() => {
                    thumbsSwiper.slideNext();
                  }}>
                    <ChevronRight/>
                  </div>
                </div>
              </>
            )}

          </div>
          <div className="sProd__col sProd__col--right col-lg-6">
            <div className="sProd__box">
              <div className="section-title">
                <h1>{product.name}</h1>
              </div>
              <div className="sProd__tags-row row">
                {content.tags.map((tag,index) => {
                  return <div key={index} className="col-auto">
                    <TagBox txt={tag.txt.trim()} color={tag.color}/>
                  </div>
                })}
              </div>
              <div className="sProd__price">{product.price}{getCurrencySymb(product.currency)}</div>
              <div className="sProd__btn-row row align-items-center">
                <div className="col-sm-auto">
                  <button className={`sProd__btn ${product.is_available === 0 ? "disabled" : ""}`} onClick={() => {
                    addToCart(product.id, config, 1).then((data) => {
                      dispatch({type: "CHANGE_CARTUID", payload: data.cart_uid});
                      dispatch({type: "SET_CARTRESPONSE", payload: data});
                    }).then(() => {
                      navigate(`/${getServerToLink(config.lang)}/cart`);
                    })
                  }}>
                    {product.is_available === 0 ? lang.noAvailable : lang.buyNow}
                  </button>
                </div>
                <div className="col-auto d-none d-sm-block">
                  <div className={`sProd__cart ${cartBtnActiveClasses} ${product.is_available === 0 ? "disabled" : ""}`} onClick={() => {
                    addToCart(product.id, config).then((data) => {
                      dispatch({type: "CHANGE_CARTUID", payload: data.cart_uid});
                      dispatch({type: "SET_CARTRESPONSE", payload: data});
                    })
                  }}>
                    <CartIcon/>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="sProd__how-txt" onClick={() => {
                    dispatch({type: "CHANGE_SCROLLTO", payload: "#sHow"});
                    navigate(`/${getServerToLink(config.lang)}/about`)
                  }}>
                    {lang.howItWorks}
                  </div>
                </div>
              </div>
              <ul className="sProd__how-list">
                {lang.list.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}