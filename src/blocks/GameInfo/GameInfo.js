import {useLanguage} from "../../Hooks/UseLang";
import {useGetContent} from "../../Hooks/useGetContent";

export const GameInfo = (props) => {
  const {info, addInfo, id} = props;
  const lang = useLanguage().GameInfo;
  const content = useGetContent(id);

  return (
    <section className="sGame section">
      <div className="container">
        <div className="section-title text-center">
          <h2>{lang.title}</h2>
        </div>
        <div className="sGame__content" dangerouslySetInnerHTML={{__html: content.descr ? content.descr : info}}></div>
        <div className="sGame__content" dangerouslySetInnerHTML={{__html: content.addDescr ? content.addDescr : addInfo}}></div>
      </div>
    </section>
  )
}
