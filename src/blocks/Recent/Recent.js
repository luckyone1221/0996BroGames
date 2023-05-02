
import {TransparentChevrons} from "../PreOrder/PreOrder";
import React, {useState} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from "swiper";
import {ProdCard} from "../Catalog/Catalog";
import slideImg1 from "../../img/headerBlock-slide.jpg";

export const Recent = (props) => {
  const {} = props;
  const [slider, setSlider] = useState();

  let emptyArray = [];
  for(var i = 1; i <= 10; i++){
    emptyArray.push('');
  }

  return(
    <section className="sResent section">
      <div className="container">
        <div className="section-title">
          <h2>You recently viewed</h2>
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
          className={'sResent__slider'}
          onSwiper={setSlider}
          pagination={{ clickable: true }}
        >
          {emptyArray.map((item, index) => {
            return <SwiperSlide key={index}>
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
    </section>
  )
}