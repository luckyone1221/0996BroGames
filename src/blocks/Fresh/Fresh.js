import {Discord, Telegram} from "../../SvgSpriptes";

import gameImg from '../../img/headerBlock-slide.jpg'
import avatarImg from '../../img/avatar.jpg'
import {useEffect, useRef, useState} from "react";

export const Fresh = (props) => {
  return (
    <section className="section sFresh">
      <div className="container">
        <div className="sFresh__box">
          <div className="sFresh__row row align-items-center">
            <div className="col">
              <div className="section-title">
                <h2>Fresh on the blog</h2>
              </div>
            </div>
            <div className="col-auto">
              <a href="#" target="_blank" className="sFresh__btn">
                <Discord/>
              </a>
            </div>
            <div className="col-auto">
              <a href="#" target="_blank" className="sFresh__btn">
                <Telegram/>
              </a>
            </div>
          </div>
          <div className="sFresh__box-inner">
            <div className="sFresh__items">
              <FreshItem
                img={gameImg}
                avatar={avatarImg}
                name={'Neaches'}
                date={'Apr 06 at 12:38'}
                content={
                  <>
                    Выборка новостей:<br/><br/>
                    - Скоро откроются предзаказы на Avatar: Frontiers of Pandora, в сети нашли намеки на дату выхода игры после Starfield.<br/><br/>
                    - Слух: Disney скомпонует все вырезанные кадры <br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur ea esse ipsa minus, suscipit. Aperiam atque consectetur distinctio doloribus est ex laudantium magni mollitia provident! Aliquid deserunt, dignissimos eligendi eos facere id in iusto magnam, maxime minus non placeat porro rem reprehenderit sint tempora tenetur, ut voluptate voluptates voluptatibus? Architecto, corporis debitis dicta dolore doloremque et eum explicabo fugit illum labore, magnam molestias necessitatibus numquam perferendis, placeat quaerat quisquam quo quos ratione rem sed similique totam voluptatem! Commodi eaque eligendi fugiat impedit incidunt inventore ipsa ipsum libero quas quia quibusdam quidem quo, quod, repellendus rerum sed tenetur. Perspiciatis, sapiente.
                  </>
                }
              />
              <FreshItem
                avatar={avatarImg}
                name={'Neaches'}
                date={'Apr 06 at 12:38'}
                content={
                  <>
                    Выборка новостей:<br/><br/>
                    - Скоро откроются предзаказы на Avatar: Frontiers of Pandora, в сети нашли намеки на дату выхода игры после Starfield.<br/><br/>
                    - Слух: Disney скомпонует все вырезанные кадры<br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur ea esse ipsa minus, suscipit. Aperiam atque consectetur distinctio doloribus est ex laudantium magni mollitia provident! Aliquid deserunt, dignissimos eligendi eos facere id in iusto magnam, maxime minus non placeat porro rem reprehenderit sint tempora tenetur, ut voluptate voluptates voluptatibus? Architecto, corporis debitis dicta dolore doloremque et eum explicabo fugit illum labore, magnam molestias necessitatibus numquam perferendis, placeat quaerat quisquam quo quos ratione rem sed similique totam voluptatem! Commodi eaque eligendi fugiat impedit incidunt inventore ipsa ipsum libero quas quia quibusdam quidem quo, quod, repellendus rerum sed tenetur. Perspiciatis, sapiente.
                  </>
                }
              />
              <FreshItem
                avatar={avatarImg}
                name={'Neaches'}
                date={'Apr 06 at 12:38'}
                content={
                  <>
                    Short Message
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const FreshItem = (props) => {
  const {img, avatar,name,date, content} = props;

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
              <img src={img} alt=""/>
            </div>
          </div>
        )}
        <div className="sFresh__i-col sFresh__i-col--content col-md">
          <div className="sFresh__author-row row">
            <div className="col-auto">
              <div className="sFresh__avatar">
                <img src={avatar} alt=""/>
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
              {contentAddClasses ? "View more" : "Hide"}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}