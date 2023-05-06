import slideImg1 from '../../img/headerBlock-slide.jpg'

import {TagBox} from "../Catalog/Catalog";
import {CartIcon} from "../../SvgSpriptes";

export const ProdCardHeaderBlock = (props) => {

  return (
    <section className="section sProd">
      <div className="sProd__bg"></div>
      <div className="container">
        <div className="sProd__row row align-items-xxl-center">
          <div className="sProd__col sProd__col--left col-lg-6">
            <div className="sProd__img">
              <img src={slideImg1} alt=""/>
            </div>
          </div>
          <div className="sProd__col sProd__col--right col-lg-6">
            <div className="sProd__box">
              <div className="section-title">
                <h1>Survival is only the tetb beginning Survival is only the beginning</h1>
              </div>
              <div className="sProd__tags-row row">
                <div className="col-auto">
                  <TagBox txt={'Accounts'}/>
                </div>
                <div className="col-auto">
                  <TagBox txt={'PC'}/>
                </div>
              </div>
              <div className="sProd__price">20$</div>
              <div className="sProd__btn-row row align-items-center">
                <div className="col-sm-auto">
                  <button className="sProd__btn">BUY NOW</button>
                </div>
                <div className="col-auto d-none d-sm-block">
                  <div className="sProd__cart">
                    <CartIcon/>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="sProd__how-txt">
                    How it works?
                  </div>
                </div>
              </div>
              <ul className="sProd__how-list">
                <li>Warranty for all games</li>
                <li>Best price allover the web</li>
                <li>Best quality</li>
                <li>Thousands of real positive reviews</li>
                <li>Good support that is always ready to answer your questions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}