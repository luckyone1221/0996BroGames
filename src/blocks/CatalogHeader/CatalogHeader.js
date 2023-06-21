import {Link} from "react-router-dom";
import {useLanguage} from "../../Hooks/UseLang";
import {useDispatch, useSelector} from "react-redux";

import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode} from "swiper";

export const CatalogHeader = (props) => {
  const lang = useLanguage().CatalogHeader;
  const config = useSelector(state => state);

  if(config.digIds.categories[config.prodType].subCategories.length > 0){
    return(
      <div className="cHead">
        <div className="cHead__header">
          <div className="container">
            <div className="cHead__slider-wrap">
              <Swiper
                className={'cHead__slider'}
                slidesPerView={'auto'}
                freeMode={true}
                modules={[FreeMode]}
                breakpoints={{
                  0: {
                    spaceBetween: 16,
                  },
                  992: {
                    spaceBetween: 40,
                  },
                }}
              >
                <SwiperSlide>
                  <CatalogHeadItem txt={lang.all}/>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cHead__splitter"></div>
                </SwiperSlide>
                {config.digIds.categories[config.prodType].subCategories.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <CatalogHeadItem id={item.id} txt={item.name}/>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const CatalogHeadItem = (props) => {
  const {id, txt} = props;
  const dispatch = useDispatch();
  const currentPlatform = useSelector(state => state.currentPlatform);

  return (
    <div className={`cHead__h-link ${(!id && !currentPlatform) || currentPlatform === id ? "active" : ""}`} onClick={() => {
      if(id){
        dispatch({type: "CHANGE_PLATFORM", payload: id})
      }
      else{
        dispatch({type: "CHANGE_PLATFORM", payload: undefined})
      }
    }}>{txt}</div>
  )
}