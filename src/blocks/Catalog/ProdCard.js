import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {CartIcon} from "../../SvgSpriptes";
import {useDispatch, useSelector} from "react-redux";
import {useGetContent} from "../../Hooks/useGetContent";
import {addToCart} from "../../Hooks/cartFunctions";
import {useCartActiveClasses} from "../../Hooks/useCartActiveClasses";
import {useLanguage} from "../../Hooks/UseLang";
import {getServerToLink} from "../../Hooks/GetFunctions";

export const ProdCard = (props) => {
  const {name, price, addClasses, itemId, isAvailable} = props;

  const lang = useLanguage();
  const config = useSelector(state => state);
  const dispatch = useDispatch();
  const content = useGetContent(itemId);
  const btnClasses = useCartActiveClasses(itemId);

  console.log(isAvailable)
  return(
    <div className={`prodCard ${addClasses ? addClasses : ''} ${isAvailable === 0 ? "muted" : ""}`}>
      <Link className="prodCard__link" to={`/${getServerToLink(config.lang)}/prod/${itemId}`} target="_blank"></Link>
      <div className="prodCard__img-box">
        {content.imgGallery && (
          <img loading="lazy" src={content.imgGallery[0]} alt=""/>
        )}
        {!content.imgGallery && (
          <img loading="lazy" src={`https://graph.digiseller.ru/img.ashx?id_d=${itemId}&w=248&h=248&crop=true`} alt=""/>
        )}
        <div className="prodCard__tags">
          <div className="prodCard__tags-row row">
            {content.tags.map((tag, index) => {
              return <div className="col-auto" key={index}>
                <TagBox txt={tag.txt.trim()} color={tag.color}/>
              </div>
            })}
          </div>
        </div>
      </div>
      <div className="prodCard__name">{name}</div>

      <div className="prodCard__price-row row">
        {isAvailable === "unknown" && (
          <div className="col">
            <div className="prodCard__price">{price}</div>
          </div>
        )}
        {isAvailable === 1 && (
          <>
            <div className="col">
              <div className="prodCard__price">{price}</div>
            </div>
            <div className="col-auto">
              {/*{isAvailable !== undefined && ()}*/}
              <div className={`prodCard__cart-btn ${btnClasses}`} onClick={() => {
                addToCart(itemId, config).then((data) => {
                  dispatch({type: "CHANGE_CARTUID", payload: data.cart_uid});
                  dispatch({type: "SET_CARTRESPONSE", payload: data});
                })
              }}>
                <CartIcon/>
              </div>
            </div>
          </>
        )}
        {isAvailable === 0 && (
          <div className="prodCard__no-available col-12">
            {lang.general.noAvailable}
          </div>
        )}
      </div>
    </div>
  )
}

export const TagBox = (props) => {
  let {txt, color} = props;

  return(
    <div className="tag" style={{background: color ? color : "#6c757d"}}>{txt}</div>
  )
}