import {useNavigate} from 'react-router-dom';
import React, {useEffect, useRef, useState} from 'react'
import Select from 'react-select'
import slideImg1 from "../../img/headerBlock-slide.jpg";
import {useLanguage} from "../../Hooks/UseLang";
import {
  getCatalogList, getCurrencySymb,
  getProdTypeOption,
  getProducts,
  getSelectClasses,
  getSortOrderOption
} from "../../Hooks/GetFunctions";
import {useDispatch, useSelector} from "react-redux";
import {ProdCard} from "../Catalog/ProdCard";


export const CatalogItems = (props) => {
  const {productType} = props;

  const config = useSelector(state => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lang = useLanguage().CatalogItems;
  // getCatalogList(config, 133459);

  //
  useEffect(() => {
    dispatch({type: "CHANGE_PRODTYPE", payload: productType});
  }, [navigate])

  //select options
  let productTypeOptions = [
    { value: '/catalog', label: lang.all, reduxKey: 'all'},
    { value: '/catalog/accounts', label: lang.accounts, reduxKey: "accounts"},
    { value: '/catalog/activations', label: lang.activation, reduxKey: "activations"},
    { value: '/catalog/keys', label: lang.keys, reduxKey: "keys"},
    // { value: '/catalog/top-up', label: lang.topUp }
  ];
  let orderOptions = [
    {value: "name", label: lang.sortName},
    {value: "nameDESC", label: lang.sortNameDesc},
    {value: "price", label: lang.sortPrice},
    {value: "priceDESC", label: lang.sortPriceDesc},
  ];

  //again
  const [totalPages, setTotalPages] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const [alertTxt, setAlertTxt] = useState(lang.loadingTxt);
  const [products,SetProducts] = useState([]);
  const [loadingMute, setLoadingMute] = useState(false);
  const loadMore = useRef();
  const loadMoreFunc = () => {
    if(loadMore.current){
      let loadMoreIsVisible = window.scrollY + window.innerHeight > loadMore.current.getBoundingClientRect().top + window.scrollY;

      if(!loadingMute && loadMoreIsVisible && currentPage < totalPages){
        setLoadingMute(true);
        getProducts(config, currentPage+1).then((data) => {
          if(data.product){
            setCurrentPage(currentPage+1);
            SetProducts([...products, ...data.product]);

            window.setTimeout(() => {
              setLoadingMute(false);
            }, 100);
          }
        })
      }
    }
  }

  //
  useEffect(() => {
    setCurrentPage(1);
    getProducts(config).then((data) => {
      if(data.product){
        setTotalPages(data.totalPages);
        SetProducts([...data.product]);
      }
      else{
        SetProducts([]);
        setAlertTxt(lang.nothingFound);
      }
    })
  }, [config])
  useEffect(() => {
    window.addEventListener('scroll', loadMoreFunc, {passive: true})
    return () => {
      window.removeEventListener('scroll', loadMoreFunc)
    }
  }, [products])//currentPage??

  return (
    <section className="sItems section">
      <div className="container">
        <div className="sItems__top-row row align-items-center">
          <div className="col-md">
            <div className="section-title">
              <h1>{lang.title}</h1>
            </div>
          </div>
          <CatalogItemsSelect
            value={getProdTypeOption(productTypeOptions, config.prodType)}
            options={productTypeOptions}
            onChange={(e) => {
              navigate(e.value);
            }}
          />
          {/*new*/}
          <CatalogItemsSelect
            value={getSortOrderOption(orderOptions, config.sortOrder)}
            options={orderOptions}
            onChange={(e) => {
              dispatch({type: "CHANGE_SORTORDER", payload: e.value});
            }}
          />
        </div>
        {products.length > 0 ? (
          <>
            <div className="sItems__row row">
              {products && products.length > 0 && products.map((item, index) => {
                // console.log(item);
                return <div key={index} className="sItems__col col-sm-6 col-md-4 col-xl-3">
                  <ProdCard
                    itemId={item.id}
                    key={index}
                    href={`product/${item.id}`}
                    img={slideImg1}
                    tagsArr={['Accounts', 'PS']}
                    name={item.name}
                    price={`${item.price} ${getCurrencySymb(item.currency)}`}
                  />
                </div>
              })}
            </div>
            {currentPage < totalPages && (
              <div className="sItems__loading text-center" ref={loadMore}>
                {lang.loadingTxt}
              </div>
            )}
          </>
        ) : (
          <div className="h4">{alertTxt}</div>
        )}
      </div>
    </section>
  )
}

const CatalogItemsSelect = (props) => {
  const {value, options, onChange} = props;

  return(
    <div className="col-6 col-md-auto">
      <Select
        classNames={
          {
            ...getSelectClasses(),
            option: (state) => `custom-select__menu-option ${state.isSelected ? 'active' : ''}`,
          }}
        onChange={
          (e) => {
            onChange(e);
          }
        }
        value={value}
        isSearchable={false}
        options={options}
      />
    </div>
  )
}