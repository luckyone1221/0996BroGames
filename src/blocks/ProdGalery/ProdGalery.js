import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper';
import {TransparentChevrons} from "../PreOrder/PreOrder";
import React, {useState} from "react";
import {useLanguage} from "../../Hooks/UseLang";

export const ProdGalery = (props) => {
  const {imgArr} = props;

  const [slider, setSlider] = useState();
  const lang = useLanguage().ProdGalery;

  if (imgArr && imgArr.length > 0){
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
            {imgArr.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProdGaleryImg img={item.url}/>
                </SwiperSlide>
              )
            })}
            <TransparentChevrons slider={slider}/>
          </Swiper>
        </div>
      </section>
    )
  }
}

const ProdGaleryImg = (props) => {
  const {img} = props;

  return(
    <div className="sGallery__img">
      <img src={img} loading="lazy" alt=""/>
    </div>
  )
}