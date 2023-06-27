import {useLanguage} from "../../Hooks/UseLang";

export const GameInfo = (props) => {
  const {info, addInfo} = props;
  const lang = useLanguage().GameInfo;

  return (
    <section className="sGame section">
      <div className="container">
        <div className="section-title text-center">
          <h2>{lang.title}</h2>
        </div>
        <div className="sGame__content" dangerouslySetInnerHTML={{__html: info}}></div>
        <div className="sGame__content" dangerouslySetInnerHTML={{__html: addInfo}}></div>
      </div>
    </section>
  )
}
