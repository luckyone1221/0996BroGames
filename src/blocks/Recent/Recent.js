import {TransparentChevrons} from "../PreOrder/PreOrder";
import React, {useEffect, useState} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from "swiper";

import {ProdCard} from "../Catalog/ProdCard";
import {useSelector} from "react-redux";
import {getCurrencySymb, getItemChars} from "../../Hooks/GetFunctions";
import {useLanguage} from "../../Hooks/UseLang";

export const Recent = (props) => {
  const {title, itemsList} = props;

  const lang = useLanguage();
  const config = useSelector(state => state);
  const [slider, setSlider] = useState();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    if(!Array.isArray(itemsList) || itemsList.length < 1){
      return
    }
    let productsArr = [];
    let promiseArr = [];

    for(let [index, id] of Object.entries(itemsList)){
      promiseArr.push(getItemChars(config, id).then((data) => {

        if(data && data.product){
          productsArr.push(data.product);
        }
      }));
    }

    Promise.all(promiseArr).then(() => {
      setProducts(productsArr);
    })
  }, []);

  return(
    <section className="sResent section">
      <div className="container">
        <div className="section-title">
          <h2>{title ? title : lang.Recent.titleRecent}</h2>
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
          className={'sResent__slider'}
          onSwiper={setSlider}
          pagination={{ clickable: true }}
        >
          {products.length > 0 && products.map((item, index) => {
            return <SwiperSlide key={index}>
              <ProdCard
                name={item.name}
                price={`${item.price} ${getCurrencySymb(item.currency)}`}
                itemId={item.id}
              />
            </SwiperSlide>
          })}
          <TransparentChevrons slider={slider}/>
        </Swiper>
      </div>
    </section>
  )
}