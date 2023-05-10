import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from "swiper";

import 'swiper/css';
import "swiper/css/grid";

import {ChevronLeft, ChevronRight} from "../../SvgSpriptes";
import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

import slideImg1 from '../../img/headerBlock-slide.jpg'
import steam from '../../img/svg/steam.svg'
import {useLanguage} from "../../Hooks/UseLang";
import {ProdCard} from "./ProdCard";

export const Catalog = (props) => {
  const {} = props;

  let emptyArray = [];
  for(var i = 1; i <= 11; i++){
    emptyArray.push('');
  }

  //
  const [slider, setSlider] = useState(null);

  //
  const lang = useLanguage().Catalog;

  return(
    <section className="sCatalog section">
      <div className="container">
        <div className="sCatalog__top-row row align-items-center">
          <div className="col col-xl-auto">
            <div className="section-title">
              <h2>{lang.title}</h2>
            </div>
          </div>
          <div className="order-last order-xl-0 col-xl">
            <div className="sCatalog__tags-row align-items-center row">
              <div className="sCatalog__col col-auto">
                <div className="sCatalog__tag active">{lang.top}</div>
              </div>
              <div className="sCatalog__col col-auto">
                <div className="sCatalog__tag">{lang.discount}</div>
              </div>
              <div className="sCatalog__col sCatalog__col--splitter col-md-auto">
              </div>
              <div className="sCatalog__col col-auto">
                <div className="sCatalog__tag">{lang.accounts}</div>
              </div>
              <div className="sCatalog__col col-auto">
                <div className="sCatalog__tag">{lang.activation}</div>
              </div>
              <div className="sCatalog__col col-auto">
                <div className="sCatalog__tag">{lang.keys}</div>
              </div>
              <div className="sCatalog__col col-auto">
                <div className="sCatalog__tag">{lang.soft}</div>
              </div>
              <div className="sCatalog__col col-auto">
                <div className="sCatalog__tag">{lang.topUp}</div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="sCatalog__btns-row row">
              <div className="col-auto">
                <div className="sCatalog__btn swiper-btn prev" onClick={() => {
                  slider.slidePrev();
                }}>
                  <ChevronLeft/>
                </div>
              </div>
              <div className="col-auto">
                <div className="sCatalog__btn swiper-btn next"onClick={() => {
                  slider.slideNext();
                }}>
                  <ChevronRight/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Grid]}
          className={'sCatalog__slider'}
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
              slidesPerView: 2,
              grid: {
                rows: 1
              }
            },
            992: {
              spaceBetween: 32,
              slidesPerView: 3,
              grid: {
                rows: 2
              }
            },
            1200: {
              spaceBetween: 32,
              slidesPerView: 4,
              grid: {
                rows: 2
              }
            },
          }}
          onSwiper={setSlider}
        >
          <SwiperSlide>
            <Link className="prodCard sCatalog__steam-card">
              <div className="sCatalog__steam-img text-center">
                <img loading="lazy" src={steam} alt=""/>
              </div>
              <div className="sCatalog__steam-txt">
                {lang.walletTxt}
              </div>
            </Link>
          </SwiperSlide>
          {emptyArray.map((item, index) => {
            return <SwiperSlide key={index}>
              <ProdCard
                key={index}
                href="#"
                addClasses={'fixed-h'}
                img={slideImg1}
                tagsArr={['Accounts', 'PS']}
                name={'Resident Evil 2'}
                price={'0.86 $'}
              />
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </section>
  )
}
