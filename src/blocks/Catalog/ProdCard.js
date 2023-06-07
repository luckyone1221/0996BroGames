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
      <Link className="prodCard__link" to={`/prod/${itemId}`} target="_blank"></Link>
      <div className="prodCard__img-box">
        <img loading="lazy" src={`https://graph.digiseller.ru/img.ashx?id_d=${itemId}&w=248&h=248&crop=true`} alt=""/>
        <div className="prodCard__tags">
          <div className="prodCard__tags-row row">
            {tags.map((tag, index) => {
              return <div className="col-auto" key={index}>
                <TagBox txt={tag.txt.trim()} color={tag.color}/>
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
  let {txt, color} = props;

  return(
    <div className="tag" style={{background: color ? color : "#6c757d"}}>{txt}</div>
  )
}