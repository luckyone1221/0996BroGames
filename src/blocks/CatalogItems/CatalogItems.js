//CatalogItems

import React, {useEffect, useRef, useState} from 'react'
import Select from 'react-select'
import {SwiperSlide} from "swiper/react";
import slideImg1 from "../../img/headerBlock-slide.jpg";
import {ProdCard} from "../Catalog/Catalog";

let setSelectClasses = (state) => {
  return {
    control: (state) => 'custom-select__control',
    valueContainer: (state) => 'custom-select__val-cont',
    singleValue: (state) => 'custom-select__value',
    placeholder: (state) => 'custom-select__placeholder',
    input: (state) => 'custom-select__input',
    indicatorsContainer: (state) => 'custom-select__indicators-cont',
    indicatorSeparator: (state) => 'custom-select__separator',
    indicatorContainer: (state) => 'custom-select__img',
    menu: (state) => 'custom-select__menu',
    menuList: (state) => 'custom-select__menu-list',
  }
}

export const CatalogItems = (props) => {
  //
  let productTypeOptions = [
    { value: 'Accounts', label: 'Accounts' },
    { value: 'Activation', label: 'Activation' },
    { value: 'Keys', label: 'Keys' },
    { value: 'Top-UP', label: 'Top-UP' }
  ]
  const [prodType, setProdType] = useState(productTypeOptions[0]);


  //load more
  let getEmptyArr = (num) => {
    let result = [];

    for(var i = 1; i <= num; i++){
      result.push('');
    }

    return result
  }
  let [emptyArray, setEmptyArr] = useState(getEmptyArr(12));
  let [loadingMute, setLoadingMute] = useState(false);
  let [loadingTop, setLoadingTop] = useState(100000);
  let loadMore = useRef();

  let calcLoadingTop = () => {
    if(loadMore.current){
      setLoadingTop(loadMore.current.getBoundingClientRect().top + window.scrollY);
    }
  }

  let loadMoreFunc = () => {
    if(loadMore.current){
      let loadMoreIsVisible = window.scrollY + window.innerHeight > loadingTop;
      if(!loadingMute && loadMoreIsVisible){
        setLoadingMute(true);
        setEmptyArr(getEmptyArr(emptyArray.length + 12));
        setLoadingMute(false);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', loadMoreFunc, {passive: true})
    window.addEventListener('resize', calcLoadingTop, {passive: true})
    return () => {
      window.removeEventListener('scroll', loadMoreFunc)
      window.addEventListener('resize', calcLoadingTop, {passive: true})
    }
  })

  return (
    <section className="sItems section">
      <div className="container">
        <div className="sItems__top-row row align-items-center">
          <div className="col-lg">
            <div className="section-title">
              <h1>Our Сatalog</h1>
            </div>
          </div>
          <CatalogItemsSelect state={prodType} setState={setProdType} options={productTypeOptions}/>
          <CatalogItemsSelect state={prodType} setState={setProdType} options={productTypeOptions}/>
          <CatalogItemsSelect state={prodType} setState={setProdType} options={productTypeOptions}/>
        </div>
        <div className="sItems__row row">
          {emptyArray.map((item, index) => {
            return <div className="sItems__col col-sm-6 col-md-4 col-xl-3">
              <ProdCard
                key={index}
                href="#"
                img={slideImg1}
                tagsArr={['Accounts', 'PS']}
                name={'Resident Evil 2'}
                price={'0.86 $'}
              />
            </div>
          })}
        </div>
        <div className="sItems__loading text-center" ref={loadMore}>Loading new products</div>
      </div>
    </section>
  )
}

const CatalogItemsSelect = (props) => {
  const {state, setState, options} = props;

  return(
    <div className="col-sm-4 col-lg-auto">
      <Select
        classNames={
          {
            ...setSelectClasses(),
            option: (state) => `custom-select__menu-option ${state.isSelected ? 'active' : ''}`,
          }}
        value={state}
        onChange={(e) => {
          setState(options.filter((option) => {
            return option.label === e.value
          }));
        }}
        isSearchable={false}
        options={options}
      />
    </div>
  )
}