import {Discord, Telegram} from "../../SvgSpriptes";

import gameImg from '../../img/headerBlock-slide.jpg'
import avatarImg from '../../img/avatar.jpg'
import {useEffect, useRef, useState} from "react";
import {useLanguage} from "../../Hooks/UseLang";
import {getTgData} from "../../Hooks/GetFunctions";
import {useSelector} from "react-redux";

export const Fresh = (props) => {
  const config = useSelector(state => state);
  const lang = useLanguage().Fresh;
  const [tgData, setTgData] = useState();

  useEffect(() => {
    getTgData().then((data) => {
      setTgData(data);
    })
  }, [])

  return (
    <section className="section sFresh">
      <div className="container">
        <div className="sFresh__box">
          <div className="sFresh__row row align-items-center">
            <div className="col">
              <div className="section-title">
                <h2>{lang.title}</h2>
              </div>
            </div>
            <div className="col-auto">
              <a href={process.env.REACT_APP_DISCORD_LINK} target="_blank" className="sFresh__btn">
                <Discord/>
              </a>
            </div>
            <div className="col-auto">
              <a href={config.lang === "ru-Ru" ? process.env.REACT_APP_TELEGRAM_LINK_RU : process.env.REACT_APP_TELEGRAM_LINK_EN} target="_blank" className="sFresh__btn">
                <Telegram/>
              </a>
            </div>
          </div>
          <div className="sFresh__box-inner">
            <div className="sFresh__items">
              {tgData && tgData.messages && tgData.messages.map((item,index) => {
                return <FreshItem
                  img={index === 0 ? avatarImg : undefined}
                  key={index}
                  avatar={avatarImg}
                  name={'BroGamers'}
                  date={item.date}
                  viewMoreTxt={lang.viewMore}
                  HideTxt={lang.hide}
                  content={item.message}
                />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const FreshItem = (props) => {
  const {img, avatar,name,date, content, viewMoreTxt, HideTxt} = props;

  //txt overflow
  const [txtHasOverFlow, setTxtHasOverflow] = useState(false);
  const [contentAddClasses, setContentAddClasses] = useState('');
  const textElement = useRef();

  let onceFlag = true;
  const calcTextOverFlow = () => {
    if(textElement.current && onceFlag){
      let lineHeight = parseInt(window.getComputedStyle(textElement.current).lineHeight);
      let divHeight = textElement.current.offsetHeight;
      let linesAmount = divHeight / lineHeight;

      setTxtHasOverflow(linesAmount > 7);

      if(linesAmount > 6){
        setContentAddClasses('clapTxt');
      }
      onceFlag = false;
    }
  }

  useEffect(() => {
    calcTextOverFlow();
  }, [])

  return(
    <div className="sFresh__item">
      <div className="sFresh__i-row row">
        {img && (
          <div className="sFresh__i-col sFresh__i-col--img col-md-auto">
            <div className="sFresh__i-img">
              <img loading="lazy" src={img} alt=""/>
            </div>
          </div>
        )}
        <div className="sFresh__i-col sFresh__i-col--content col-md">
          <div className="sFresh__author-row row">
            <div className="col-auto">
              <div className="sFresh__avatar">
                <img loading="lazy" src={avatar} alt=""/>
              </div>
            </div>
            <div className="col">
              <div className="sFresh__name">{name}</div>
            </div>
          </div>
          <div className="sFresh__date">{date}</div>
          <div className={`sFresh__content ${contentAddClasses ? contentAddClasses : ''}`} ref={textElement}>
            {content}
          </div>
          {txtHasOverFlow && (
            <div className="sFresh__view-more" onClick={() => {
              contentAddClasses ? setContentAddClasses('') : setContentAddClasses('clapTxt');
            }}>
              {contentAddClasses ? viewMoreTxt : HideTxt}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}