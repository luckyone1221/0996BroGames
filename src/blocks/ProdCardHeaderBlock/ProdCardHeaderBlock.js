import {CartIcon} from "../../SvgSpriptes";
import {useLanguage} from "../../Hooks/UseLang";
import {TagBox} from "../Catalog/ProdCard";
import {useGetTags} from "../../Hooks/useGetTags";
import React, {useEffect, useState} from "react";
import {getCurrencySymb} from "../../Hooks/GetFunctions";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../Hooks/cartFunctions";
import {useCartActiveClasses} from "../../Hooks/useCartActiveClasses";
import {useNavigate} from "react-router-dom";

export const ProdCardHeaderBlock = (props) => {
  const {product} = props;

  const config = useSelector(state => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lang = useLanguage().ProdCardHeaderBlock;
  const tags = useGetTags(product.id);
  const cartBtnActiveClasses = useCartActiveClasses(product.id);

  return (
    <section className="section sProd">
      <div className="sProd__bg"></div>
      <div className="container">
        <div className="sProd__row row align-items-xxl-center">
          <div className="sProd__col sProd__col--left col-lg-6">
            <div className="sProd__img">
              <img src={`https://graph.digiseller.ru/img.ashx?id_d=${product.id}&w=548&h=548&crop=true`} alt=""/>
            </div>
          </div>
          <div className="sProd__col sProd__col--right col-lg-6">
            <div className="sProd__box">
              <div className="section-title">
                <h1>{product.name}</h1>
              </div>
              <div className="sProd__tags-row row">
                {tags.map((tag,index) => {
                  return <div key={index} className="col-auto">
                    <TagBox txt={tag.trim()}/>
                  </div>
                })}
              </div>
              <div className="sProd__price">{product.price}{getCurrencySymb(product.currency)}</div>
              <div className="sProd__btn-row row align-items-center">
                <div className="col-sm-auto">
                  <button className="sProd__btn" onClick={() => {
                    addToCart(product.id, config, 1).then((data) => {
                      dispatch({type: "CHANGE_CARTUID", payload: data.cart_uid});
                      dispatch({type: "SET_CARTRESPONSE", payload: data});
                    }).then(() => {
                      navigate('/cart');
                    })
                  }}>
                    {lang.buyNow}
                  </button>
                </div>
                <div className="col-auto d-none d-sm-block">
                  <div className={`sProd__cart ${cartBtnActiveClasses}`} onClick={() => {
                    addToCart(product.id, config).then((data) => {
                      dispatch({type: "CHANGE_CARTUID", payload: data.cart_uid});
                      dispatch({type: "SET_CARTRESPONSE", payload: data});
                    })
                  }}>
                    <CartIcon/>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="sProd__how-txt">
                    {lang.howItWorks}
                  </div>
                </div>
              </div>
              <ul className="sProd__how-list">
                {lang.list.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}