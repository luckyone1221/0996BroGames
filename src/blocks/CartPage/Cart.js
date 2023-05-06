import {Trash} from '../../SvgSpriptes'

import img1 from '../../img/headerBlock-slide.jpg'

export const Cart = (props) => {
  const {} = props;

  let emptyArray = [];
  for(var i = 1; i <= 4; i++){
    emptyArray.push('');
  }

  return (
    <section className="section sCart">
      <div className="container">
        <div className="sCart__row row">
          <div className="sCart__col sCart__col--left col-lg-8">
            <div className="sCart__title-row row align-items-center">
              <div className="col">
                <div className="section-title">
                  <h2>Shipping Card</h2>
                </div>
              </div>
              <div className="col-auto">
                <div className="sCart__amount">4 items</div>
              </div>
            </div>
            <div className="sCart__items">
              {emptyArray.map((item, index) => {
                return (
                  <CartItem
                    img={img1}
                    name={'RESIDENT EVIL 7 BIOHAZARD'}
                    discount={'-63%'}
                    quantity={'1'}
                    oldPrice={'599$'}
                    price={'4,09RUB'}
                  />
                )
              })}
            </div>
          </div>
          <div className="sCart__col sCart__col--right col-lg-4">
            <div className="sCart__summary">
              <div className="sCart__s-title">Order Summary</div>
              <div className="sCart__s-descr">Prices on payment page are displayed in Rubles, But no metter what currency you pay, convertation without any fee.</div>
              <div className="sCart__s-total-wrap">
                <div className="sCart__s-total-txt">Total cost:</div>
                <div className="sCart__s-price">17.86 $</div>
              </div>
              <div className="sCart__s-btn">Checkout</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const CartItem = (props) => {
  const {img, name, discount, quantity, oldPrice, price} = props;

  return(
    <div className="sCart__item">
      <div className="sCart__i-row row align-items-center">
        <div className="col-sm-auto sCart__i-col sCart__i-col--left">
          <div className="sCart__img">
            <img src={img} alt=""/>
          </div>
        </div>
        <div className="col-sm-auto sCart__i-col sCart__i-col--right">
          <div className="sCart__name-box">
            <div className="sCart__name">{name}</div>
            {discount && (
              <div className="sCart__discount">{discount}</div>
            )}
          </div>
          <div className="sCart__price-row row align-items-center">
            <div className="sCart__controll-box col-auto">
              <div className="sCart__btn sCart__btn--plus"></div>
              <div className="sCart__item-amount">{quantity}</div>
              <div className="sCart__btn sCart__btn--minus"></div>
            </div>
            <div className="col-auto">
              {oldPrice && (
                <div className="sCart__old-price">{oldPrice}</div>
              )}
              <div className="sCart__price">{price}</div>
            </div>
            <div className="col-auto ms-auto">
              <div className="sCart__trash">
                <Trash/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}