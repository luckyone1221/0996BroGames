import PreOrderBg from "../../img/PreOrder.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Grid, Pagination, Thumbs} from 'swiper';

import slideImg1 from "../../img/headerBlock-slide.jpg";
import React, {useState} from "react";
import {ProdCard} from "../Catalog/Catalog";
import {ChevronLeft, ChevronRight} from "../../SvgSpriptes";

export const PreOrder = (props) => {
  const [slider, setSlider] = useState();

  let emptyArray = [];
  for(var i = 1; i <= 10; i++){
    emptyArray.push('');
  }

  return(
    <section className="sPreOrder section">
      <div className="container">
        <div className="sPreOrder__box">
          <div className="sPreOrder__bg">
            <img loading="lazy" src={PreOrderBg} alt=""/>
          </div>
          <div className="section-title">
            <h2>Pre-order your new games</h2>
          </div>
          <Swiper
            modules={[Pagination]}
            breakpoints={{
              0: {
                spaceBetween: 16,
              },
              576: {
                spaceBetween: 32,
              },
              992: {
                spaceBetween: 32,
              },
              1200: {
                spaceBetween: 32,
              },
            }}
            slidesPerView={"auto"}
            className={'sPreOrder__slider'}
            onSwiper={setSlider}
            pagination={{ clickable: true }}
          >
            {emptyArray.map((item, index) => {
              return <SwiperSlide key={index}>
                <ProdCard
                  key={index}
                  href="#"
                  img={slideImg1}
                  tagsArr={['Accounts', 'PS']}
                  name={'Resident Evil 2'}
                  price={'0.86 $'}
                />
              </SwiperSlide>
            })}
            <TransparentChevrons slider={slider}/>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export const TransparentChevrons = (props) => {
  let {slider, displayClasses} = props;

  return(
    <>
      <div className={`swiper-tp-btn ${displayClasses ? displayClasses : 'd-none d-md-flex'} prev`} onClick={() => {
        slider.slidePrev();
      }}>
        <ChevronLeft/>
      </div>
      <div className={`swiper-tp-btn ${displayClasses ? displayClasses : 'd-none d-md-flex'} next`} onClick={() => {
        slider.slideNext();
      }}>
        <ChevronRight/>
      </div>
    </>
  )
}