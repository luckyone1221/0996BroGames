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
            <img src={PreOrderBg} alt=""/>
          </div>
          <div className="section-title">
            <h2>Pre-order your new games</h2>
          </div>
          <Swiper
            modules={[Pagination]}
            spaceBetween={32}
            slidesPerView={"auto"}
            className={'sPreOrder__slider'}
            onSwiper={setSlider}
            pagination={{ clickable: true }}
          >
            {emptyArray.map((item, index) => {
              return <SwiperSlide>
                <ProdCard
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
  let {slider} = props;

  return(
    <>
      <div className="swiper-tp-btn d-none d-md-flex prev" onClick={() => {
        slider.slidePrev();
      }}>
        <ChevronLeft/>
      </div>
      <div className="swiper-tp-btn d-none d-md-flex next" onClick={() => {
        slider.slideNext();
      }}>
        <ChevronRight/>
      </div>
    </>
  )
}