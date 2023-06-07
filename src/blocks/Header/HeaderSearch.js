import React, {useEffect, useRef, useState} from "react";
import {Zoom} from "../../SvgSpriptes";
import {useLanguage} from "../../Hooks/UseLang";
import {useDispatch, useSelector} from "react-redux";
import {ProdCard, TagBox} from "../Catalog/ProdCard";
import {getCurrencySymb} from "../../Hooks/GetFunctions";
import {Link, useNavigate} from "react-router-dom";
import {useGetTags} from "../../Hooks/useGetTags";

export const HeaderSearch = (props) => {
  const {hasDropDown} = props;

  const [DDIsVisiable, setDDIsVisiable] = useState(false);
  const lang = useLanguage().header;
  const config = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeSearchDDMissclick = (e) => {
    if(!e.target.closest('.search__dd--js') && !e.target.closest('.search-inp--js')){
      setDDIsVisiable(false);
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', closeSearchDDMissclick)
    return () => {
      document.body.removeEventListener('click', closeSearchDDMissclick)
    }
  }, [])

  return (
    <div className="search">
      <div className="search__inp-wrap">
        <input
          placeholder={lang.searchPlaceholder}
          type="text"
          value={config.searchTxt}
          className="search__input search-inp--js form-control"
          onChange={(e) => {
            dispatch({type: "CHANGE_SEARCHTXT", payload: e.target.value});
          }}
          onFocus={() => {
            setDDIsVisiable(true)
          }}
          onBlur={() => {
            // setDDIsVisiable(false)
            if(!hasDropDown){
              navigate('/search')
            }
          }}
        />
        <div className="search__inp-icon">
          <Zoom/>
        </div>
      </div>
      {hasDropDown && DDIsVisiable && (
        <div className="search__dd search__dd--js">
          <div className="search__dd-inner">
            {config.searchResults.length > 0 && config.searchResults.map((item, index) => {
              if(index < 5){
                return <SearchDDItem
                  itemId={item.id}
                  name={item.name}
                  price={`${item.price} ${getCurrencySymb(config.currency)}`}
                />
              }
              if(index === 5){
                return <div className="search__dd-dots">...</div>
              }
            })}
            {config.searchResults.length > 0 && (
              <Link className="search__dd-link" to="/search">{lang.GotoSearchPage}</Link>
            )}
            {config.searchResults.length === 0 && (
              <div className="search__dd-link text-muted">{lang.nothingFound}</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

const SearchDDItem = (props) => {
  const {name, price, itemId} = props;
  const tags = useGetTags(itemId);

  return(
    <Link className="search__dd-item" to={`/prod/${itemId}`}>
      <div className="search__dd-row row align-items-center">
        <div className="col-auto">
          <div className="search__item-img">
            <img loading="lazy" src={`https://graph.digiseller.ru/img.ashx?id_d=${itemId}&w=48&h=48&crop=true`} alt=""/>
          </div>
        </div>
        <div className="col">
          <div className="search__item-name">{name}</div>
          <div className="search__item-price">{price}</div>
        </div>
        <div className="col-auto">
          <div className="row align-items-center gx-3">
            {tags.map((tag, index) => {
              return <div className="col-auto" key={index}>
                <TagBox txt={tag.txt.trim()} color={tag.color}/>
              </div>
            })}
          </div>
        </div>
      </div>
    </Link>
  )
}