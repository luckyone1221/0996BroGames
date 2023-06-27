import React, {useEffect} from "react";
import {useLanguage} from "../../Hooks/UseLang";
import {ProdTypeSelect, SortOrderSelect} from "../CatalogItems/CatalogItems";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getCurrencySymb, getSearchResults} from "../../Hooks/GetFunctions";
import {ProdCard} from "../Catalog/ProdCard";
import slideImg1 from "../../img/headerBlock-slide.jpg";

export const Search = (props) => {
  const lang = useLanguage().SearchPage;
  const config = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return(
    <section className="sItems section">
      <div className="container">
        <div className="sItems__top-row row align-items-center">
          <div className="col-md">
            <div className="section-title">
              <h1>{lang.title} "{config.searchTxt}"</h1>
              <p>{lang.totalResults} {config.searchResults.length}</p>
            </div>
          </div>
        </div>
          {config.searchResults.length > 0 && (
            <div className="sItems__row row">
              {config.searchResults.map((item, index) => {
                return <div key={index} className="sItems__col col-sm-6 col-md-4 col-xl-3">
                  <ProdCard
                    isAvailable={item.is_available}
                    itemId={item.id}
                    name={item.name}
                    price={`${item.price} ${getCurrencySymb(config.currency)}`}
                  />
                </div>
              })}
            </div>
          )}
          {config.searchResults.length === 0 && (
            <div className="sItems__nothing-found">{lang.nothingFound}</div>
          )}
      </div>
    </section>
  )
}