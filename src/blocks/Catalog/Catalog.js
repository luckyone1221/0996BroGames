import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from "swiper";

import 'swiper/css';
import "swiper/css/grid";

import {ChevronLeft, ChevronRight} from "../../SvgSpriptes";
import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

import slideImg1 from '../../img/headerBlock-slide.jpg'
import steam from '../../img/svg/steam.svg'

export const Catalog = (props) => {
  const {} = props;

  let emptyArray = [];
  for(var i = 1; i <= 11; i++){
    emptyArray.push('');
  }

  const [slider, setSlider] = useState(null);

  return(
    <section className="sCatalog section">
      <div className="container">
        <div className="sCatalog__top-row row align-items-center">
          <div className="col col-xl-auto">
            <div className="section-title">
              <h2>Our Сatalog</h2>
            </div>
          </div>
          <div className="order-last order-xl-0 col-xl">
            <div className="sCatalog__tags-row align-items-center row">
              <div className="sCatalog__col col-auto">
                <div className="sCatalog__tag active">Top</div>
              </div>
              <div className="sCatalog__col col-auto">
                <div className="sCatalog__tag">Discount</div>
              </div>
              <div className="sCatalog__col sCatalog__col--splitter col-md-auto">
              </div>
              <div className="sCatalog__col col-auto">
                <div className="sCatalog__tag">Accounts</div>
              </div>
              <div className="sCatalog__col col-auto">
                <div className="sCatalog__tag">Activation</div>
              </div>
              <div className="sCatalog__col col-auto">
                <div className="sCatalog__tag">Keys</div>
              </div>
              <div className="sCatalog__col col-auto">
                <div className="sCatalog__tag">Soft</div>
              </div>
              <div className="sCatalog__col col-auto">
                <div className="sCatalog__tag">Top-Up</div>
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
              <div className="sCatalog__steam-img">
                <img loading="lazy" src={steam} alt=""/>
              </div>
              <div className="sCatalog__steam-txt">
                Пополнение кошелька
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

export const ProdCard = (props) => {
  const {href, img, tagsArr, name, price, addClasses} = props;

  return(
    <Link className={`prodCard ${addClasses ? addClasses : ''}`} to={href}>
      <div className="prodCard__img-box">
        <img loading="lazy" src={img} alt=""/>
        <div className="prodCard__tags">
          <div className="prodCard__tags-row row">
            {tagsArr.map((tag, index) => {
              return <div className="col-auto" key={index}>
                <TagBox txt={tag}/>
              </div>
            })}
          </div>
        </div>
      </div>
      <div className="prodCard__name">{name}</div>
      <div className="prodCard__price">{price}</div>
    </Link>
  )
}

export const TagBox = (props) => {
  let {txt} = props;

  let colorArr = {
    'accounts': 'rgba(255, 184, 0, 0.7)',
    'activation': 'rgba(189, 0, 255, 0.7)',
    'keys': 'rgba(0, 183, 183, 0.7)',
    'soft': 'rgba(51, 255, 0, 0.7)',
    'gift': 'rgba(66, 0, 255, 0.7)',
    'gift card': 'rgba(255, 0, 0, 0.7)',
    'top-up': 'rgba(255, 0, 184, 0.7)',
    'pc': 'rgba(240, 105, 29, 0.7)',
    'ps': 'rgba(95, 103, 234, 0.7)',
    'xbox': 'rgba(22, 152, 58, 0.7)',
    'nintendo': 'rgba(22, 89, 152, 0.7)',
    'other': 'rgba(87, 87, 87, 0.7)',
  }

  let getColor = (txt) => {
    if(colorArr[txt.toLowerCase()]){
      return colorArr[txt.toLowerCase()];
    }
    else{
      return colorArr.other;
    }
  }

  return(
    <div className="tag" style={{background: getColor(txt)}}>{txt}</div>
  )
}