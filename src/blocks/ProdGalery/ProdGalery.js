//

import gameImg1 from '../../img/photo-from-game-1.jpg'
import gameImg2 from '../../img/photo-from-game-2.jpg'
import gameImg3 from '../../img/photo-from-game-3.jpg'
import gameImg4 from '../../img/headerBlock-slide.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, EffectFade, Pagination} from 'swiper';
import {TransparentChevrons} from "../PreOrder/PreOrder";
import React, {useState} from "react";
import {useLanguage} from "../../Hooks/UseLang";

export const ProdGalery = (props) => {
  let emptyArray = [];
  for(var i = 1; i <= 5; i++){
    emptyArray.push('');
  }

  //
  const [slider, setSlider] = useState();
  const lang = useLanguage().ProdGalery;

  return(
    <section className="sGallery section">
      <div className="container">
        <div className="section-title">
          <h2>{lang.title}</h2>
        </div>
        <Swiper
          breakpoints={{
            0: {
              spaceBetween: 16,
            },
            576: {
              spaceBetween: 32,
            },
          }}
          className={"sGallery__slider"}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
          onSwiper={setSlider}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <ProdGaleryImg img={gameImg1}/>
          </SwiperSlide>
          <SwiperSlide>
            <ProdGaleryImg img={gameImg2}/>
          </SwiperSlide>
          {emptyArray.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <ProdGaleryImg img={gameImg3}/>
              </SwiperSlide>
            )
          })}
          <SwiperSlide>
            <ProdGaleryImg img={gameImg4}/>
          </SwiperSlide>
          <TransparentChevrons slider={slider}/>
        </Swiper>
      </div>
    </section>
  )
}

const ProdGaleryImg = (props) => {
  const {img} = props;

  return(
    <div className="sGallery__img">
      <img src={img} loading="lazy" alt=""/>
    </div>
  )
}