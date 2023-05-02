import goodImg from '../../img/svg/thumbs-up.svg'
import slideImg1 from "../../img/headerBlock-slide.jpg";

import React, {useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Grid, Pagination} from "swiper";
import {TransparentChevrons} from "../PreOrder/PreOrder";
import 'swiper/css';
import "swiper/css/grid";

export const Review = (props) => {
  const {} = props;

  let emptyArray = [];
  for(var i = 1; i <= 15; i++){
    emptyArray.push('');
  }

  const [slider, setSlider] = useState(null);

  return(
    <section className="sReview section">
      <div className="container">
        <div className="section-title text-lg-center">
          <h2>Clients Reviews</h2>
        </div>
        <Swiper
          modules={[Grid, Pagination]}
          className={'sReview__slider'}
          pagination={{ clickable: true }}
          updateOnWindowResize={true}
          observer={true}
          breakpoints={{
            0: {
              spaceBetween: 16,
              slidesPerView: "auto",
              grid: {
                rows: 1
              }
            },
            576: {
              spaceBetween: 32,
              slidesPerView: "auto",
              grid: {
                rows: 1
              }
            },
            992: {
              spaceBetween: 32,
              slidesPerView: 2,
              grid: {
                rows: 2
              }
            },
            1200: {
              spaceBetween: 32,
              slidesPerView: 2,
              grid: {
                rows: 2
              }
            },
          }}
          onSwiper={setSlider}
        >
          {emptyArray.map((item, index) => {
            return <SwiperSlide key={index}>
              <ReviewItem
                key={index}
                date={'Apr 06 at 12:38'}
                feedBackImg={goodImg}
                txt={'Все работает, поддержка реагирует, если возникают проблемы всё быстро фиксят, рекомендую)'}
                gameImg={slideImg1}
                gameName={' ⭐️Xbox Game Pass Ultimate + EA✔️3 года+✔️РФ✔️На Ваш Акк'}
              />
            </SwiperSlide>
          })}
          <TransparentChevrons slider={slider} displayClasses={"d-none d-lg-flex"}/>
        </Swiper>
      </div>
    </section>
  )
}

const ReviewItem = (props) => {
  const {date, feedBackImg, txt, gameImg, gameName} = props;

  return(
    <div className="sReview__item">
      <div className="sReview__top-row row align-items-center">
        <div className="col">
          <div className="sReview__date">{date}</div>
        </div>
        <div className="col-auto">
          <div className="sReview__fb-img">
            <img src={feedBackImg} alt=""/>
          </div>
        </div>
      </div>
      <div className="sReview__txt">{txt}</div>
      <div className="sReview__bot-row row align-items-center">
        <div className="col-auto">
          <div className="sReview__game-img">
            <img src={gameImg} alt=""/>
          </div>
        </div>
        <div className="col">
          <div className="sReview__game-name">{gameName}</div>
        </div>
      </div>

    </div>
  )
}
