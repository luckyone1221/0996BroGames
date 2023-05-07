//CatalogItems

import {useNavigate} from 'react-router-dom';
import React, {useEffect, useRef, useState} from 'react'
import Select from 'react-select'
import slideImg1 from "../../img/headerBlock-slide.jpg";
import {ProdCard} from "../Catalog/Catalog";
import {useLanguage} from "../../Hooks/UseLang";

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

let getOptionFromArr = (options, value) => {
  return options.filter((option) => {
    return option.label === value;
  })
}

export const CatalogItems = (props) => {
  const {productType} = props;

  //
  const lang = useLanguage().CatalogItems;

  //prod Type
  let productTypeOptions = [
    { value: '/catalog/accounts', label: lang.accounts },
    { value: '/catalog/activation', label: lang.activation },
    { value: '/catalog/keys', label: lang.keys },
    { value: '/catalog/top-up', label: lang.topUp }
  ]
  const [prodType, setProdType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setProdType(getOptionFromArr(productTypeOptions, productType));
  }, [navigate])


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
              <h1>{lang.title}</h1>
            </div>
          </div>
          <CatalogItemsSelect
            state={prodType}
            setState={setProdType}
            options={productTypeOptions}
            onChange={(e) => {
              navigate(e.value);
            }}
          />
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
        <div className="sItems__loading text-center" ref={loadMore}>
          {lang.loadingTxt}
        </div>
      </div>
    </section>
  )
}

const CatalogItemsSelect = (props) => {
  const {state, setState, options, onChange} = props;

  return(
    <div className="col-sm-4 col-lg-auto">
      <Select
        classNames={
          {
            ...setSelectClasses(),
            option: (state) => `custom-select__menu-option ${state.isSelected ? 'active' : ''}`,
          }}
        value={state}
        onChange={
          (e) => {
            onChange ? onChange(e) : setState(getOptionFromArr(options, e.value));
          }
        }
        isSearchable={false}
        options={options}
      />
    </div>
  )
}