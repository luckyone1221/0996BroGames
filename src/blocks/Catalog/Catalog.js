import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from "swiper";

import 'swiper/css';
import "swiper/css/grid";

import {ChevronLeft, ChevronRight} from "../../SvgSpriptes";
import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

import steam from '../../img/svg/steam.svg'
import {useLanguage} from "../../Hooks/UseLang";
import {ProdCard} from "./ProdCard";
import {getCurrencySymb, getProducts} from "../../Hooks/GetFunctions";
import {useSelector} from "react-redux";

export const Catalog = (props) => {
  const {} = props;

  //
  const lang = useLanguage().Catalog;
  const config = useSelector(state => state);

  const [slider, setSlider] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentCatalog, setCurrentCatalog] = useState("-3");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(-1);

  useEffect(() => {
    //11 items for first time because of static card
    //always get first page here
    getProducts(config, 1, currentCatalog, 11).then((data) => {
      if(data.product){
        setTotalPages(data.totalPages);

        //set it 2 for next time
        setCurrentPage(2);
        setProducts([...data.product]);
      }
      else{
        setProducts([]);
      }
    })
  }, [currentCatalog, config.lang, config.currency]);


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
              <CatalogFilterBtn
                currentCatalog={currentCatalog} setCurrentCatalog={setCurrentCatalog}
                btnTxt={lang.top}
                btnCategoryId={"-3"}
              />
              <CatalogFilterBtn
                currentCatalog={currentCatalog} setCurrentCatalog={setCurrentCatalog}
                btnTxt={lang.discount}
                btnCategoryId={"-1"}
              />
              {/*??*/}
              <div className="sCatalog__col d-none sCatalog__col--splitter col-md-auto">
              </div>
              {/*??*/}
              <CatalogFilterBtn
                currentCatalog={currentCatalog} setCurrentCatalog={setCurrentCatalog}
                btnTxt={lang.accounts}
                btnCategoryId={config.digIds.categories.accounts.id}
              />
              <CatalogFilterBtn
                currentCatalog={currentCatalog} setCurrentCatalog={setCurrentCatalog}
                btnTxt={lang.activation}
                btnCategoryId={config.digIds.categories.activations.id}
              />
              <CatalogFilterBtn
                currentCatalog={currentCatalog} setCurrentCatalog={setCurrentCatalog}
                btnTxt={lang.keys}
                btnCategoryId={config.digIds.categories.keys.id}
              />
              <CatalogFilterBtn
                currentCatalog={currentCatalog} setCurrentCatalog={setCurrentCatalog}
                btnTxt={lang.topUp}
                btnCategoryId={config.digIds.categories.topUp.id}
              />
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
          onReachEnd={()=>{
            if(currentPage <= totalPages){
              getProducts(config, currentPage, currentCatalog, 12).then((data) => {
                if(data.product){
                  setCurrentPage(currentPage+1);
                  setProducts([...products, ...data.product]);
                }
              })
            }
          }}
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
          {products.map((item, index) => {
            return <SwiperSlide key={index}>
              <ProdCard
                addClasses={"fixed-h"}
                itemId={item.id}
                name={item.name}
                price={`${item.price} ${getCurrencySymb(item.currency)}`}
              />
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </section>
  )
}

const CatalogFilterBtn = (props) => {
  const {currentCatalog, setCurrentCatalog, btnTxt, btnCategoryId} = props;

  return(
    <div className="sCatalog__col col-auto">
      <div
        className={`sCatalog__tag ${currentCatalog === btnCategoryId ? "active" : ""}`}
        onClick={() => setCurrentCatalog(btnCategoryId)}
      >
        {btnTxt}
      </div>
    </div>
  )
}