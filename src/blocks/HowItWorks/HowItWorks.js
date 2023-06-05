import {useState} from "react";
import {useLanguage} from "../../Hooks/UseLang";

export const HowItWorks = (props) => {
  const {} = props;
  const lang = useLanguage().HowItWorks;

  return(
    <section className="section sHow" id="sHow">
      <div className="container">
        <div className="section-title">
          <h2>{lang.title}</h2>
        </div>
        <div className="sHow__items">
          {lang.items.map((item, index) => {
            return <HowItWorksItem key={index} title={item.title} content={item.content} isOpen={index === 0}/>
          })}
          {/**/}
        </div>
      </div>
    </section>
  )
}

export const HowItWorksItem = (props) => {
  const {title, content, isOpen} = props;
  const [showContent, setShowContent] = useState(isOpen);

  return(
    <div className="sHow__item">
      <div className="sHow__head" onClick={() => {
        setShowContent(!showContent);
      }}>
        <div className="sHow__row row align-items-center">
          <div className="col">
            <div className="sHow__title">{title}</div>
          </div>
          <div className="col-auto">
            <div className={`sHow__ball ${showContent ? "active" : ''}`}>
            </div>
          </div>
        </div>
        <div className={`sHow__content ${showContent ? "active d-block" : 'd-none'}`}>
          <div className="sHow__content-inner">
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}