import PreOrderBg from "../../img/PreOrder.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Grid, Pagination, Thumbs} from 'swiper';

import slideImg1 from "../../img/headerBlock-slide.jpg";
import React, {useState} from "react";
import {ChevronLeft, ChevronRight} from "../../SvgSpriptes";
import {useLanguage} from "../../Hooks/UseLang";
import {ProdCard} from "../Catalog/ProdCard";
import {getCurrencySymb, getProducts} from "../../Hooks/GetFunctions";
import {useSelector} from "react-redux";

export const PreOrder = (props) => {
  const [products, setProducts] = useState([]);
  const config = useSelector(state => state);

  getProducts(config, 1, config.digIds.preOrder, 100).then((data) => {
    if(data && data.product){
      setProducts([...data.product]);
    }
  })

  //
  const [slider, setSlider] = useState();
  const lang = useLanguage().PreOrder;

  if(products.length > 0){
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
              {products.map((item, index) => {
                return <SwiperSlide key={index}>
                  <ProdCard
                    itemId={item.id}
                    name={item.name}
                    price={`${item.price} ${getCurrencySymb(item.currency)}`}
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