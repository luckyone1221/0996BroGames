import {Trash} from '../../SvgSpriptes'

import {useLanguage} from "../../Hooks/UseLang";
import {useDispatch, useSelector} from "react-redux";
import {getCurrencySymb, getServerToLink} from "../../Hooks/GetFunctions"
import {addToCart, changeCartItemAmount} from "../../Hooks/cartFunctions";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const Cart = (props) => {
  const {} = props;
  const lang = useLanguage().Cart;
  const config = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    changeCartItemAmount(undefined, config).then((data) => {
      dispatch({type: "SET_CARTRESPONSE", payload: data});
    })
  }, [config.lang, config.currency])

  return (
    <section className="section sCart">
      <div className="container">
        <div className="sCart__row row">
          <div className="sCart__col sCart__col--left col-lg-8">
            <div className="sCart__title-row row align-items-center">
              <div className="col">
                <div className="section-title">
                  <h2>{lang.title}</h2>
                </div>
              </div>
              <div className="col-auto">
                <div className="sCart__amount">{lang.items}: {config.cartResponse && Array.isArray(config.cartResponse.products) ? config.cartResponse.products.length : 0}</div>
              </div>
            </div>
            <div className="sCart__items">
              {config.cartResponse && Array.isArray(config.cartResponse.products) && config.cartResponse.products.map((item, index) => {
                return (
                  <CartItem
                    key={index}
                    product={item}
                  />
                )
              })}
            </div>
          </div>
          <div className="sCart__col sCart__col--right col-lg-4">
            <div className="sCart__summary">
              <div className="sCart__s-title">{lang.summary}</div>
              <div className="sCart__s-descr">{lang.descr}</div>
              <div className="sCart__s-total-wrap">
                <div className="sCart__s-total-txt">{lang.total}</div>
                <div className="sCart__s-price">
                  {config.cartResponse && Math.ceil(Number(config.cartResponse.amount.replace(',', '.')))}
                  {config.cartResponse && config.cartResponse.products && getCurrencySymb(config.cartResponse.currency)}</div>
              </div>
              {/*<div className="btn btn-danger">cleanUp</div>*/}
              <form id="digiselller_form" action="https://oplata.info/asp2/pay.asp" method="post">
                <input type="hidden" name="id_d" value="" />
                <input type="hidden" name="cart_uid" value={config.cartUID} />
                <input type="hidden" name="typecurr" value="WMZ" />
                <input type="hidden" name="email" value="" />
                <input type="hidden" name="lang" value={config.lang} />
                <input type="hidden" name="failpage" value={window.location.origin} />
                <input type="hidden" name="agent" value="" />
                <input type="hidden" name="promocode" value="" />
                <input type="hidden" name="unit_cnt" value="" />
                <input type="hidden" name="id_po" value="" />
                <button
                  className={`sCart__s-btn ${
                    !config.cartResponse ||
                    !config.cartResponse.products ||
                    config.cartResponse.products.length === 0 ? "disabled" : ""}`
                  }
                  type="submit"
                >{lang.checkout}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const CartItem = (props) => {
  const {discount, cnt_item, oldPrice, price, name, id, currency} = props.product;

  const [countBtnMute, setCountBtnMute] = useState(false);
  const config = useSelector(state => state);
  const dispatch = useDispatch();

  return(
    <div className="sCart__item">
      <div className="sCart__i-row row align-items-center">
        <div className="col-sm-auto sCart__i-col sCart__i-col--left">
          <Link className="sCart__img" to={`/${getServerToLink(config.lang)}/prod/${id}`}>
            <img src={`https://graph.digiseller.ru/img.ashx?id_d=${id}&w=248&h=248&crop=true`} alt=""/>
          </Link>
        </div>
        <div className="col-sm-auto sCart__i-col sCart__i-col--right">
          <div className="sCart__name-box">
            <Link className="sCart__name" to={`/${getServerToLink(config.lang)}/prod/${id}`}>{name}</Link>
            {discount && (
              <div className="sCart__discount">{discount}</div>
            )}
          </div>
          <div className="sCart__price-row row align-items-center">
            <div className="sCart__controll-box col-auto">
              <div className={`sCart__btn sCart__btn--plus ${countBtnMute ? "disabled" : ""}`} onClick={() => {
                setCountBtnMute(true);
                changeCartItemAmount(id, config, Number(cnt_item)+1).then((data) => {
                  dispatch({type: "SET_CARTRESPONSE", payload: data});
                }).then(() => {
                  setCountBtnMute(false);
                })
              }}>

              </div>
              <div className="sCart__item-amount">{cnt_item}</div>
              <div className={`sCart__btn sCart__btn--minus ${countBtnMute ? "disabled" : ""}`} onClick={() => {
                setCountBtnMute(true);
                changeCartItemAmount(id, config, Number(cnt_item)-1).then((data) => {
                  dispatch({type: "SET_CARTRESPONSE", payload: data});
                }).then(() => {
                  setCountBtnMute(false);
                })
              }}>

              </div>
            </div>
            <div className="col-auto">
              {oldPrice && (
                <div className="sCart__old-price">{oldPrice}</div>
              )}
              <div className="sCart__price">{Math.ceil(Number(price.replace(',', '.')))} {getCurrencySymb(currency)}</div>
            </div>
            <div className="col-auto ms-auto">
              <div className="sCart__trash" onClick={() => {
                changeCartItemAmount(id, config, 0).then((data) => {
                  dispatch({type: "SET_CARTRESPONSE", payload: data});
                })
              }}>
                <Trash/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}