import goodImg from '../../img/svg/thumbs-up.svg'
import badImg from '../../img/svg/thumbs-down.svg'

import React, {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Grid, Pagination} from "swiper";
import {TransparentChevrons} from "../PreOrder/PreOrder";
import 'swiper/css';
import "swiper/css/grid";
import {useLanguage} from "../../Hooks/UseLang";
import {getItemChars, getItemFeedbacks} from "../../Hooks/GetFunctions";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const Review = (props) => {
  const {itemId, isFeedBackCase} = props;

  //feedBackList
  const [gameName, setGameName] = useState('');

  const [feedBackList, setFeedBackList] = useState([]);
  const [slider, setSlider] = useState(null);

  const content = useSelector(state => state.content);
  const lang = useLanguage().Review;
  const navigate = useNavigate();
  const config = useSelector((state => state))

  useEffect(() => {
    getItemChars(config, itemId).then((data) => {
      if(data.product && data.product.name){
        setGameName(data.product.name);
      }
      else{
        // console.log('//broken')
        // console.log(data.product)
        // console.log('//broken')
      }

    })

    getItemFeedbacks(config, itemId).then((data) => {
      if (data.review && data.review.length > 4){
        setFeedBackList(data.review);
      }
      else{
        if(!isFeedBackCase){
          setFeedBackList("ShowFallback");
        }
        else{
          setFeedBackList([]);
        }

      }
    });
  }, [navigate]);


  if(Array.isArray(feedBackList) && feedBackList.length > 0){
    return(
      <section className="sReview section">
        <div className="container">
          <div className="section-title text-lg-center">
            <h2>{lang.title}</h2>
          </div>
          <Swiper
            modules={[Grid, Pagination]}
            className={'sReview__slider'}
            pagination={{ clickable: true }}
            updateOnWindowResize={true}
            observer={true}
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
                slidesPerView: "auto",
                grid: {
                  rows: 1
                }
              },
              992: {
                spaceBetween: 32,
                slidesPerView: 2,
                grid: {
                  rows: 2
                }
              },
              1200: {
                spaceBetween: 32,
                slidesPerView: 3,
                grid: {
                  rows: 2
                }
              },
            }}
            onSwiper={setSlider}
          >
            {feedBackList.map((item, index) => {
              return <SwiperSlide key={index}>
                <ReviewItem
                  key={index}
                  date={item.date}
                  type={item.type}
                  txt={item.info}
                  itemId={itemId}
                  gameName={gameName}
                />
              </SwiperSlide>
            })}
            <TransparentChevrons slider={slider} displayClasses={"d-none d-lg-flex"}/>
          </Swiper>
        </div>
      </section>
    )
  }

  if(feedBackList === "ShowFallback"){
    return (
      <Review itemId={content.feedBackFallBackId} isFeedBackCase={true}/>
    )
  }
}

const ReviewItem = (props) => {
  const {date, type, txt, itemId, gameName} = props;

  return(
    <div className="sReview__item">
      <div className="sReview__top-row row align-items-center">
        <div className="col">
          <div className="sReview__date">{date}</div>
        </div>
        <div className="col-auto">
          <div className="sReview__fb-img">
            {type === "good" && (<img loading="lazy" src={goodImg} alt=""/>)}
          </div>
          <div className="sReview__fb-img">
            {type === "bad" && (<img loading="lazy" className="bad" src={badImg} alt=""/>)}
          </div>
        </div>
      </div>
      <div className="sReview__txt">{txt}</div>
      <div className="sReview__bot-row row align-items-center">
        <div className="col-auto">
          <div className="sReview__game-img">
            <img loading="lazy" src={`https://graph.digiseller.ru/img.ashx?id_d=${itemId}&w=248&h=248&crop=true`} alt=""/>
          </div>
        </div>
        <div className="col">
          <div className="sReview__game-name">{gameName}</div>
        </div>
      </div>
    </div>
  )
}
