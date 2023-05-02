import slideImg1 from '../../img/headerBlock-slide.jpg'

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, EffectFade, Pagination} from 'swiper';


import 'swiper/css';
import 'swiper/css/effect-fade';

import {ChevronLeft, ChevronRight} from "../../SvgSpriptes";

export const HeaderBlock = (props) => {

  let emptyArray = [];
  for(var i = 1; i <= 6; i++){
    emptyArray.push('');
  }

  //
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="headerBlock">
      <div className="headerBlock__slider">
        <Swiper
          modules={[Thumbs, EffectFade]}
          effect="fade"
          thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
          slidesPerView={1}
          autoplay={true}
        >
          {emptyArray.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <HeaderBlockSlide
                  img={slideImg1}
                  title={`Survival is only the beginning${index}`}
                  subTitle={"Immerse yourself in a thrilling reimagining of the classic action horror genre with modern gameplay, updated storyline and stunning visuals."}
                  href={"https://www.google.com/"}
                  price={"20"}
                  currency={"USD"}
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
              {emptyArray.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <HeaderBlockThumb img={slideImg1}/>
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
  const {img} = props;

  return(
    <div className='headerBlock__thumb-slide'>
      <img src={img} alt=""/>
    </div>
  )
}

const HeaderBlockSlide = (props) => {
  const {img, title, subTitle, href, price, currency} = props;

  return (
    <div className="headerBlock__slide">
      <div className="headerBlock__bg">
        <img src={img} alt=""/>
      </div>
      <div className="headerBlock__container container">
        <div className="headerBlock__box">
          <div className="headerBlock__title">{title}</div>
          <div className="headerBlock__subTitle">{subTitle}</div>
          <div className="headerBlock__btn-row row align-items-center">
            <div className="col-auto">
              <a className="headerBlock__buy-btn" href={href}>Buy Now</a>
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