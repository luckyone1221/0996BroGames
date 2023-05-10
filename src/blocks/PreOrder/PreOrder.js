import PreOrderBg from "../../img/PreOrder.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Grid, Pagination, Thumbs} from 'swiper';

import slideImg1 from "../../img/headerBlock-slide.jpg";
import React, {useState} from "react";
import {ChevronLeft, ChevronRight} from "../../SvgSpriptes";
import {useLanguage} from "../../Hooks/UseLang";
import {ProdCard} from "../Catalog/ProdCard";

export const PreOrder = (props) => {


  let emptyArray = [];
  for(var i = 1; i <= 10; i++){
    emptyArray.push('');
  }
  //
  const [slider, setSlider] = useState();
  const lang = useLanguage().PreOrder;

  return(
    <section className="sPreOrder section">
      <div className="container">
        <div className="sPreOrder__box">
          <div className="sPreOrder__bg">
            <img loading="lazy" src={PreOrderBg} alt=""/>
          </div>
          <div className="section-title">
            <h2>{lang.title}</h2>
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