import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {CartIcon} from "../../SvgSpriptes";
import {useDispatch, useSelector} from "react-redux";
import {useGetTags} from "../../Hooks/useGetTags";
import {addToCart} from "../../Hooks/cartFunctions";
import {useCartActiveClasses} from "../../Hooks/useCartActiveClasses";

export const ProdCard = (props) => {
  const {name, price, addClasses, itemId} = props;

  const config = useSelector(state => state);
  const dispatch = useDispatch();
  const tags = useGetTags(itemId);
  const btnClasses = useCartActiveClasses(itemId);

  return(
    <div className={`prodCard ${addClasses ? addClasses : ''}`}>
      <Link className="prodCard__link" to={`/prod/${itemId}`}></Link>
      <div className="prodCard__img-box">
        <img loading="lazy" src={`https://graph.digiseller.ru/img.ashx?id_d=${itemId}&w=248&h=248&crop=true`} alt=""/>
        <div className="prodCard__tags">
          <div className="prodCard__tags-row row">
            {tags.map((tag, index) => {
              return <div className="col-auto" key={index}>
                <TagBox txt={tag.trim()}/>
              </div>
            })}
          </div>
        </div>
      </div>
      <div className="prodCard__name">{name}</div>
      <div className="prodCard__price-row row">
        <div className="col">
          <div className="prodCard__price">{price}</div>
        </div>
        <div className="col-auto">

          <div className={`prodCard__cart-btn ${btnClasses}`} onClick={() => {
            addToCart(itemId, config).then((data) => {
              dispatch({type: "CHANGE_CARTUID", payload: data.cart_uid});
              dispatch({type: "SET_CARTRESPONSE", payload: data});
            })
          }}>
            <CartIcon/>
          </div>
        </div>
      </div>
    </div>
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