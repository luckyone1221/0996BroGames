import {useLanguage} from "../../Hooks/UseLang";
import {useEffect, useState} from "react";
import {getApiToken, getItemFeedbacks, getProducts, getStat} from "../../Hooks/GetFunctions";
import {useSelector} from "react-redux";

export const Digits = (props) => {
  const lang = useLanguage().Digits;
  const config = useSelector(state => state);

  //data
  const [years, setYears] = useState(new Date().getFullYear() - 2020);
  const [happyClients, setHappyClients] = useState(130);
  const [gamesOnSale, setGamesOnSale] = useState(lang[3].number);
  const [feedbacks, setFeedbacks] = useState(90);

  useEffect(() => {
    getApiToken(config).then((data) => {

      getStat(config, data.token).then((data) => {
        setHappyClients(Math.floor(data.total_rows/1000));
      })
    })

    getProducts(config,1, config.digIds.categories.all.id).then((data) => {
      setGamesOnSale(data.totalItems);
    })
    getItemFeedbacks(config, config.content.feedBackFallBackId).then((data) => {
      setFeedbacks(Number(data.totalGood/data.totalItems * 100, 1).toFixed(2));
    });
  }, [])

  return(
    <div className="sDigits">
      <div className="container">
        <div className="sDigits__row row">
          <DigitsItem number={years} prefix={lang[0].prefix} descr={lang[0].descr}/>
          <DigitsItem number={happyClients} prefix={lang[1].prefix} descr={lang[1].descr}/>
          <DigitsItem number={feedbacks} prefix={lang[2].prefix} descr={lang[2].descr}/>
          <DigitsItem number={gamesOnSale} prefix={lang[3].prefix} descr={lang[3].descr}/>
        </div>
      </div>
    </div>
  )
}

const DigitsItem = (props) => {
  const {number, prefix, descr} = props;

  return(
    <div className="col-sm-6 col-lg-3">
      <div className="sDigits__box">
        <div className="sDigits__title">{number}{prefix}</div>
        <div className="sDigits__subtitle">{descr}</div>
      </div>
    </div>
  )
}